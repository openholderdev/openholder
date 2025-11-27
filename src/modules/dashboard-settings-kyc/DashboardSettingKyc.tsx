import DashboardNavbar from "@/src/components/DashboardNavbar";
import NavigationMobile from "@/src/components/NavigationMobile";
import KycInstructions from "./sections/kyc-instructions/KycInstructions";
import KycNav from "./sections/kyc-nav/KycNav";
import KycPersonalInformation from "./sections/kyc-personal-information/KycPersonalInformation";
import { DashboardSettingsKycController } from "./DashboardSettingKycController";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { toJS } from "mobx";
import KycFinancialInformation from "./sections/kyc-financial-information/KycFinancialInformation";
import KycSuccess from "./sections/kyc-success/KycSuccess";

export default observer(function DashboardSettingKyc() {
  const controller = DashboardSettingsKycController.getInstance();
  const stepViews: { [key: string]: ReactNode } = {
    "0": (
      <>
        <DashboardNavbar />
        <KycNav />
        <KycInstructions />
        <NavigationMobile />
      </>
    ),
    "1": <KycPersonalInformation />,
    "2": <KycFinancialInformation />,
    "3": (
      <>
        <DashboardNavbar />
        <KycSuccess />
        <NavigationMobile />
      </>
    ),
    "4": (
      <>
        <DashboardNavbar />
        <KycNav />
        <KycSuccess />
        <NavigationMobile />
      </>
    ),
  };

  if (controller.kycReviewIsPending) {
    return <>{stepViews["4"]}</>;
  }
  return <>{stepViews[controller.activeStepView]}</>;
});
