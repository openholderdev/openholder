import { makeAutoObservable, toJS, runInAction } from "mobx";
import { APICustomerValidationManager } from "./core/infra/APICustomerValidationManager";
import { WEB3WalletConnectManager } from "./core/infra/WEB3WalletConnectManager";
import { CustomerWallet, Wallet, WalletCreation } from "./core/domain/models/Wallet";
import { APIWalletCreationManager } from "./core/infra/APIWalletCreationManager";
import { APICustomerWalletsManager } from "./core/infra/APICustomerWalletsManager";

export interface StatusConnectedWallet {
  isValid: boolean;
  globalStatus?: string;
  spainStatus?: string;
}

export class DashboardSettingsWalletController {
  #customerWalletController = APICustomerWalletsManager.getInstance();
  private static instance: DashboardSettingsWalletController;
  
  initialState = {
    customerKycCompleted: false,
    walletConnected: false,
    connectingWallet: false,
    walletConnectedData: null as Wallet | null,
    walletsSignedCustomer: [] as CustomerWallet[],
  }
  walletConnectedData = this.initialState.walletConnectedData;
  connectingWallet = this.initialState.connectingWallet;
  customerKycCompleted = this.initialState.customerKycCompleted;
  walletConnected = this.initialState.walletConnected;
  customerWalletsStored : CustomerWallet[] = this.initialState.walletsSignedCustomer;
  
  private constructor() {
    makeAutoObservable(this);
  }

  async getCustomerKycCompleted(email: string): Promise<boolean | void> {
    const controller = new APICustomerValidationManager();
    const isUserCompleted = await controller.execute(email);
    if (isUserCompleted instanceof Error) {
      return false;
    };
    return isUserCompleted.customerKycCompleted;
  }; 

  async getCustomerWalletsStored(customerId: string): Promise<CustomerWallet[] | void> {
    const result = await this.#customerWalletController.execute(customerId);
    runInAction(() => {
      this.customerWalletsStored = result;
    });
  }

  async createCustomerWallet(signature: 'GLOBAL' | 'SPAIN'): Promise<CustomerWallet[]> {
    const controller = APIWalletCreationManager.getInstance();
    
    const result : WalletCreation = await controller.execute({
      walletAddress: this.walletConnectedData?.address as string,
      customerId: '23324123', 
      alias: 'Default Alias',
      whitelist: signature 
    });
    if (result.isSucces) {
      const walletsCustomer = await this.#customerWalletController.execute('23324123');
      return walletsCustomer as CustomerWallet[];
    } else {
      return Promise.resolve([] as CustomerWallet[]);
    }
  };

  async connectWallet(): Promise<void> {
    this.connectingWallet = true;
    const result : Wallet | void = await WEB3WalletConnectManager.getInstance().connect();
    if (result.isConnected === true) {
      this.walletConnected = result?.isConnected ?? false;
      this.walletConnectedData = result;
    }
    this.connectingWallet = false;
  };
  public static getInstance(): DashboardSettingsWalletController {
    if (!DashboardSettingsWalletController.instance) {
      DashboardSettingsWalletController.instance = new DashboardSettingsWalletController();
    }
    return DashboardSettingsWalletController.instance;
  }
}
