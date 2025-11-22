import { observer } from "mobx-react-lite";
import { DashboardInvestmentsViewController } from "../../DashboardInvestmentsViewController";
import { useEffect } from "react";
import { UIInvestment } from "../../core/Domain/models/Investment";
import { TOKEN_STATUS_CONFIGS, TOKEN_TYPES_CONFIGS, TYPE_INVERSION } from "./DashboardInvestments.constants";
import { RiContractFill } from "react-icons/ri";
import { formatEuropeanNumber } from "../../utils/currency-utils";

export const DashboardInvestmentList = observer(function DashboardInvestmentList() {
  const store = DashboardInvestmentsViewController.getInstance();

  useEffect(() => {
    initializeInvestments();
  },[]);

  const initializeInvestments = async () => {
    if (!store.listInvestments) {
      const investments = await store.fetchInvestments();
      store.listInvestments = investments ? investments : [];
    }
  };

  return (
    <section data-testid="dashboard-investment-list" className="px-4 pt-10 pb-40">
      <div className="flex flex-col gap-3">
        {
          store.getListInvestments().map((entry: UIInvestment) => {
            const existGallery = String(entry.galleryImages[0]);
            const buttonBg = TOKEN_STATUS_CONFIGS[entry.status].button.bgColor
            const buttonText = TOKEN_STATUS_CONFIGS[entry.status].button.textColor
            return (
              <div className="shadow-lg  rounded-lg pb-4" key={entry.investmentId}>
                <div data-testid="investment-gallery-image" className="flex overflow-x-auto gap-2">
                  <img src={existGallery} alt={entry.nameProject} className="rounded-t-xl h-[200px] w-[100%]" />
                </div>
                <div data-testid="investment-header" className="px-4 py-3">
                  <div className="flex justify-between">
                    <p className="text-lg font-semibold">{entry.nameProject}</p>
                    <p className="text-lg font-bold">{formatEuropeanNumber(entry.financial.totalInvestmentAmount)}</p>
                  </div>
                </div>
                <div data-testid="investment-fast-info" className="px-4 py-1 gap-3 flex">
                  <span className="text-sm flex items-center gap-2 px-3 py-1 rounded-full font-semibold shadow bg-[#f1f2f3] cursor-pointer">
                    <RiContractFill />
                    {entry.tokenCode}
                  </span>
                  <span className={`text-sm flex items-center gap-2 px-3 py-1 rounded-full font-semibold shadow cursor-pointer ${buttonBg} ${buttonText}`}>
                    <span>{TOKEN_STATUS_CONFIGS[entry.status].button.icon}</span>
                    {TOKEN_STATUS_CONFIGS[entry.status].name}
                  </span>
                  <span className="text-sm px-3 bg-white py-1 rounded-full font-semibold shadow flex items-center gap-2 cursor-pointer">
                    {TYPE_INVERSION[entry.typeInvestment].icon}
                    {TOKEN_TYPES_CONFIGS[entry.typeInvestment]}
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
})
