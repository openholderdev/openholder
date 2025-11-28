import { Transaction } from "../../Domain/models/Transaction";

export interface APIManagmentTransaction {
  execute(transaction: Transaction): Promise<{ transactionCreated: boolean; result?: any } | void>;
}
