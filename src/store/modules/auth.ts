import { reactive, toRefs } from "vue";
import { Commit } from "vuex";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const state = reactive<AuthState>({
  token: null,
  isAuthenticated: false,
});

const mutations = {
  setToken(state: AuthState, token: string) {
    state.token = token;
    state.isAuthenticated = !!token;
  },
  clearToken(state: AuthState) {
    state.token = null;
    state.isAuthenticated = false;
  },
};

const actions = {
  login({ commit }: { commit: Commit }, token: string) {
    commit("setToken", token);
  },
  logout({ commit }: { commit: Commit }) {
    commit("clearToken");
  },
};

const getters = {
  isAuthenticated: (state: AuthState) => state.isAuthenticated,
  token: (state: AuthState) => state.token,
};

export default {
  state: toRefs(state),
  mutations,
  actions,
  getters,
};
