import { CustomerKycSchema } from "../domain/models/CustomerKycData";

export interface APICustomerKycRepository {
  execute(kyc: CustomerKycSchema): Promise<{ customerKycCompleted: boolean } | Error>;
  checkExistingKyc?(customerId: string): Promise<{ customerKycExists: boolean, data?: CustomerKycSchema } | Error>;
}
