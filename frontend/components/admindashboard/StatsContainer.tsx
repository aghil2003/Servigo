"use client";

import { useState,useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admindashboard/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/admindashboard/ui/tabs";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import AxiosInstance from "@/axios/axiosInstance";
import { DollarSign, Users, Briefcase } from "lucide-react";


export function StatsContainer() {
  const [weeklyData,setWeeklyData]=useState(null);
  const [monthlyData,setmonthlyData]=useState(null);
  const [yearlyData,setyearlyData]=useState(null);
  const [period, setPeriod] = useState("weekly");

  
  const getData = async () => {
    try {
      const weeklyres = await AxiosInstance.get("/week");
      // console.log(weeklyres.data,"wertyu");
      setWeeklyData(weeklyres.data);
      const monthres = await AxiosInstance.get("/month");
      // console.log(monthres.data,"wertyu");
      setmonthlyData(monthres.data);
      const yearlyres = await AxiosInstance.get("/year");
      // console.log(yearlyres.data,"wertyu");
      setyearlyData(yearlyres.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    getData();
  }, []); 
  
  // Determine active data based on the selected period
  const activeData = period === "weekly"
  ? weeklyData || []
  : period === "monthly"
  ? monthlyData || []
  : yearlyData || [];


  // Calculate total stats
  const totalIncome = activeData.reduce((sum, item) => sum + Number(item.income || 0), 0);
  const totalJobs = activeData.reduce((sum, item) => sum + Number(item.jobs || 0), 0);
  const totalCustomers = activeData.reduce((sum, item) => sum + Number(item.customers || 0), 0);
  


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
    <Tabs value={period} onValueChange={setPeriod} className="w-full">
  {/* Dropdown for small screens */}
  <div className="block sm:hidden mb-4">
    <select
      value={period}
      onChange={(e) => setPeriod(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2 text-sm"
    >
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
  </div>

  {/* Tabs for medium and larger screens */}
  <TabsList className="hidden sm:grid w-full grid-cols-3 bg-muted p-1 rounded-md text-muted-foreground">
    <TabsTrigger value="weekly" className="px-3 py-2 rounded-md data-[state=active]:bg-white">Weekly</TabsTrigger>
    <TabsTrigger value="monthly" className="px-3 py-2 rounded-md data-[state=active]:bg-white">Monthly</TabsTrigger>
    <TabsTrigger value="yearly" className="px-3 py-2 rounded-md data-[state=active]:bg-white">Yearly</TabsTrigger>
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