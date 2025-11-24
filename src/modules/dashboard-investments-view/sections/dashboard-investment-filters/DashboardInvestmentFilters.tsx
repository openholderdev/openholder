import { observer } from "mobx-react-lite";
import { TbFilterSearch } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { useClickOutside } from "@/src/hooks/useClickOutside";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { DashboardInvestmentsViewController } from "../../DashboardInvestmentsViewController";

export const DashboardInvestmentFilters = observer(function DashboardInvestmentFilters() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const store = new DashboardInvestmentsViewController();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const onSubmit = (data: any) => {
    if (store.filterInversionCategory) {
      store.filterInversionCategory = true as boolean;
      store.filterInversionCategoryValue = data.investmentType as string;
    }
    if (store.filterInversionStatus) {
      store.filterInversionStatus = true as boolean;
      store.filterInversionStatusValue = data.investmentStatus as string;
    }
    setIsOpen(false);
  };

  return (
    <section className="relative" ref={dropdownRef}>
      <section data-testid="dashboard-investment-filters">
        <div className="grid grid-cols-2 w-full justify-between bg-[#f1f2f3]">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="col-span-1 flex justify-center items-center cursor-pointer bg-[#c1c1c1]"
          >
            <div className="flex items-center gap-2 py-2">
              <span className="font-semibold">Filtros</span>
              <span className="bg-red-600 w-4 h-4 text-xs flex items-center justify-center rounded-full shadow text-white font-bold">
                1
              </span>
              {isOpen ? <IoMdCloseCircleOutline className="text-xl" /> : <FaArrowDownWideShort />}
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center cursor-pointer hover:bg-[#c3c3c3]">
            <div className="flex items-center gap-1">
              <TbFilterSearch />
              <span className="font-semibold">Ordenar</span>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute w-full shadow-sm"
          data-testid="dashboard-investment-filters-content"
        >
          <div className="bg-white p-4 pb-10 rounded-lg shadow-md mt-4">
            <p
              data-testid="dashboard-investment-filter-type-investment"
              className="font-semibold text-lg flex w-full items-center justify-between"
            >
              Filtros
              <span className="text-3xl" onClick={() => setIsOpen(false)}>
                <IoCloseOutline />
              </span>
            </p>
            <div data-testid="dashboard-investment-filter-status-investment">
              <p className="pt-4 font-semibold">Tipo de inversión</p>
              <div className="pt-2 relative">
                <select
                  className="w-full px-4 py-3 pr-10 bg-white border-2 border-gray-200 rounded-lg cursor-pointer appearance-none hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                  defaultValue=""
                  {...register("investmentType")}
                >
                  <option value="" disabled>
                    Elige una categoría
                  </option>
                  <option value="REAL_ESTATE">🏠 Inmobiliario</option>
                  <option value="TRANSPORT">🚗 Vehículos</option>
                  <option value="ENERGY">⚡ Granjas fotovoltaicas</option>
                  <option value="OTHER">📦 Otras</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div data-testid="dashboard-investment-filter-status-investment" className="pt-6">
              <p className="font-semibold">Estado de la inversión</p>
              <div className="pt-2 relative">
                <select
                  className="w-full px-4 py-3 pr-10 bg-white border-2 border-gray-200 rounded-lg cursor-pointer appearance-none hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                  defaultValue=""
                  {...register("investmentStatus")}
                >
                  <option value="" disabled>
                    Selecciona un estado
                  </option>
                  <option value="LANDING">Próximamente</option>
                  <option value="IN_SALE">En venta</option>
                  <option value="IN_CONFIG">En reforma</option>
                  <option value="IN_RENT">En explotación</option>
                  <option value="SOLD_OUT">Cerrado</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div data-testid="dashboard-investment-filter-submit" className="pt-10 flex">
              <button type="submit" className="w-full bg-[#171717] text-white py-2 rounded-lg">
                Aplicar filtros
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
});
