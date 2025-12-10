import { Investment } from "@/API/customers/core/Investment/domain/models/Investment";

export default interface APIInvestmentRepository {
  createInvestment(): Promise<void>;
}

