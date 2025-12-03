import { observer } from "mobx-react-lite";
import { FaExclamation } from "react-icons/fa6";
import { DashboardSettingsWalletController } from "../../DashboardSettingsWalletController";
import { CustomerWallet } from "../../core/domain/models/Wallet";
import { toJS } from "mobx";
import {
  SIGNATURES_USER,
  WALLET_SIGN_STATUS,
  WALLET_VERIFY_STATUS,
} from "./WalletSignContract.constants";
import { useSession } from "next-auth/react";

export const WalletSignContracts = observer(function WalletSignContracts() {
  const store = DashboardSettingsWalletController.getInstance();
  const walletDetected = toJS(store.walletConnectedData);
  const { data: session } = useSession();
  const walletStoredDetected = toJS(store.customerWalletsStored).find(
    (customerWallet: CustomerWallet) => customerWallet.walletAddress === walletDetected?.address
  );

  const handleSign = async (signType: "GLOBAL" | "SPAIN") => {
    const result: CustomerWallet[] = await store.createCustomerWallet(
      signType,
      session?.user.id as string
    );
    store.customerWalletsStored = result;
  };

  return (
    <section data-testid="wallet-sign-contracts" className="px-4 pt-4">
      <div className="px-4 py-7 bg-white rounded-lg shadow-md">
        <div>
          <h4 className="text-xl font-semibold mb-3">Validar wallet</h4>
          <p className="text-sm">
            Solo las billeteras incluidas en la whites oueden adquirir tokens e interactural con la
            plataforma. Tenemos dos listas difrerentes en funcion de si quieres invertir en
            inmuebles lanzados en euro yç/o dolares
          </p>
        </div>
        <div className="pt-8 w-full gap-6 grid grid-cols-12">
          <div className="col-span-12 shadow-md bg-[#F1F2F3] p-4 rounded-md">
            <div className="flex gap-2 justify-between mb-2">
              <p className="font-semibold">Global</p>
              {WALLET_VERIFY_STATUS[walletStoredDetected?.globalStatus || "NOT_REQUESTED"].chip}
            </div>
            <p className="text-[#171717] text-sm mb-4">
              <b> Whitelist Global:</b> Para inversores internacionales que pueden invertir en
              propiedades fuera de España. Tiene sus propias regulaciones y requisitos de
              cumplimiento.
            </p>
            <button
              onClick={() => handleSign(SIGNATURES_USER.GLOBAL as "GLOBAL")}
              disabled={
                walletStoredDetected?.globalStatus === WALLET_SIGN_STATUS.APPROVED ||
                walletStoredDetected?.globalStatus === WALLET_SIGN_STATUS.PENDING
              }
              className="disabled:bg-gray-200 py-2 w-full font-semibold text-sm text-green-900 bg-green-400 px-5 rounded-lg"
            >
              Solicitar
            </button>
          </div>
          <div className="col-span-12 shadow-md bg-[#F1F2F3] p-4 rounded-md">
            <div className="flex gap-2 justify-between mb-2">
              <p className="font-semibold">España</p>
              {WALLET_VERIFY_STATUS[walletStoredDetected?.spainStatus || "NOT_REQUESTED"].chip}
            </div>
            <p className="text-[#171717] text-sm mb-4">
              <b>Whitelist España:</b> Para inversores que quieren invertir específicamente en
              propiedades españolas. Debe cumplir con la regulación financiera española (como
              requisitos de la CNMV u otras entidades reguladoras locales).
            </p>

            <button
              onClick={() => handleSign(SIGNATURES_USER.SPAIN as "SPAIN")}
              disabled={
                walletStoredDetected?.spainStatus === WALLET_SIGN_STATUS.APPROVED ||
                walletStoredDetected?.spainStatus === WALLET_SIGN_STATUS.PENDING
              }
              className="disabled:bg-gray-200 py-2 w-full font-semibold text-sm text-green-900 bg-green-400 px-5 rounded-lg"
            >
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
