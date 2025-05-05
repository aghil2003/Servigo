import { StatsContainer } from "@/components/admindashboard/StatsContainer";
import { ReviewsContainer } from "@/components/admindashboard/ReviewsContainer";
import { OrdersTable } from "@/components/admindashboard/OrdersTable";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      <StatsContainer />
      
      <ReviewsContainer />
      
      <OrdersTable />
    </div>
  );
}