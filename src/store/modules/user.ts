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
      accountType: 0,
      storeId: "",
      evaStoreId: "",
      storeType: 0,
      region: "",
      paidStatus: 0,
      pricingStatus: 0,
      linkedDate: "",
      paidDate: "",
      reimbursementPackageTrialEndDate: null,
      unlimitedReimbursementStatus: 0,
      showSellerCentralExternalLink: false,
      remainingReimbursementCredit: 0,
      monthlyReimbursementPackageCredit: 0,
      marketplaceName: "",
      marketplaceCode: "",
      enableRepricing: false,
      screenPermissionList: null,
      reimbursementStatus: false,
      loanOfferAmount: 0,
      subscriptionCancelationStatus: 0,
      subscriptionCancelationDate: "",
      subscriptionPackageType: 0,
      subscriptionStatus: 0,
      subscriptionVersion: 0,
      hasReimbursementService: false,
      isSubscriptionAnnual: false,
      is3plStore: false,
      selectedForPPC: false,
      isAdvertisingConnected: false,
      sellerApiTokenStatus: 0,
      sellerApiAuthCodeCreatedAt: "",
      advertisingAuditState: {
        advertisingAuditDisplayEndDate: "",
        advertisingAuditDisplayStartDate: "",
        displayAdvertisingAudit: false,
      },
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
