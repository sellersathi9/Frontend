import { ArrowDown, ArrowUp } from "lucide-react";
import {  CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

type SalesCardProps = {
  title: string;
  sales: string;
  label: string;
  value : number
};

function SalesCard({ title, sales, label , value }: SalesCardProps) {
  return (
    <div className="bg-white text-black border rounded-xl py-6  first:bg-gray-100">
      <CardContent className="flex flex-col gap-5 ">
        <h2 className="text-lg font-semibold">{title}</h2>
        <h3 className="text-3xl font-bold text-black">{sales}</h3>

        <div className="flex items-center gap-2">
          <Badge
            className={`rounded-md px-2 py-1 ${value<0 ? "bg-red-100" : "bg-green-100"} ${value<0 ? "text-red-700" : "text-green-700"}`}
            variant="outline"
          >
             {value<0 ? <ArrowDown className="w-4 h-4 mr-1" /> : <ArrowUp className="w-4 h-4 mr-1" />}
            {value}%
          </Badge>
          <span className="text-gray-500">{label}</span>
        </div>
      </CardContent>
    </div>
  );
}

export default SalesCard;
