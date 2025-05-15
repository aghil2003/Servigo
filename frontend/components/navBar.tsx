"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export function Navbar() {
  
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b bg-background px-4 md:px-6">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">

          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/image/logo.png"
              alt="Your Company"
              width={45}
              height={45}
            />
            <span className="text-lg font-semibold">Servigo Admin</span>
          </Link>
        </div>

       </div>
    
    </header>
  );
}