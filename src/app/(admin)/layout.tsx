"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  return (
    <div className="min-h-screen">
      <AppSidebar />
      <AppHeader />

      {/* Main Content Area */}
      <div
        className={`relative flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('/images/image.png')] bg-cover bg-center opacity-20 pointer-events-none z-0" />

        {/* Content (Header and Page) */}
        <div className="relative z-10">
          {/* Header */}

          {/* Page Content */}
          <h3 className="text-2xl font-bold text-gray-800 mt-6 px-6">
            {'Telemarketing'}
          </h3>
          <div className="p-4 mx-auto max-w-[1536px] md:px-6">{children}</div>
        </div>
      </div>

    </div>
  );
}
