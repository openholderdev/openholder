import { Investment } from "../domain/BackofficeInvestmentDomain";

export interface APICreateInvestmentRepository  {
  createInvestment(data: Investment): Promise<void>;
}
