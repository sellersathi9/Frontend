"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type inventory = {
  image: string;
  name: string;
  stock: number;
  sales: number;
  revenue: number;
  status: string;
};

export const TopSellingcolumns: ColumnDef<inventory>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image alt="image" src={row.getValue("image")} width={60} height={60} />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "sales",
    header: "Sales",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value: string = row.getValue("status");
      return (
        <div
          className={`text-center text-xs font-normal inline-block w-auto px-2 py-0.5  rounded-sm border ${
            value === "In Stock"
              ? "bg-green-50 text-green-800 border-green-500"
              : "bg-red-50 text-red-800 border-red-500"
          }`}
        >
          {value}
        </div>
      );
    },
  },
];
