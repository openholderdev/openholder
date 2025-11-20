import connectDB from "@/API/configs/db/mongoconnection";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

export class MailAuthenticator {
  private req: NextApiRequest;
  private res: NextApiResponse;

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req;
    this.res = res;
  }

  async authenticateByEmail(): Promise<void> {
    try { 
      const db = await connectDB();
      const customerCollection = db.collection("customers");
      const customer = await customerCollection.findOne({ email: this.req.body.email });
      
      if (!customer) {
        return this.res.status(404).json({
          isError: true,
          code: 404,
          message: "Customer not found"
        });
      }
      if (!customer.emailVerified) {
        return this.res.status(403).json({
          isError: true,
          code: 403,
          message: "Email not verified"
        });
      }

      const isPasswordValid = await bcrypt.compare(this.req.body.password, customer.password);
      if (!isPasswordValid) {
        return this.res.status(401).json({
          isError: true,
          code: 401,
          message: "Invalid password"
        });
      }

      const { password: _, ...customerWithoutPassword } = customer;
      this.res.status(200).json({
        isError: false,
        code: 200,
        message: "Authentication successful",
        data: customerWithoutPassword
      });
    } catch (error) { 
      console.error('error')
    }
  } 
}
