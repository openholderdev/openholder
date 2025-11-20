export interface CustomerWallet {
  customerId: string;
  walletId: string;
  walletAddress: string;
  creationDate: Date;
  isVerified: boolean; // If true can do transactions
  investments: any // To be defined in future versions
}
