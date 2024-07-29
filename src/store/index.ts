import { createStore } from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    auth,
    user,
  },
  plugins: [createPersistedState()],
});
