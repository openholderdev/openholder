import { NextApiRequest, NextApiResponse } from "next";
import APIInvestmentRepository from "../application/ports/APIInvestmentRepository";
import connectDB from "@/API/configs/db/mongoconnection";
import { randomUUID } from "crypto";
export class InvestmentManager implements APIInvestmentRepository {
  private req: NextApiRequest;
  private res: NextApiResponse;
  constructor(req: NextApiRequest,res: NextApiResponse) {
    this.req = req;
    this.res = res;
  }
  async createInvestment(): Promise<void> {
    try { 
      const db = await connectDB();
      const investments = db.collection('investments');
      await investments.insertOne(this.req.body);
      const subscriptions = db.collection('subscription');
      await subscriptions.insertOne({
        investmentId: this.req.body.investmentId,
        subscriptionId: randomUUID(),
        totalTokensAvailables: this.req.body.financial.totalTokenUnits,
        tokenCode: this.req.body.tokenCode,
        holders: [],
        emissionStatus: false,
        transactions: [],
        nameProject: this.req.body.nameProject,
      });
      this.res.status(201).json({ message: 'Investment created successfully' });
    } catch (error) {
      this.res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
