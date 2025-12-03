import { CustomerValidations } from "../models/CustomerValidations";

export interface APIGetCustomerValidations  {
  execute(customerId: string): Promise<CustomerValidations>;
}
