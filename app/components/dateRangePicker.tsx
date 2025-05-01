import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";

function DateRangePicker() {
  return (
    <Popover>
      <PopoverTrigger  asChild>
        <Button variant={"outline"}>
          <CalendarIcon /> Date Range
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="end">
        <div className="flex flex-row items-start ">
          <div className="flex flex-col">
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              Today
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              Yesterday
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              This Week
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              Last 7 Day
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              Last 14 Day
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              Last 28 Day
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              This Month
            </Button>
            <Button variant={"ghost"} className=" flex justify-start">
              {" "}
              Last Month
            </Button>
          </div>

          <div className="mx-4 w-px bg-border self-stretch" />
          <Calendar mode="range" />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default DateRangePicker;
