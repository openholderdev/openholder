import axios from "axios";
import { APIManagmentTransaction } from "../applications/ports/APIManagmentTransaction";
import { Transaction } from "../Domain/models/Transaction";

export class APITransactionManager implements APIManagmentTransaction {
  async execute(transaction: Transaction): Promise<{ transactionCreated: boolean; result?: any; } | void> {
    try {
      const postTransaction = await axios.post('/api/customer/subscription/transaction/create-transaction', transaction);
      if (postTransaction.status !== 200) {
        return Promise.resolve();
      }
    } catch (error) {
      return Promise.resolve();
    }
    return Promise.resolve({ transactionCreated: true, result: {} } );
  }
}
