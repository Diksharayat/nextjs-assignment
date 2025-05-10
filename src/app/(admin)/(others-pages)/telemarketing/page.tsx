import BasicTableOne from "@/components/tables/GuestTable";
import DetailsSection from "@/components/user-profile/DetailsSection";
import SearchStatusBar from "@/components/user-profile/SearchStatusBar";
import UserProfileCard from "@/components/user-profile/UserProfileCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Campaign Management - Telemarketing | Admin Dashboard",
  description: "Telemarketing campaign management dashboard for managing and tracking marketing campaigns",
};

export default function TelemarketingPage() {
  return (
    <div className="">
     
      <div className="space-y-6">
        <DetailsSection/>
        <SearchStatusBar />
        <BasicTableOne />
        <UserProfileCard />
      </div>
    </div>
  );
}
