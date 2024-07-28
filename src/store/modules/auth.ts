import { Commit } from "vuex";

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const state = <AuthState>{
  token: null,
  refreshToken: null,
  isAuthenticated: false,
};

const mutations = {
  setToken(state: AuthState, token: string) {
    state.token = token;
    state.isAuthenticated = !!token;
  },
  setRefreshToken(state: AuthState, refreshToken: string) {
    state.refreshToken = refreshToken;
  },
  clearToken(state: AuthState) {
    state.token = null;
    state.refreshToken = null;
    state.isAuthenticated = false;
  },
};

const actions = {
  login(
    { commit }: { commit: Commit },
    { token, refreshToken }: { token: string; refreshToken: string }
  ) {
    commit("setToken", token);
    commit("setRefreshToken", refreshToken);
  },
  logout({ commit }: { commit: Commit }) {
    commit("clearToken");
  },
};

const getters = {
  isAuthenticated: (state: AuthState) => state.isAuthenticated,
  token: (state: AuthState) => state.token,
  refreshToken: (state: AuthState) => state.refreshToken,
};

export default {
  namespaced: true,
  state: state,
  mutations,
  actions,
  getters,
};
