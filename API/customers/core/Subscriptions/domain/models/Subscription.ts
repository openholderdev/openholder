export interface Subscription {
  subscriptionId: string;
  investmentId: string;
  totalTokensAvailables: number;
  tokenCode: string;
  holders?: [string];
  emisionStatus: boolean;
  transactions: Transaction[]
}

export interface TransactionStatusTypes {
  PENDING: 'pending';
  COMPLETED: 'completed';
  FAILED: 'failed';
}

export interface Transaction {
  transactionId: string;
  date: Date;
  amount: number;
  status: TransactionStatusTypes[keyof TransactionStatusTypes];
  amountTokens: number;
  amountUSD: number;
}
