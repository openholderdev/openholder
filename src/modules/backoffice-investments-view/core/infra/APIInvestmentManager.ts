import axios from "axios";
import { APICreateInvestmentRepository } from "../applications/APICreateInvestmentRepository";
import { Investment } from "../domain/BackofficeInvestmentDomain";

export class APIInvestmentManager implements APICreateInvestmentRepository {
  async createInvestment(data: Investment): Promise<void> {
    try {
      await axios.post('/api/admin/investments/create-investment', data);
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}
