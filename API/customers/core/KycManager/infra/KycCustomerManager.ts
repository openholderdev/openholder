import { NextApiRequest, NextApiResponse } from "next";
import { KycCustomerManagerDomain } from "../domain/KycCustomerManager";
import { CustomerKycSchema } from "../domain/models/CustomerPersonalData";
import connectDB from "@/API/configs/db/mongoconnection";

export class KycCustomerManager implements KycCustomerManagerDomain { 
  private req: NextApiRequest;
  private res: NextApiResponse;
  
  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req;
    this.res = res;
  }
  async registerCustomerKyc(): Promise<void> {
    try {
      const db = await connectDB();
      
      const collection = db.collection("kyc_customers");
      const customerKycData : CustomerKycSchema = this.req.body;
      const customerExists = await this.validateExistUser(customerKycData.customerId);

      if (customerExists) {
        const insertedKycData = await collection.insertOne(customerKycData);
        if (insertedKycData.acknowledged) {
          return this.res.status(201).json({
            isError: false,
            code: 201,
            message: "KYC data registered successfully",
            data: insertedKycData
          });
        }
      } else {
        return this.res.status(400).json({
          isError: true,
          code: 400,
          message: "Customer does not exist"
        });
      }
    } catch (error) {
      return this.res.status(500).json({
        isError: true,
        code: 500,
        message: "Internal server error"
      });
    }
  }
  private async validateExistUser(customerId: string) : Promise<boolean | void> {
    try {
      const db = await connectDB();
      const collection = db.collection("customers");
      const existingUser = await collection.findOne({ customerId: customerId });
      return existingUser ? true : false;
    } catch (error) {
      return this.res.status(500).json({
        isError: true,
        code: 500,
        message: "Internal server error"
      });
    }
    return true;
  }
}
