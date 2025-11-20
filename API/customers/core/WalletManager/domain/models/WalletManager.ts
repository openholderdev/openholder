export interface CustomerManagerDomain {
  createWalletForCustomer(): Promise<void>;
}
