// import { Navbar } from "../admindashboard/layout/Navbar";
// import { Sidebar } from "../admindashboard/layout/Sidebar";

"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import OrderPage from "../orderpage";


export default function ordersDashbord() {

  return (
    <div className="flex min-h-screen flex-col">
  <Navbar />
  <div className="flex flex-1">
    {/* Sidebar - Fixed on the left */}
    <div className="hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-background z-20">
      <Sidebar />
    </div>

    {/* Main content with left margin to account for sidebar width */}
    <main className="flex-1 ml-0 md:ml-10 overflow-y-auto p-4 md:p-6 lg:p-8">
      <OrderPage />
    </main>
  </div>
</div>

  );
}
