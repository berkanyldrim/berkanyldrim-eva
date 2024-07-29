import { Commit } from "vuex";

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  email: string | null;
}

const state = <AuthState>{
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  email: null,
};

const mutations = {
  setToken(state: AuthState, token: string) {
    state.token = token;
    state.isAuthenticated = !!token;
  },
  setRefreshToken(state: AuthState, refreshToken: string) {
    state.refreshToken = refreshToken;
  },
  setEmail(state: AuthState, email: string) {
    state.email = email;
  },
  clearToken(state: AuthState) {
    state.token = null;
    state.refreshToken = null;
    state.isAuthenticated = false;
    state.email = null;
  },
};

const actions = {
  login(
    { commit }: { commit: Commit },
    {
      token,
      refreshToken,
      email,
    }: { token: string; refreshToken: string; email: string }
  ) {
    commit("setToken", token);
    commit("setRefreshToken", refreshToken);
    commit("setEmail", email);
  },
  logout({ commit }: { commit: Commit }) {
    commit("clearToken");
  },
};

const getters = {
  isAuthenticated: (state: AuthState) => state.isAuthenticated,
  token: (state: AuthState) => state.token,
  refreshToken: (state: AuthState) => state.refreshToken,
  email: (state: AuthState) => state.email,
};

export default {
  namespaced: true,
  state: state,
  mutations,
  actions,
  getters,
};
