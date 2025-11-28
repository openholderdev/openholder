import { APICreateCustomerTransactionsManager } from "@/API/customers/core/Subscriptions/infra/APICreateCustomerTransactionsManager";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default async function PostRegisterWallet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const subscriptionController = new APICreateCustomerTransactionsManager(req,res);
    await subscriptionController.excute();
  } catch (error) {
    console.error('error')
  }
}
