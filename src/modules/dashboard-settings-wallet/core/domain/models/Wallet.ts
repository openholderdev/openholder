export interface Wallet {
  address?: string;
  chain?: string;
  isConnected: boolean;
  error?: {
    code: number;
  }
}

export interface CustomerWallet {
  customerId: string;
  walletId: string;
  walletAddress: string;
  globalStatus: 'PENDING' | 'APPROVED' | 'REJECTED' | 'NOT_REQUESTED';
  spainStatus: 'PENDING' | 'APPROVED' | 'REJECTED' | 'NOT_REQUESTED';
  transactions: any[];
}

export interface WalletCreationDto {
  customerId: string;
  walletAddress: string;
  whitelist: 'GLOBAL' | 'SPAIN';
  alias?: string;
}

export interface WalletCreation {
  isSucces: boolean;
};
