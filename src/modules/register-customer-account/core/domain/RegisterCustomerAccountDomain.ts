import { RegisterCustomerFormData } from "../../sections/register-customer-complete-register/RegisterCustomerCompleteRegister.types";

export interface RegisterCustomerAccountDomain {
  validateEmail(email: string): Promise<boolean>;
  registerCustomer(register: RegisterCustomerFormData, email: string ): Promise<any>;
}
