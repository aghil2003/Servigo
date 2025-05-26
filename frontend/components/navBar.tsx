"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b bg-white px-4 md:px-6 shadow-sm">
      <div className="flex w-full items-center justify-between">
        {/* Logo and Branding */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/image/logo.png"
              alt="Servigo Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">Servigo</span>
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-[15px] sm:text-[15px] px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Back
        </button>
      </div>
    </header>
  );
}
