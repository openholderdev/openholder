import { RiContractFill } from "react-icons/ri";
import { UIInvestment } from "../../../core/Domain/models/Investment";
import { calculatePercentage, formatEuropeanNumber } from "../../../utils/currency-utils";
import {
  TOKEN_STATUS_CONFIGS,
  TOKEN_TYPES_CONFIGS,
  TYPE_INVERSION,
} from "../DashboardInvestments.constants";
import ProgressBar from "@/src/components/ProgressBar";
import { formatDate } from "../../../utils/dates";
import { TfiReload } from "react-icons/tfi";
import DashboardBuyTokenSection from "../../dashboard-buy-token-section/DasboardBuyTokenSection";
import { useState } from "react";

export default function CardInvestment({ entry }: { entry: UIInvestment }) {
  const [buyToken, setBuyToken] = useState<boolean>(false);
  const existGallery = String(entry.galleryImages[0]);
  const buttonBg = TOKEN_STATUS_CONFIGS[entry.status].button.bgColor;
  const buttonText = TOKEN_STATUS_CONFIGS[entry.status].button.textColor;
  return (
    <div className="shadow-lg  rounded-lg pb-4 md:col-span-6" key={entry.investmentId}>
      <div data-testid="investment-gallery-image" className="flex overflow-x-auto gap-2">
        <img
          src={existGallery}
          alt={entry.nameProject}
          className="rounded-t-xl h-[200px] w-[100%]"
        />
      </div>
      <div data-testid="investment-header" className="px-4 py-3">
        <div className="flex justify-between">
          <p className="text-md font-semibold">{entry.nameProject}</p>
          <p className="text-md font-bold">
            {formatEuropeanNumber(entry.financial.totalInvestmentAmount)}
          </p>
        </div>
      </div>
      <div data-testid="investment-fast-info" className="px-4 py-1 gap-3 flex">
        <span className="text-xs flex items-center gap-2 px-3 py-1 rounded-full font-semibold shadow bg-[#f1f2f3] cursor-pointer">
          <RiContractFill />
          {entry.tokenCode}
        </span>
        <span
          className={`text-xs flex items-center gap-2 px-3 py-1 rounded-full font-semibold shadow cursor-pointer ${buttonBg} ${buttonText}`}
        >
          <span>{TOKEN_STATUS_CONFIGS[entry.status].button.icon}</span>
          {TOKEN_STATUS_CONFIGS[entry.status].name}
        </span>
        <span className="text-xs px-3 bg-white py-1 rounded-full font-semibold shadow flex items-center gap-2 cursor-pointer">
          {TYPE_INVERSION[entry.typeInvestment].icon}
          {TOKEN_TYPES_CONFIGS[entry.typeInvestment]}
        </span>
      </div>
      {entry.status === TOKEN_STATUS_CONFIGS.IN_SALE.type && (
        <div data-testid="investment-on-sale" className="w-full px-4 py-4">
          <div className="flex justify-between">
            <div>
              <span className="font-semibold text-xs">Financiado</span>
              <p>
                {formatEuropeanNumber(
                  entry.financial.totalInvestmentAmount -
                    (entry.financial.totalInvestmentAmount % 2)
                )}
              </p>
            </div>
            <div>
              <span className="font-semibold text-xs">Objetivo</span>
              <p>{formatEuropeanNumber(entry.financial.totalInvestmentAmount)}</p>
            </div>
          </div>
          <ProgressBar
            progress={calculatePercentage(
              Number(
                entry.financial.totalInvestmentAmount - (entry.financial.totalInvestmentAmount % 2)
              ),
              Number(entry.financial.totalInvestmentAmount)
            )}
          />
        </div>
      )}
      {buyToken ? (
        <DashboardBuyTokenSection investmentId={entry.investmentId} />
      ) : (
        <div data-testid="investment-info" className="w-full px-4 py-4">
          <div className="w-full flex flex-col gap-2">
            <p className="flex justify-between w-full text-sm">
              Período de inversión
              <span className="font-semibold">{entry.financial.monthlyRentEstimate} meses</span>
            </p>
            <p className="flex justify-between w-full text-sm">
              Rentabilidad total estimada
              <span className="font-semibold">{entry.financial.monthlyRentEstimate}%</span>
            </p>
            <p className="flex justify-between w-full text-sm">
              Rentabilidad anual estimada
              <span className="font-semibold">{entry.financial.rentabilityAnnualEstimate}%</span>
            </p>
            {entry.status === TOKEN_STATUS_CONFIGS.IN_CONFIG.type && (
              <p className="flex justify-between w-full text-sm">
                Inicio renta
                <span className="font-semibold">{formatDate(String(entry.initRentEstimate))}</span>
              </p>
            )}
            <p className="pt-2 flex justify-center">
              <span className="flex items-center gap-2 text-xs">
                <TfiReload className="text-green-600" />
                Rendimiento mensual + final
              </span>
            </p>
            <div>
              <button
                onClick={() => setBuyToken(true)}
                className="py-2 w-full bg-[#171717] text-white cursor-pointer border-1 border-black rounded-md"
              >
                Invertir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
