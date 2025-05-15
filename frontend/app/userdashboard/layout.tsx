import DashboardLayout  from "@/components/userdashboard/layout/DashboardLayout.tsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}