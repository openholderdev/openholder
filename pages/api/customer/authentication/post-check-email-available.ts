import { AuthenticateCustomer } from "@/API/customers/core/register/infra/RegisterCustomer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function PostCheckEmailAvailable(req: NextApiRequest, res: NextApiResponse) {
  try {
    const CustomerController = new AuthenticateCustomer(req, res);
    const isEmailAvailable = await CustomerController.validateExistingCustomer();
    return res.status(200).json({
      isError: false,
      code: 200,
      message: "Email availability checked successfully",
      data: {
        isEmailAvailable: isEmailAvailable
      }
    });
  } catch (error) {
    console.error('error')
  }
}
