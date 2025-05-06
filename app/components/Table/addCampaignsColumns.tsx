"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Switch } from "@/components/ui/switch"


export type addCampaign = {
  creationDate: string;
  name: string;
  totalSKU: number;
  acos: number;
  roas: number;
  totalSpend: number;
  recommendations: string;
  status: boolean;
};

export const AddcampaignsColumn: ColumnDef<addCampaign>[] = [
  {
    accessorKey: "name",
    header: "Campaign Name",
 
  },
  {
    accessorKey: "creationDate",
    header: "Creation Date",
  },
  {
    accessorKey: "totalSKU",
    header: "Total SKU",
 
  },
  {
    accessorKey: "acos",
    header: "ACOS",

  },
  {
    accessorKey: "roas",
    header: "ROAS",

  },
  {
    accessorKey: "totalSpend",
    header: "Total Spend",

  },
  {
    accessorKey: "recommendations",
    header: "Recommendations",

  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value: boolean = row.getValue("status");
      return (
        <Switch defaultChecked={value}/>
      );
    },
  },
];
