import axios from "axios";
import APIManagmentInvestmentsRepository from "../applications/ports/APIManagmentInvestments";
import { UIInvestment } from "../Domain/models/Investment";
import { INVESTMENTS_GET_INVESTMENT_LIST } from "@/API/configs/endpoints";

export class APIInvestmentManager implements APIManagmentInvestmentsRepository {
  async getInvestmentList() : Promise<null | UIInvestment[]> {
    try {
      const collectionlist = await axios.get(INVESTMENTS_GET_INVESTMENT_LIST);

      if (collectionlist.status === 200) {
        return collectionlist.data.data as UIInvestment[];
      }
      return []
    } catch (error) {
      return []
    }
  }
}
