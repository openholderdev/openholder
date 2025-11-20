import { NextApiRequest, NextApiResponse } from "next";
import { CustomerWallet } from "../domain/models/CustomerWallet";
import { CustomerManagerDomain } from "../domain/models/WalletManager";
import connectDB from "@/API/configs/db/mongoconnection";
import { randomUUID } from "crypto";

export class WalletManager implements CustomerManagerDomain {
  private req: NextApiRequest;
  private res: NextApiResponse;

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req;
    this.res = res;
  }

  async createWalletForCustomer(): Promise<void> {
    try {
      const db = await connectDB();
      const walletCollection = db.collection("customer_wallets");
      const customersCollection = db.collection("customers");

      const walletCustomer : CustomerWallet = {
        customerId: this.req.body.customerId,
        walletId: randomUUID(),
        walletAddress: this.req.body.walletAddress,
        creationDate: new Date(),
        isVerified: true,
        investments: []
      };

      const customer = await customersCollection.findOne({ customerId: this.req.body.customerId });
      
      if (!customer) {
        return this.res.status(400).json({
          isError: true,
          code: 400,
          message: "Customer does not exist"
        });
      }
      
      const existingWallet = await walletCollection.findOne({ customerId: this.req.body.customerId });
      if (existingWallet) {
        return this.res.status(400).json({
          isError: true,
          code: 400,
          message: "Wallet already exists for this customer"
        });
      }

      await walletCollection.insertOne(walletCustomer);
      return this.res.status(201).json({
        isError: false,
        code: 201,
        message: "Wallet created successfully",
        data: walletCustomer
      });
    } catch (error) {
      return this.res.status(500).json({
        isError: true,
        code: 500,
        message: "Internal server error"
      });
    }
  }
}
