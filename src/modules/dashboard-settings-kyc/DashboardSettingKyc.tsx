import DashboardNavbar from "@/src/components/DashboardNavbar";
import NavigationMobile from "@/src/components/NavigationMobile";
import KycInstructions from "./sections/kyc-instructions/KycInstructions";
import KycNav from "./sections/kyc-nav/KycNav";
import KycPersonalInformation from "./sections/kyc-personal-information/KycPersonalInformation";
import { DashboardSettingsKycController } from "./DashboardSettingKycController";
import { observer } from "mobx-react-lite";
import { ReactNode, useEffect } from "react";
import { toJS } from "mobx";
import KycFinancialInformation from "./sections/kyc-financial-information/KycFinancialInformation";
import KycSuccess from "./sections/kyc-success/KycSuccess";
import KycPendingValidation from "./sections/kyc-pending-validation/KycPendingValidation";
import KycApprovedValidation from "./sections/kyc-approved-validation/KycApprovedValidation";

export default observer(function DashboardSettingKyc() {
  const controller = DashboardSettingsKycController.getInstance();

  useEffect(() => {
    controller.initialize();
  }, [controller.activeStepView]);

  useEffect(() => {
    if (controller.statusKycCustomer === "approved") {
      controller.setStepView(7);
    }
    if (controller.statusKycCustomer === "rejected") {
      controller.setStepView(8);
    }
    if (controller.statusKycCustomer === "pending") {
      controller.setStepView(6);
    }
  }, [controller.statusKycCustomer]);

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
    "6": (
      <>
        <DashboardNavbar />
        <KycNav />
        <KycPendingValidation />
        <NavigationMobile />
      </>
    ),
    "7": (
      <>
        <DashboardNavbar />
        <KycNav />
        <KycApprovedValidation />
        <NavigationMobile />
      </>
    ),
  };
  return <>{stepViews[controller.activeStepView]}</>;
});
