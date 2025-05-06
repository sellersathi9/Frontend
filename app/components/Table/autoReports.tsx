"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";


export type autoReports = {
  name: string;
  action : boolean
};

export const AutoReportsColumn: ColumnDef<autoReports>[] = [
  {
    accessorKey: "name",
    header: "Name",
 
  },

  
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      // const value: boolean = row.getValue("action");
      return (
        <Button size={"sm"} variant={"outline"}> <ArrowDown/> Download</Button>
      );
    },
  },
];
