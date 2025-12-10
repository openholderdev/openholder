import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { useRouter } from "next/router";

export default function NavigationMobile() {
  const router = useRouter();

  return (
    <div className="bottom-0 fixed w-full py-2 bg-[#16171D] px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <nav className="text-[#171717] flex justify-between gap-4 px-4 text-white">
        <p onClick={() => router.push("/dashboard")} className="flex flex-col items-center">
          <MdSpaceDashboard className="text-2xl" />
          <span className="text-xs cursor-pointer">Dashboard</span>
        </p>
        <p
          onClick={() => router.push("/dashboard/investments")}
          className="flex flex-col items-center cursor-pointer"
        >
          <FaRegNewspaper className="text-xl" />
          <span className="text-xs">Proyectos</span>
        </p>
        <p
          onClick={() => router.push("/dashboard/wallet/investments")}
          className="flex flex-col items-center cursor-pointer"
        >
          <FaChartLine className="text-xl" />
          <span className="text-xs">Mis inversiónes</span>
        </p>
        <p
          onClick={() => router.push("/dashboard/settings/profile")}
          className="flex flex-col items-center cursor-pointer"
        >
          <MdManageAccounts className="text-xl" />
          <span className="text-xs ">Mi cuenta</span>
        </p>
        <p className="flex flex-col items-center cursor-pointer">
          <AiFillShop className="text-xl" />
          <span className="text-xs">Marketplace</span>
        </p>
      </nav>
    </div>
  );
}
