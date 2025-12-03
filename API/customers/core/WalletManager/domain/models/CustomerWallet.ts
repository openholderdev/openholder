export interface CustomerWallet {
  customerId: string;
  walletId: string;
  alias: string;
  walletAddress: string;
  globalStatus: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'NOT_REQUESTED';
  spainStatus: 'PENDING' | 'VERIFIED' | 'REJECTED' | 'NOT_REQUESTED';
  creationDate: Date;
  investments: any[];
  transactions: any[];
}
