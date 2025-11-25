import { observer } from "mobx-react-lite";
import { CgCheck } from "react-icons/cg";
import { DashboardSettingsWalletController } from "../../DashboardSettingsWalletController";

export const WalletDetected = observer(function WalletDetected() {
  const store = DashboardSettingsWalletController.getInstance();
  const walletData = store.walletConnectedData;

  return (
    <section className="p-4 border border-dashed border-gray-400 rounded-md bg-green-100">
      <div>
        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold text-xl">Nueva wallet detectada</h4>
            <div className="mb-3 rounded-full bg-white text-[#171717] text-xs font-bold flex items-center shadow-md w-26 justify-center">
              <CgCheck className="text-green-500 text-xl" />
              <span className="text-xs">{walletData?.address?.slice(0, 6).toUpperCase()}</span>
            </div>
          </div>
          <p className="text-sm">
            Has conectado una wallet que no está registrada en tu cuenta. Haz cliec en el botón para
            ver las whiotelists disponibles.
          </p>
        </div>
      </div>
    </section>
  );
});
