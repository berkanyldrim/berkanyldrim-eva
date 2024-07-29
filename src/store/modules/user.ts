import { Commit } from "vuex";
import { IUser } from "@/types/user";

const getDefaultState = (): IUser => ({
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "",
  callingCode: "",
  telephoneNumber: "",
  isAdmin: "",
  store: [
    {
      storeName: "",
      storeId: "",
      evaStoreId: "",
      storeType: 0,
      region: "",
      paidStatus: 0,
      pricingStatus: 0,
      paidDate: "",
      reimbursementPackageTrialEndDate: "",
      linkedDate: "",
      marketplaceName: "",
      marketplaceCode: "",
      enableRepricing: false,
    },
  ],
});

const state = getDefaultState();

const mutations = {
  setUser(state: IUser, user: IUser) {
    Object.assign(state, user);
  },
  clearUser(state: IUser) {
    Object.assign(state, getDefaultState());
  },
};

const actions = {
  fetchUser({ commit }: { commit: Commit }, user: IUser) {
    commit("setUser", user);
  },
  clearUser({ commit }: { commit: Commit }) {
    commit("clearUser");
  },
};

const getters = {
  user: (state: IUser) => state,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
