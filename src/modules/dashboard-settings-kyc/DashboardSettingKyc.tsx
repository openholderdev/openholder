import DashboardNavbar from "@/src/components/DashboardNavbar";
import NavigationMobile from "@/src/components/NavigationMobile";
import KycInstructions from "./sections/kyc-instructions/KycInstructions";
import KycNav from "./sections/kyc-nav/KycNav";
import KycPersonalInformation from "./sections/kyc-personal-information/KycStep1";

export default function DashboardSettingKyc() {
  return (
    <>
      <DashboardNavbar />
      <main>
        <KycNav />
        {/* <KycInstructions /> */}
        <KycPersonalInformation />
      </main>
      <NavigationMobile />
    </>
  );
}
