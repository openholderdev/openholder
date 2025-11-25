import axios from "axios";
import { APIGetCustomerWalletsRepository } from "../domain/applications/APIGetCustomerWallets";
import { CustomerWallet } from "../domain/models/Wallet";

export class APICustomerWalletsManager implements APIGetCustomerWalletsRepository {
  private static instance: APICustomerWalletsManager;

  private constructor() {}

  public static getInstance(): APICustomerWalletsManager {
    if (!APICustomerWalletsManager.instance) {
      APICustomerWalletsManager.instance = new APICustomerWalletsManager();
    }
    return APICustomerWalletsManager.instance;
  }

  async execute(customerId: string): Promise<CustomerWallet[]> {
    try {
      const result = await axios(`/api/customer/wallet/get-wallets?customerId=${customerId}`);
      if (!result.data) {
        return Promise.resolve([]);
      } 
      return Promise.resolve(result.data.wallets as CustomerWallet[]);
    } catch (error) {
      return Promise.resolve([]);
    }
  }
}
