import LanguageSwitcher from "@/src/components/LanguageSwitcherDropdown";
import { CgProfile } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";

export default function DashboardInvestmentHeader() {
  return (
    <header className="grid grid-cols-12 px-4 py-2 bg-[#1f1f1f] text-white">
      <div className="col-span-6 flex font-bold text-lg">Openhub</div>
      <div className="col-span-6 flex justify-end font-bold text-lg">
        <GrLanguage className="ml-4 cursor-pointer" size={24} />
        <CgProfile className="ml-4" size={24} />
      </div>
    </header>
  );
}
