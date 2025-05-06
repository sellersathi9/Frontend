"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Check, X } from "lucide-react";
import Image from "next/image";

export type catalogHealth = {
  image: string;
  name: string;
  bulletPoints: boolean;
  images: boolean;
  description: boolean;
  aPlus: boolean;
  another: boolean;
  status: string;
};

export const CatalogHealthCOlumns: ColumnDef<catalogHealth>[] = [
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
    accessorKey: "bulletPoints",
    header: "5 Bullets",
    cell:({row})=>{
        if(row.getValue("bulletPoints")){
            return <Check color="green" />
        }else{
            return <X color="red"/>
        }
    }
  },
  {
    accessorKey: "images",
    header: "5 Images",
    cell:({row})=>{
        if(row.getValue("images")){
            return <Check color="green" />
        }else{
            return <X color="red"/>
        }
    }
  },
  {
    accessorKey: "aPlus",
    header: "EBC content",
    cell:({row})=>{
        if(row.getValue("aPlus")){
            return <Check color="green"/>
        }else{
            return <X color="red"/>
        }
    }
  },
  {
    accessorKey: "description",
    header: "Description",
    cell:({row})=>{
        if(row.getValue("description")){
            return <Check color="green"/>
        }else{
            return <X color="red"/>
        }
    }
  },
  {
    accessorKey: "another",
    header: "Another",
    cell:({row})=>{
        if(row.getValue("another")){
            return <Check color="green"/>
        }else{
            return <X color="red"/>
        }
    }
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
