import { observer } from "mobx-react-lite";
import WalletCompleteKycBanner from "./sections/wallet-complete-kyc-banner/WalletCompleteKycBanner";
import { WalletDetected } from "./sections/wallet-detected/WalletDetected";
import WalletInfo from "./sections/wallet-info.tsx/WalletInfo";
import WalletNav from "./sections/wallet-nav/WalletNav";
import { WalletSignContracts } from "./sections/wallet-sign-contracts/WalletSignContracts";
import { DashboardSettingsWalletController } from "./DashboardSettingsWalletController";
import { WalletConnectBanner } from "./sections/wallet-connect-banner/WalletConnectBanner";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { WalletCustomerList } from "./sections/wallet-customer-list/WalletCustomerList";

export const DashboardSettingsWallet = observer(function DashboardSettingsWallet() {
  const store = DashboardSettingsWalletController.getInstance();
  const { data: session, status } = useSession();

  useEffect(() => {
    handleCustomerKycCheck();
    store.getCustomerWalletsStored(session?.user.id as string);
  }, [session?.user.email]);

  const handleCustomerKycCheck = async () => {
    const result = await store.getCustomerKycCompleted(session?.user.email as string);
    store.customerKycCompleted = result ? result : false;
  };

  return (
    <main className="bg-white pb-[6rem]">
      <WalletNav />
      {!store.customerKycCompleted && (
        <>
          <WalletCompleteKycBanner />
          <WalletInfo />
        </>
      )}
      {!store.walletConnected && store.customerKycCompleted && (
        <>
          <WalletConnectBanner />
          <WalletCustomerList />
        </>
      )}
      {store.customerKycCompleted && store.walletConnected && (
        <>
          <WalletDetected />
          <WalletSignContracts />
        </>
      )}
    </main>
  );
});
