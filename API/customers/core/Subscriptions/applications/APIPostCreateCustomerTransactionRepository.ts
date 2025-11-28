import { Transaction } from "../domain/models/Subscription";

export interface APIPostCreateCustomerTransactionRepository {
  excute() : Promise<{ transactionCreated: boolean , result?: any} | void>;
}
