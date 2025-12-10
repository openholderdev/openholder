import { makeAutoObservable, runInAction, toJS } from "mobx";
import { APIInvestmentManager } from "../dashboard-investments-view/core/Infra/APIInvestmentManager";
import { UIInvestment } from "../dashboard-investments-view/core/Domain/models/Investment";

export class BackofficeInvestmentsViewController {
  private static instance: BackofficeInvestmentsViewController;
  public showCreateInvestmentSection : boolean = false;
  public showListInvestmentSection : boolean = true;
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
  public static getInstance(): BackofficeInvestmentsViewController {
    if (!BackofficeInvestmentsViewController.instance) {
      BackofficeInvestmentsViewController.instance = new BackofficeInvestmentsViewController();
    }
    return BackofficeInvestmentsViewController.instance;
  }
}
