import { observer } from "mobx-react-lite";
import { DashboardInvestmentsViewController } from "../../DashboardInvestmentsViewController";
import { useEffect } from "react";
import { UIInvestment } from "../../core/Domain/models/Investment";

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

  console.log(store.getListInvestments())
  return (
    <section>
      {
        store.getListInvestments().map((entry: UIInvestment) =>(<div key={entry.investmentId}>{entry.investmentId}</div>))
      }
    </section>
  )
})
