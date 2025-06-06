
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
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="/image/logo.png"
              alt="Servigo Logo"
              width={36}
              height={36}
              className="rounded-md w-9 h-9 sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-2xl font-bold text-gray-800">Servigo</span>
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
        >
          Back
        </button>
      </div>
    </header>
  );
}
