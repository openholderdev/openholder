import { KycCustomerManager } from "@/API/customers/core/KycManager/infra/KycCustomerManager";
import { WalletManager } from "@/API/customers/core/WalletManager/infra/WalletManager";
import { NextApiRequest, NextApiResponse } from "next";

export default async function PostRegisterWallet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const WalletController = new WalletManager(req, res);
    await WalletController.getWalletsCustomerList();
  } catch (error) {
    console.error('error')
  }
}
