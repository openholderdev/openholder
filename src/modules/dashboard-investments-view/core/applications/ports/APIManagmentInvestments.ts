import { UIInvestment } from "../../Domain/models/Investment";

export default interface APIManagmentInvestmentsRepository {
  getInvestmentList(): Promise<null | UIInvestment[]>;
} 
