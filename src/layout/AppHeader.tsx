"use client";
import UserDropdown from "@/components/header/UserDropdown";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Logo from '../icons/logo.png';
import { Menu } from "lucide-react";
import { Bell, MessageCircle } from "@deemlol/next-icons";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen] = useState(false);
  const { isMobileOpen, isExpanded, toggleMobileSidebar } = useSidebar();

  const toggleApplicationMenu = () => {

    toggleMobileSidebar();
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const minWidth = isMobileOpen
    ? "ml-0"
    : isExpanded
      ? "min-w-[290px]"
      : "min-w-[90px]";
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-2">
        <div className="flex items-center justify-between w-full gap-2 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">

          <div className={`logo ${minWidth}`} >
            <Image src={Logo} height={240} width={240} alt="lovepro logo" />
          </div>

          <button
            onClick={toggleApplicationMenu}
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <Menu />
          </button>

          <h1 className="text-3xl w-max hidden md:block lg:block">Hey,<span className="text-lime text-bold "> Semmie</span> Welcome Back</h1>
        </div>
        <div
          className={`${isApplicationMenuOpen ? "flex" : "hidden"
            } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <div className="flex items-center gap-2 2xsm:gap-3">
            {/* Chat Icon with Notification Dot */}
            <div className="relative">
              <MessageCircle className="w-6 h-6 text-gray-700" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-dark-green ring-2 ring-white"></span>
            </div>

            {/* Bell Icon with Notification Dot */}
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-dark-green ring-2 ring-white"></span>
            </div>
          </div>


          <UserDropdown />

        </div>
      </div>
    </header>
  );
};

export default AppHeader;
