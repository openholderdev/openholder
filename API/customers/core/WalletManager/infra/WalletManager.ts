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
  async getWalletsCustomerList() : Promise<void> {
    try {
      const db = await connectDB();
      const walletCollection = db.collection("customer_wallets");
      const customerId = this.req.query.customerId as string;
      const wallets = await walletCollection.find({ customerId }).toArray();
      
      this.res.status(200).json({
        wallets: wallets,
      });
    } catch (error) {
      this.res.status(200).json({
        wallets: [],
      });
    }
  }
  async createWalletForCustomer(): Promise<void> {
    try {
      const db = await connectDB();
      const walletCollection = db.collection("customer_wallets");
      const customersCollection = db.collection("customers");

      const isSignGlobal = this.req.body.whitelist === 'GLOBAL';
      const isSignSpain = this.req.body.whitelist === 'SPAIN';

      const walletCustomer : CustomerWallet = {
        customerId: this.req.body.customerId,
        walletId: randomUUID(),
        walletAddress: this.req.body.walletAddress,
        creationDate: new Date(),
        investments: [],
        globalStatus: isSignGlobal ? 'PENDING' : 'NOT_REQUESTED',
        spainStatus: isSignSpain ? 'PENDING' : 'NOT_REQUESTED',
        alias: this.req.body.alias || 'Default Alias'
      };

      const customer = await customersCollection.findOne({ customerId: this.req.body.customerId });
      
      if (!customer) {
        return this.res.status(400).json({
          isSuccess: false,
        });
      }
      
      const existingWallet = await walletCollection.findOne({ customerId: this.req.body.customerId });
      if (existingWallet) {
        const updateFields: any = {};

        if (isSignGlobal) {
          updateFields.globalStatus = 'PENDING';
        }
        
        if (isSignSpain) {
          updateFields.spainStatus = 'PENDING';
        }

        await walletCollection.updateOne(
          { customerId: this.req.body.customerId },
          { 
            $set: updateFields 
          }
        );

        return this.res.status(200).json({
          isSuccess: true,
        });
      }

      await walletCollection.insertOne(walletCustomer);
      return this.res.status(200).json({
        isSuccess: true,
      });
    } catch (error) {
      return this.res.status(500).json({
        isSuccess: false,
      });
    }
  }
}
