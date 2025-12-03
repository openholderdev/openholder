import { NextRequest, NextResponse } from "next/server";
import { APIPostCreateCustomerTransactionRepository } from "../applications/APIPostCreateCustomerTransactionRepository";
import { Transaction } from "../domain/models/Subscription";
import connectDB from "@/API/configs/db/mongoconnection";
import { NextApiRequest, NextApiResponse } from "next";

export class APICreateCustomerTransactionsManager implements APIPostCreateCustomerTransactionRepository {
  #req : NextApiRequest;
  #res : NextApiResponse;
  
  constructor(req: NextApiRequest, res: NextApiResponse)  {
    this.#req = req;
    this.#res = res;
  }
  
  async excute() : Promise<void> {
    const db = await connectDB();
    const subscriptionsStore = db.collection("subscription");
    const walletsStore = db.collection("wallets");

    const body = this.#req.body;
    
    const result = await subscriptionsStore.findOneAndUpdate(
      { investmentId: body.investmentId },
      { 
        $push: { 
          transactions: body
        } 
      },
      { 
        returnDocument: 'after',
        upsert: false
      }
    );
    const walletUpdate = await walletsStore.findOneAndUpdate({
      customerId: body.customerId
    },{
      $push: {
        transactions: body
      }
    },{
      returnDocument: 'after',
      // upsert: false
    });
    if (!result) {
      this.#res.status(404).json({
        transactionCreated: false,
        error: "Subscription not found",
        el: body.investmentId,
        walletUpdate: walletUpdate
      });
      return;
    }
    
    this.#res.status(200).json({
      transactionCreated: true,
      result: result
    });
  }
}
