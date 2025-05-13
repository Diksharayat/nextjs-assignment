import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { X } from "lucide-react";

interface Order {
  id: number;
  user: {
    name: string;
  };
  projectName: string;
  team: string;
  budget: string;
  reason: string; // Reason field to be displayed in the existing column
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      name: "23",
    },
    projectName: "3455 : Mr Kevin S....Oubulm (Goulbum)",
    team: "38 Age, 28-29",
    budget: "3.9K",
    reason: "",
  },
  {
    id: 2,
    user: {
      name: "Shifts, Change",
    },
    projectName: "2365 : Mr John Key....ne Cove (Ney Cove) Age: 23 to 50 Age: 23 to 50 ",
    team: "29 Age, 31-40, Work, Hours",
    budget: "24.9K",
    reason: "",
  },
  {
    id: 3,
    user: {
      name: "23",
    },
    projectName: "3455 : Mr Kevin S....Oubulm (Goulbum)",
    team: "29 Age, 31-40",
    budget: "12.7K",
    reason: "",
  },
  {
    id: 4,
    user: {
      name: "23",
    },
    projectName: "2365 : Mr John Key....ne Cove (Ney Cove)",
    team: "38 Age, 28-29",
    budget: "2.8K",
    reason: "",
  },
];

export default function GuestTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b bg-gray-100 border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-black text-start text-sm dark:text-gray-400"
                >
                  Incompatible Fields
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-black text-center text-theme-sm dark:text-gray-400"
                >
                  Guest name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-black text-start text-theme-sm dark:text-gray-400"
                >
                  K..
                </TableCell>
                <TableCell
                  isHeader
                  className="px-17 py-3 font-medium text-black text-start text-theme-sm dark:text-gray-400"
                >
                  Reasons {/* This is where the existing Reasons column is used */}
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow
                  key={order.id}
                  className="hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <TableCell className=" py-1 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full p-2">
                      <X className="text-pink-400 text-2xl" style={{ strokeWidth: 3 }} />

                      </div>
                      <div>
                        <span className="block font-medium text-gray-500 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    {order.projectName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.team}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.reason} {/* Displaying the existing reason */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
