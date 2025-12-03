import { observer } from "mobx-react-lite";
import { DashboardSettingsWalletController } from "../../DashboardSettingsWalletController";
import { toJS } from "mobx";
import { CustomerWallet } from "../../core/domain/models/Wallet";
import { WALLET_VERIFY_STATUS } from "../wallet-sign-contracts/WalletSignContract.constants";
import { BiWallet } from "react-icons/bi";

export const WalletCustomerList = observer(function WalletCustomerList() {
  const store = DashboardSettingsWalletController.getInstance();
  const customerStoredList = toJS(store.customerWalletsStored) || [];
  console.log(customerStoredList);
  return (
    <section>
      <div className="px-4 py-7">
        <div>
          <h4 className="text-xl font-semibold mb-3">Tus wallets</h4>
          <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-base ">
            {customerStoredList.length ? (
              <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="bg-neutral-secondary-soft border-b border-default">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Global
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold">
                      España
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customerStoredList.map((entry: CustomerWallet) => (
                    <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                      >
                        <div className="flex items-center gap-2">
                          <BiWallet className="font-bold" />
                          <span className="font-semibold">
                            {entry.walletAddress.slice(0, 6).toUpperCase()}
                          </span>
                        </div>
                      </th>
                      <td className="px-6 py-4">{WALLET_VERIFY_STATUS[entry.globalStatus].chip}</td>
                      <td className="px-6 py-4">{WALLET_VERIFY_STATUS[entry.spainStatus].chip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-4 text-center text-body">
                No tienes wallets asociadas a tu cuenta.
                <button className="ml-2 text-primary-600 underline font-semibold">
                  Conectar wallet
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
