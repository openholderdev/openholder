import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";

export default function NavigationMobile() {
  return (
    <div className="bg-white bottom-0 fixed w-full py-2 px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <nav className="text-[#171717] flex justify-between gap-4 px-4">
          <p className="flex flex-col items-center">
            <MdSpaceDashboard className="text-2xl" />
            <span className="text-xs font-semibold">Dashboard</span>
          </p>
          <p className="flex flex-col items-center">
            <FaRegNewspaper className="text-2xl" />
            <span className="text-xs font-semibold">Proyectos</span>
          </p>
          <p className="flex flex-col items-center">
            <FaChartLine className="text-2xl" />
            <span className="text-xs font-semibold">Mis inversiónes</span>
          </p>
          <p className="flex flex-col items-center">
            <MdManageAccounts className="text-2xl" />
            <span className="text-xs font-semibold">Mi cuenta</span>
          </p>
          <p className="flex flex-col items-center">
            <AiFillShop className="text-2xl" />
            <span className="text-xs font-semibold">Marketplace</span>
          </p>
        </nav>
      </div>
  )
}
