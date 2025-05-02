"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { DollarSign, Users, Briefcase } from "lucide-react";

// Sample data for demonstration
const weeklyData = [
  { name: "Mon", income: 1500, jobs: 5, customers: 8 },
  { name: "Tue", income: 2200, jobs: 8, customers: 10 },
  { name: "Wed", income: 1800, jobs: 6, customers: 9 },
  { name: "Thu", income: 2400, jobs: 9, customers: 12 },
  { name: "Fri", income: 2700, jobs: 10, customers: 15 },
  { name: "Sat", income: 1900, jobs: 7, customers: 11 },
  { name: "Sun", income: 1200, jobs: 4, customers: 6 },
];

const monthlyData = [
  { name: "Jan", income: 10500, jobs: 35, customers: 58 },
  { name: "Feb", income: 12200, jobs: 42, customers: 61 },
  { name: "Mar", income: 13800, jobs: 46, customers: 69 },
  { name: "Apr", income: 12400, jobs: 39, customers: 72 },
  { name: "May", income: 14700, jobs: 50, customers: 85 },
  { name: "Jun", income: 16900, jobs: 57, customers: 91 },
  { name: "Jul", income: 18200, jobs: 64, customers: 104 },
  { name: "Aug", income: 17500, jobs: 61, customers: 97 },
  { name: "Sep", income: 15700, jobs: 53, customers: 88 },
  { name: "Oct", income: 16200, jobs: 54, customers: 92 },
  { name: "Nov", income: 14500, jobs: 48, customers: 83 },
  { name: "Dec", income: 19200, jobs: 67, customers: 112 },
];

const yearlyData = [
  { name: "2020", income: 145000, jobs: 520, customers: 850 },
  { name: "2021", income: 182000, jobs: 610, customers: 920 },
  { name: "2022", income: 214000, jobs: 680, customers: 1050 },
  { name: "2023", income: 252000, jobs: 760, customers: 1280 },
  { name: "2024", income: 287000, jobs: 840, customers: 1420 },
];

export function StatsContainer() {
  const [period, setPeriod] = useState("weekly");

  // Determine active data based on the selected period
  const activeData = period === "weekly" ? weeklyData : period === "monthly" ? monthlyData : yearlyData;

  // Calculate total stats
  const totalIncome = activeData.reduce((sum, item) => sum + item.income, 0);
  const totalJobs = activeData.reduce((sum, item) => sum + item.jobs, 0);
  const totalCustomers = activeData.reduce((sum, item) => sum + item.customers, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalIncome.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +{period === "weekly" ? "18" : period === "monthly" ? "12" : "24"}% from previous {period.slice(0, -2)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalJobs}</div>
            <p className="text-xs text-muted-foreground">
              +{period === "weekly" ? "12" : period === "monthly" ? "8" : "15"}% from previous {period.slice(0, -2)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers}</div>
            <p className="text-xs text-muted-foreground">
              +{period === "weekly" ? "10" : period === "monthly" ? "15" : "18"}% from previous {period.slice(0, -2)}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Performance Overview</CardTitle>
            <Tabs 
              value={period} 
              onValueChange={setPeriod}
              className="w-[320px]"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" name="Income ($)" fill="hsl(var(--chart-1))" />
                <Bar dataKey="jobs" name="Jobs" fill="hsl(var(--chart-2))" />
                <Bar dataKey="customers" name="Customers" fill="hsl(var(--chart-3))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}