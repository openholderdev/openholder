import { makeAutoObservable, runInAction, toJS } from "mobx";
import { kycStep1DefaultValues } from "./sections/kyc-personal-information/form/defaultValues";
import { kycFinancialDefaultValues } from "./sections/kyc-financial-information/form/defaultValues";
import { APICustomerKycManager } from "./core/infra/APICustomerKycManager";
import { v4 as uuidv4 } from "uuid";

import { CustomerFinancialData, CustomerKycSchema, CustomerPersonalData } from "./core/domain/models/CustomerKycData";
import { initialize } from "next/dist/server/lib/render-server";

export class DashboardSettingsKycController {
  private static instance: DashboardSettingsKycController;
  #apiCustomerKycRepository = new APICustomerKycManager();

  initialState = {
    showCustomerHasKycData: false as boolean,
    statusKycCustomer: null as 'pending' | 'approved' | 'rejected' | null,
    activeStepView: 0 as number,
    personalDataCompleted: false as boolean,
    financialDataCompleted: false as boolean,
    formPersonalDataCompleted: kycStep1DefaultValues,
    formFinancialDataCompleted: kycFinancialDefaultValues,
    kycReviewIsPending: false as boolean,
  }
  statusKycCustomer = this.initialState.statusKycCustomer;
  showCustomerHasKycData = this.initialState.showCustomerHasKycData;
  activeStepView : number = this.initialState.activeStepView;
  personalDataCompleted = this.initialState.personalDataCompleted;
  financialDataCompleted = this.initialState.financialDataCompleted;
  formPersonalDataCompleted = this.initialState.formPersonalDataCompleted;
  formFinancialDataCompleted = this.initialState.formFinancialDataCompleted;
  kycReviewIsPending = this.initialState.kycReviewIsPending;

  private constructor() {
    makeAutoObservable(this);
  }

  async initialize(customerId: string) {
    try {
      type response = { customerKycExists: boolean, data?: CustomerKycSchema };
      const customerKycCheckRequest: response | Error = await this.#apiCustomerKycRepository.checkExistingKyc?.(customerId);
      runInAction(() => {
        if (customerKycCheckRequest.customerKycExists) {
          this.showCustomerHasKycData = false; 
          this.statusKycCustomer = customerKycCheckRequest.data?.status as 'pending' | 'approved' | 'rejected';
        } else {
          this.showCustomerHasKycData = false;
          this.statusKycCustomer = null;
        }
      }); 
    } catch (error) {
      console.error("Error initializing KYC data:", error);
    }
  };
  reset() {
    this.activeStepView = this.initialState.activeStepView;
    this.personalDataCompleted = this.initialState.personalDataCompleted;
    this.financialDataCompleted = this.initialState.financialDataCompleted;
    this.formPersonalDataCompleted = this.initialState.formPersonalDataCompleted;
    this.formFinancialDataCompleted = this.initialState.formFinancialDataCompleted;
  }

  setStepView(step: number) {
    this.activeStepView = step;
  };

  setFormPersonalDataCompleted(data: any) {
    this.formPersonalDataCompleted = data;
    this.personalDataCompleted = true;
  };
  
  setFormFinancialDataCompleted(data: any, customerId: string) {
    this.kycReviewIsPending = true;
    const kycId = uuidv4();
    try {
      this.#apiCustomerKycRepository.execute({
      customerId: customerId,
      creationDate: new Date().toDateString(),
      kycId: kycId,
      isValidKyc: true, // Us for checking KYC validity status
      status: 'pending',
      personal: toJS(this.formPersonalDataCompleted) as unknown as CustomerPersonalData,
      financial: toJS(data) as unknown as CustomerFinancialData,
      updateDate: new Date().toDateString(),
    })
    } catch (error) {
      console.error("Error submitting KYC data:", error);
    }
    this.reset();
  };

  public static getInstance(): DashboardSettingsKycController {
    if (!DashboardSettingsKycController.instance) {
      DashboardSettingsKycController.instance = new DashboardSettingsKycController();
    }
    return DashboardSettingsKycController.instance;
  }
};
