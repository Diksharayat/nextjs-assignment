import React from "react";
import { Edit2 } from "@deemlol/next-icons";

interface InfoCardProps {
  title: string;
  content: string;
  showEdit?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, showEdit = true }) => {
  return (
    <div className="bg-white rounded-xl text-sm text-gray-700">
      {/* Header */}
      <div className="flex justify-between items-center py-2 px-4">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        {showEdit && (
          <div className="bg-gray-200 p-2 rounded-md">
            <Edit2 size={15} />
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* Content */}
      <div>
        <p className="text-gray-500 p-4 mb-8">{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
