import { makeAutoObservable, runInAction, toJS } from "mobx";
import { UIInvestment } from "./core/Domain/models/Investment";
import { APIInvestmentManager } from "./core/Infra/APIInvestmentManager";

export class DashboardInvestmentsViewController {
  private static instance: DashboardInvestmentsViewController;
  public listInvestments : UIInvestment[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  
  async fetchInvestments(): Promise< UIInvestment[] | void | null> {
    try {
      const ApiInvestmentManager = new APIInvestmentManager();
      const investments = await ApiInvestmentManager.getInvestmentList();
      runInAction(() => {
        this.listInvestments = investments || [];
      });
      return Promise.resolve(investments);
    } catch (error) {
      return Promise.resolve(null)
    }
  };

  getListInvestments(): UIInvestment[] {
    return toJS(this.listInvestments) || [];
  }
  
  public static getInstance(): DashboardInvestmentsViewController {
    if (!DashboardInvestmentsViewController.instance) {
      DashboardInvestmentsViewController.instance = new DashboardInvestmentsViewController();
    }
    return DashboardInvestmentsViewController.instance;
  }
};
