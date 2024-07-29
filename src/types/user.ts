export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  callingCode: string;
  telephoneNumber: string;
  isAdmin: string;
  store: [
    {
      storeName: string;
      accountType: number;
      storeId: string;
      evaStoreId: string;
      storeType: number;
      region: string;
      paidStatus: number;
      pricingStatus: number;
      linkedDate: string;
      paidDate: string;
      reimbursementPackageTrialEndDate: any;
      unlimitedReimbursementStatus: number;
      showSellerCentralExternalLink: boolean;
      remainingReimbursementCredit: number;
      monthlyReimbursementPackageCredit: number;
      marketplaceName: string;
      marketplaceCode: string;
      enableRepricing: boolean;
      screenPermissionList: any;
      reimbursementStatus: boolean;
      loanOfferAmount: number;
      subscriptionCancelationStatus: number;
      subscriptionCancelationDate: string;
      subscriptionPackageType: number;
      subscriptionStatus: number;
      subscriptionVersion: number;
      hasReimbursementService: boolean;
      isSubscriptionAnnual: boolean;
      is3plStore: boolean;
      selectedForPPC: boolean;
      isAdvertisingConnected: boolean;
      sellerApiTokenStatus: number;
      sellerApiAuthCodeCreatedAt: string;
      advertisingAuditState: {
        advertisingAuditDisplayEndDate: string;
        advertisingAuditDisplayStartDate: string;
        displayAdvertisingAudit: boolean;
      };
    }
  ];
}
