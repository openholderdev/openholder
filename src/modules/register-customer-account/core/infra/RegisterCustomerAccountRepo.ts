import axios from "axios";
import { RegisterCustomerAccountDomain } from "../domain/RegisterCustomerAccountDomain";
import { CUSTOMER_CHECK_EMAIL_AVAILABLE_ENDPOINT, CUSTOMER_REGISTER_ENDPOINT } from "@/API/configs/endpoints";
import { RegisterCustomerFormData } from "../../sections/register-customer-complete-register/RegisterCustomerCompleteRegister.types";

export class RegisterCustomerAccountRepo implements RegisterCustomerAccountDomain{
  async validateEmail(email: string): Promise<boolean> {
    try {
      const validateEmailRequest = await axios.post(CUSTOMER_CHECK_EMAIL_AVAILABLE_ENDPOINT, { email });
      const responseIsAvailable = validateEmailRequest.data.data.isEmailAvailable;
      return responseIsAvailable;
    } catch (error) {
      return false;
    }
  }
  async registerCustomer(register: RegisterCustomerFormData, email: string): Promise<any> {
    try {
      const registerCustomerRequest = await axios.post(CUSTOMER_REGISTER_ENDPOINT, { ...register, email });
      return registerCustomerRequest.data;
    } catch (error) {
      throw error;
    }
  }
}
