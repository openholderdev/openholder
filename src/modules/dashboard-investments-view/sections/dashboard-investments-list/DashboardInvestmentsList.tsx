import { observer } from "mobx-react-lite";
import { DashboardInvestmentsViewController } from "../../DashboardInvestmentsViewController";
import { useEffect, useState } from "react";
import { UIInvestment } from "../../core/Domain/models/Investment";
import CardInvestment from "./components/CardInvestment";

export const DashboardInvestmentList = observer(function DashboardInvestmentList() {
  const store = DashboardInvestmentsViewController.getInstance();
  const [investmentsFiltered, setInvestmentFiltered] = useState<UIInvestment[]>([]);

  useEffect(() => {
    initializeInvestments();
  }, []);

  const initializeInvestments = async () => {
    if (!store.listInvestments) {
      const investments = await store.fetchInvestments();
      store.listInvestments = investments ? investments : [];
      filterBy();
    }
  };

  const filterBy = () => {
    let allElementsList: UIInvestment[] = store.getListInvestments();

    // if (store.filterInversionCategory) {
    //   allElementsList = allElementsList.filter(
    //     (entry) => entry.typeInvestment === store.filterInversionCategoryValue
    //   );
    // }
    // if (store.filterInversionStatus) {
    //   allElementsList = allElementsList.filter(
    //     (entry) => entry.typeInvestment === store.filterInversionStatusValue
    //   );
    // }
    setInvestmentFiltered(allElementsList);
  };

  useEffect(() => {
    console.log("filtros actualizados");
    filterBy();
  }, [store, store.filterInversionCategory, store.filterInversionStatus]);

  return (
    <section data-testid="dashboard-investment-list" className="px-4 pt-10 pb-40">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-1">
        {investmentsFiltered.map((entry: UIInvestment) => (
          <CardInvestment entry={entry} key={entry.investmentId} />
        ))}
      </div>
    </section>
  );
});
