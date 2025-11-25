import axios from "axios";
import { APIPostWalletRepository } from "../domain/applications/APIPostWalletRepository";
import { WalletCreation, WalletCreationDto } from "../domain/models/Wallet";

export class APIWalletCreationManager implements APIPostWalletRepository {
  private static instance: APIWalletCreationManager;

  private constructor() {}

  public static getInstance(): APIWalletCreationManager {
    if (!APIWalletCreationManager.instance) {
      APIWalletCreationManager.instance = new APIWalletCreationManager();
    }
    return APIWalletCreationManager.instance;
  }

  async execute(wallet: WalletCreationDto) : Promise<WalletCreation> {
    if (!wallet) {
      return Promise.resolve({ isSucces: false } as WalletCreation);
    }
    try {
      const creationReq = await axios.post('/api/customer/wallet/post-register-wallet', wallet);
      if (creationReq.status !== 200) {
        return Promise.resolve({ isSucces: false } as WalletCreation);
      }
      return Promise.resolve({ isSucces: true } as WalletCreation);
    } catch (error) {

    }
    return Promise.resolve({ isSucces: true } as WalletCreation);
  }
}
