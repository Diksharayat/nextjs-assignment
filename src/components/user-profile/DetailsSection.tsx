"use client";
import React from "react";
export default function DetailsSection() {

  return (
    <>
    <div className="flex items-center justify-between bg-[#edf4f7] rounded-xl p-2 w-full mx-auto border-2 border-white">
  {/* Left: Back arrow and name */}
  <div className="flex items-center space-x-2 text-gray-800 text-base font-medium">
    <button aria-label="Go back">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <span className=" text-lg font-normal">Ms John Smith</span>
  </div>

  {/* Right: Toggle buttons */}
  <div className="flex items-center space-x-2">
    <button className="bg-lime-yellow text-dark-yellow text-md font-semibold px-3 py-2 rounded-lg">
      Client Details
    </button>
    <button className="bg-red-pink text-white text-md font-semibold px-3 py-2 rounded-lg">
      Partner Details
    </button>
  </div>
</div>

    </>
  );
}
