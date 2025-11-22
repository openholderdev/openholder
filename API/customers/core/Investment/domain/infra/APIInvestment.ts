import { NextApiRequest, NextApiResponse } from "next";
import { APIInvestmentRepository } from "../application/APIInvestmentRepository";
import connectDB from "@/API/configs/db/mongoconnection";
import { Investment } from "../models/Investment";

export interface InvesmentException {
  message: string;
};

export class APIInvestment implements APIInvestmentRepository {
  #req: NextApiRequest;
  #res: NextApiResponse;
  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.#req = req;
    this.#res = res;
  }
  async sendInvestmentList(): Promise<Investment[] | void> {
    try {
      const db = await connectDB();
      const investmentCollection = db.collection('investments');
      const investments = await investmentCollection.find({}).toArray();
      this.#res.status(200).json({ 
        data: investments
       });
    } catch (error) {
      this.#res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
