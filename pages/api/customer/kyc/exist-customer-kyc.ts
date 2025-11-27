import { KycCustomerManager } from "@/API/customers/core/KycManager/infra/KycCustomerManager";
import { NextApiRequest, NextApiResponse } from "next";

export default function PostValidateCustomer(req: NextApiRequest, res: NextApiResponse) {
  try {
    const KycController = new KycCustomerManager(req, res);
    KycController.existCustomerKyc();
  } catch (error) {
    console.error(error)
  }
}
