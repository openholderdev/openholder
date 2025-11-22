import { DashboardInvestmentFilters } from "./sections/dashboard-investment-filters/DashboardInvestmentFilters";
import { DashboardInvestmentList } from "./sections/dashboard-investments-list/DashboardInvestmentsList";

export default function DashboardInvestmentsView() {
  return (
    <main>
      <DashboardInvestmentFilters />
      <DashboardInvestmentList />
    </main>
  )
}
