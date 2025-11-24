import { DashboardInvestmentFilters } from "./sections/dashboard-investment-filters/DashboardInvestmentFilters";
import DashboardInvestmentHeader from "./sections/dashboard-investment-header/DashboardInvestmentHeader";
import { DashboardInvestmentList } from "./sections/dashboard-investments-list/DashboardInvestmentsList";

export default function DashboardInvestmentsView() {
  return (
    <main>
      <DashboardInvestmentHeader />
      <DashboardInvestmentFilters />
      <DashboardInvestmentList />
    </main>
  );
}
