import { observer } from "mobx-react-lite";
import { CgCheck } from "react-icons/cg";
import { DashboardSettingsWalletController } from "../../DashboardSettingsWalletController";
import { FaBackward } from "react-icons/fa6";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from "next/router";

export const WalletDetected = observer(function WalletDetected() {
  const store = DashboardSettingsWalletController.getInstance();
  const walletData = store.walletConnectedData;
  const router = useRouter();

  return (
    <>
      <section className="px-4 py-4">
        <div
          onClick={() => router.push("/dashboard/settings/wallet")}
          className="flex items-center gap-1 cursor-pointer font-semibold underline"
        >
          <IoArrowBackSharp className="text-xl" />
          <span>Ver mis wallets</span>
        </div>
      </section>
      <section className="p-4 border border-dashed border-gray-400 rounded-md bg-green-100">
        <div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold text-xl">Wallet detectada</h4>
              <div className="mb-3 rounded-full bg-white text-[#171717] text-xs font-bold flex items-center shadow-md w-26 justify-center">
                <CgCheck className="text-green-500 text-xl" />
                <span className="text-xs">{walletData?.address?.slice(0, 6).toUpperCase()}</span>
              </div>
            </div>
            <p className="text-sm">
              Has conectado una wallet que no está registrada en tu cuenta. Haz cliec en el botón
              para ver las whiotelists disponibles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
});
