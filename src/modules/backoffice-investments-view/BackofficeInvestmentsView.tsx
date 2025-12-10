import { observer } from "mobx-react-lite";
import { BackofficeInvestmentCreate } from "./sections/backoffice-investments-create/BackofficeInvestmentCreate";
import { BackofficeInvestmentsList } from "./sections/backoffice-investments-list/BackofficeInvestmentsList";
import { BackofficeInvestmentsViewController } from "./BackofficeInvestmentsViewController";

export const BackofficeInvestmentsView = observer(function BackofficeInvestmentsView() {
  const store = BackofficeInvestmentsViewController.getInstance();

  return (
    <main>
      {store.showCreateInvestmentSection && <BackofficeInvestmentCreate />}
      {store.showListInvestmentSection && <BackofficeInvestmentsList />}
    </main>
  );
});
