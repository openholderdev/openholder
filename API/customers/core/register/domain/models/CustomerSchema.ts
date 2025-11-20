export interface ICustomer {
  name: string;
  email: string;
  phone: number;
  password: string;
  emailVerified: boolean;
  customerId?: string; // Key for future use with KYC and other services
}
