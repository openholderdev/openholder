import { NextApiRequest, NextApiResponse } from "next";
import { RegisterCustomer } from "../domain/models/RegisterCustomer";
import { ICustomer } from "../domain/models/CustomerSchema";
import connectDB from "@/API/configs/db/mongoconnection";
import bcrypt from 'bcryptjs';
import { MailerManagerController } from "../../Mailer/infra/MailerManagerController";
import { randomUUID, UUID, UUID } from "crypto";

export class AuthenticateCustomer implements RegisterCustomer {
  private req: NextApiRequest;
  private res: NextApiResponse;

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req;
    this.res = res;
  }
  
  public async registerCustomer() {
    try {
      const customerSchema : ICustomer = this.req.body;
      const db = await connectDB();
      
      if (await this.validateExistingCustomer() === false) {
        this.res.status(409).json({
          isError: true,
          code: 409,
          message: "Customer already exists"
        });
        return;
      }
      const customerCollection = db.collection("customers");
      const customerPasswordHashed = await bcrypt.hash(customerSchema.password, 10);
      const confirmedEmailToken : UUID = randomUUID(); 
      const resultInserteCustomer = await customerCollection.insertOne({
        customerId: randomUUID(),
        firstName: customerSchema.name,
        email: customerSchema.email,
        password: customerPasswordHashed,
        phone: customerSchema.phone || null,
        emailVerified: false,
        verificationToken: confirmedEmailToken
      });

      const mailManager = new MailerManagerController();
      await mailManager.sendEmail(customerSchema.email, "Verifica tu email");
      
      this.res.status(200).json({
        isError: false, 
        data: resultInserteCustomer,
        code: 200,
        message: "ValidateToken:" + confirmedEmailToken
      });  
    } catch (error) {
      this.res.status(409).json({
        isError: true,
        code: 500,
        message: "Internal server error"
      });
    }
  }

  private async validateExistingCustomer() : Promise<boolean> {
    const db = await connectDB();
    const existCustomer = await db.collection("customers").findOne({ email: this.req.body.email });
    
    return existCustomer ? false : true;
  }
} 
