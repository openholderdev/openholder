import { InvestmentManager } from "@/API/admin/Investments/infra/InvestmentManager";
import { NextApiRequest, NextApiResponse } from "next";

export default function PostCreateInvestment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const investmentController = new InvestmentManager(req, res);
    investmentController.createInvestment();
  } catch (error) {
    console.error(error)
  }
}
