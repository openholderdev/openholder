import { observer } from "mobx-react-lite";
import { TbFilterSearch } from "react-icons/tb";

export const DashboardInvestmentFilters = observer(function DashboardInvestmentFilters() {
  return (
    <section data-testid="dashboard-investment-filters">
      <div className="grid grid-cols-2 w-full justify-between bg-[#f1f2f3]">
        <div className="col-span-1 flex justify-center items-center bg-[#c1c1c1]">
          <div className="flex items-center gap-2 py-2">
            <TbFilterSearch />
            <span className="font-semibold">Filtros</span>
            <span className="bg-red-600 w-4 h-4 text-xs flex items-center justify-center rounded-full shadow text-white font-bold">1</span>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <div className="flex items-center gap-1">
            <TbFilterSearch />
            <span className="font-semibold">Ordenar</span>
          </div>
        </div>
      </div>
    </section>
  )
})
