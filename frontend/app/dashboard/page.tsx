import { StatsContainer } from "@/components/dashboard/StatsContainer";
import { ReviewsContainer } from "@/components/dashboard/ReviewsContainer";
import { OrdersTable } from "@/components/dashboard/OrdersTable";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your home service business performance.
        </p>
      </div> */}
      
      <StatsContainer />
      
      <ReviewsContainer />
      
      <OrdersTable />
    </div>
  );
}