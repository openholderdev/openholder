import axios from "axios";
import { APICustomerKycRepository } from "../applications/APICustomerKycRepository";
import { CustomerKycSchema } from "../domain/models/CustomerKycData";

export class APICustomerKycManager implements APICustomerKycRepository {
  constructor() {}

  async execute(kyc: CustomerKycSchema): Promise<{ customerKycCompleted: boolean } | Error> {
    try {
      const request = await axios.post('/api/customer/kyc/post-send-kyc', kyc);
      return Promise.resolve({ customerKycCompleted: request.data.customerKycCompleted });
    } catch {
      return Promise.resolve({ customerKycCompleted: false });
    }
  }
  // Success: Retrun data and status
  // Fail: Return customerKycExists: false
  async checkExistingKyc(customerId: string): Promise<{ customerKycExists: boolean, data?: CustomerKycSchema, code?: 'pending' | 'approved' | 'rejected' }> {
    try {
      const request = await axios(`/api/customer/kyc/exist-customer-kyc?customerId=${customerId}`);
      return Promise.resolve({ customerKycExists: request.data.customerKycCompleted, data: request.data.data, code: request.data.status });
    } catch {
      return Promise.resolve({ customerKycExists: false });
    }
  }
}
