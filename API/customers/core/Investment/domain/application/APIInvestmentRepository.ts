import { Investment } from "../models/Investment";

export interface APIInvestmentRepository {
  sendInvestmentList(): Promise<Investment[] | void>;
};
