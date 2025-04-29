"use client";

import Image from "next/image";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="h-[80px]">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-[80px] items-center justify-between shadow-md">
                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                        <Image
                            src="/image/logo.png"
                            alt="Your Company"
                            width={40}
                            height={40}
                        />
                        <p className="text-[34px] font-bold text-[#171717]">servigo</p>
                    </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Notifications icon */}
                    <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                        <span className="sr-only">View notifications</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                        </svg>
                    </button>

                    {/* Settings dropdown */}
                    <div className="relative ml-3">
                        <div>
                            <button
                                type="button"
                                className="relative flex rounded-full bg-gray-800 text-sm p-2"
                                id="user-menu-button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <IoSettingsOutline className="h-5 w-5 text-white" aria-hidden="true" />
                            </button>
                        </div>

                        {isMenuOpen && (
                            <div
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                >
                                    Your Profile
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                >
                                    Settings
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                >
                                    Sign out
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
