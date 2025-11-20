import { makeAutoObservable } from 'mobx';
import { RegisterCustomerAccountRepo } from './core/infra/RegisterCustomerAccountRepo';
import { RegisterCustomerFormData } from './sections/register-customer-complete-register/RegisterCustomerCompleteRegister.types';

export class RegisterCustomerAccountController {
  private static instance: RegisterCustomerAccountController;

  initialState = {
    email: '',
    isValidEmail: false,
    errorRegisterProccess: false,
    showCompleteRegisterSection: false,
    showEmailVerificationSection: true,
    completeRegisterProccess: false,
  };

  errorRegisterProccess: boolean = this.initialState.errorRegisterProccess;
  completeRegisterProccess: boolean = this.initialState.completeRegisterProccess;
  email: string = this.initialState.email;
  isValidEmail: boolean = this.initialState.isValidEmail;
  showCompleteRegisterSection: boolean = this.initialState.showCompleteRegisterSection;
  showEmailVerificationSection: boolean = this.initialState.showEmailVerificationSection;

  private constructor() {
    makeAutoObservable(this);
  }

  public static getInstance(): RegisterCustomerAccountController {
    if (!RegisterCustomerAccountController.instance) {
      RegisterCustomerAccountController.instance = new RegisterCustomerAccountController();
    }
    return RegisterCustomerAccountController.instance;
  }

  async checkValidEmail(email: string) {
    try {
      const uiControler = new RegisterCustomerAccountRepo();
      const result = await uiControler.validateEmail(email);

      if (result) {
        this.showCompleteRegisterSection = true;
        this.showEmailVerificationSection = false;
        this.email = email;
        this.isValidEmail = true;
      }
    } catch (error) {
      console.error("Error registering customer account:", error);
    }
  }

  async registerCustomerAccount(register: RegisterCustomerFormData) {
    const uiController = new RegisterCustomerAccountRepo();
    try {
      const result = await uiController.registerCustomer(register, this.email);
      if (result.error) {
        this.errorRegisterProccess = true;
        this.showCompleteRegisterSection = false;
        this.showEmailVerificationSection = false;
      } else {
        this.completeRegisterProccess = true;
        this.showCompleteRegisterSection = false;
        this.showEmailVerificationSection = false;
      }
    } catch (error) {
      this.errorRegisterProccess = true;
    }
  }

  // Método para resetear el estado (útil para testing o logout)
  public resetState() {
    this.email = this.initialState.email;
    this.isValidEmail = this.initialState.isValidEmail;
    this.showCompleteRegisterSection = this.initialState.showCompleteRegisterSection;
    this.showEmailVerificationSection = this.initialState.showEmailVerificationSection;
    this.errorRegisterProccess = this.initialState.errorRegisterProccess;
    this.completeRegisterProccess = this.initialState.completeRegisterProccess;
  }
}
