import { APIInvestment } from "@/API/customers/core/Investment/domain/infra/APIInvestment";
import { NextApiRequest, NextApiResponse } from "next";

export default function PostAuthenticateCustomerByEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const InvestmentController = new APIInvestment(req, res);
    InvestmentController.sendInvestmentList();
  } catch (error) {
    res.status(500).json({
      isError: true,
      code: 500,
      message: "Internal server error"
    });
  }
}
