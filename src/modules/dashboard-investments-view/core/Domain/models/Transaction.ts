export interface Transaction {
  investmentId: string;
  transactionId: string;
  date: Date;
  customerId: string;
  wallet: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  amountTokens: number;
  amountUSD: number;
}
