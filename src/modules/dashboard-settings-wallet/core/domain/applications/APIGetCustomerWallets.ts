import { CustomerWallet } from "../models/Wallet";

export interface APIGetCustomerWalletsRepository {
  execute(customerId: string): Promise<CustomerWallet[]>;
}
