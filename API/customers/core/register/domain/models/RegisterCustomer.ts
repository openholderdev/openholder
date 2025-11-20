export interface RegisterCustomer {
  registerCustomer(): void;
  validateExistingCustomer(): Promise<boolean>;
}
