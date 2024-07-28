import { reactive, toRefs } from "vue";
import { Commit } from "vuex";

interface UserState {
  name: string;
  email: string;
}

const state = reactive<UserState>({
  name: "",
  email: "",
});

const mutations = {
  setUser(state: UserState, user: { name: string; email: string }) {
    state.name = user.name;
    state.email = user.email;
  },
  clearUser(state: UserState) {
    state.name = "";
    state.email = "";
  },
};

const actions = {
  fetchUser(
    { commit }: { commit: Commit },
    user: { name: string; email: string }
  ) {
    commit("setUser", user);
  },
  clearUser({ commit }: { commit: Commit }) {
    commit("clearUser");
  },
};

const getters = {
  userName: (state: UserState) => state.name,
  userEmail: (state: UserState) => state.email,
};

export default {
  state: toRefs(state),
  mutations,
  actions,
  getters,
};
