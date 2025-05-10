// components/SearchStatusBar.tsx
import React from 'react';
import { ChevronLeftSquare, Mail, ThumbsUp, X } from 'lucide-react';


const SearchStatusBar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between text-[#004c4c] px-4 ">
            <div className="text-sm md:text-base font-medium flex justify-between gap-[120px]">
                {/* <div className=""> */}
                    <span>No one yet described successfully</span>
                    <span>Search date: Fri, Nov 20, 2024</span>
                {/* </div> */}
                
                
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base mt-2 md:mt-0">

                <button className="p-2 bg-[#cce5e5] rounded-md hover:bg-[#b3dcdc] transition-colors">
                    <ThumbsUp size={24} className="text-[#004c4c]" />
                </button>
                <button className="px-5 py-2 bg-[#004c4c] text-white rounded-md hover:bg-[#003333] transition-colors">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchStatusBar;
