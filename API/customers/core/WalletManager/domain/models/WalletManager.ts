export interface CustomerManagerDomain {
  createWalletForCustomer(): Promise<void>;
  getWalletsCustomerList(): Promise<void>;
}
