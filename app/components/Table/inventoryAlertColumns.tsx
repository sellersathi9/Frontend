"use client";

import { ColumnDef } from "@tanstack/react-table";

export type inventoryAlert = {
  level: "Low" | "Medium" | "High";
  name: string;
  stock: number;
};

export const InventoryAlertColumns: ColumnDef<inventoryAlert>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "level",
    header: "Level",
    cell: ({ row }) => {
        const value: string = row.getValue("level");
        return (
          <div
            className={`text-center text-xs font-normal inline-block w-auto px-2 py-0.5  rounded-sm border ${
              value === "Low"
                ? "bg-green-50 text-green-800 border-green-500" : value === "Medium" ? "bg-yellow-50 text-yellow-800 border-yellow-500"
                : "bg-red-50 text-red-800 border-red-500"
            }`}
          >
            {value}
          </div>
        );
      }
  },
];
