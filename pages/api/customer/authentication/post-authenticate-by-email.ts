import { MailAuthenticator } from "@/API/customers/core/MailAuthenticator/infra/MailAuthenticator";
import { AuthenticateCustomer } from "@/API/customers/core/register/infra/RegisterCustomer";
import { NextApiRequest, NextApiResponse } from "next";

export default function PostAuthenticateCustomerByEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const CustomerController = new MailAuthenticator(req, res);
    CustomerController.authenticateByEmail();
  } catch (error) {
    res.status(500).json({
      isError: true,
      code: 500,
      message: "Internal server error"
    });
  }
}
