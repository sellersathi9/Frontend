"use client";

import DateRangePicker from "@/app/components/dateRangePicker";
import SalesCard from "@/app/components/salesCard";
import TabLayout from "@/app/components/TabLayout";
import { Button } from "@/app/components/ui/button";
import { ArrowDown, ChevronsRight, FolderDown } from "lucide-react";
import {  useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { DataTable } from "@/app/components/Table/dataTable";
import { TopSellingcolumns } from "@/app/components/Table/TopSellingColumns";
import salesData from "../Mock data/salesData";
import topSellingdata from "../Mock data/topSellingData";
import ReturnRateChart from "@/app/components/charts/returnRate";

ChartJS.register(
  BarElement,
  CategoryScale, // 👈 Fixes the "category" scale error
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // Hides legend
  },
  scales: {
    x: {
      grid: {
        display: false, // ❌ removes vertical grid lines
      },
      ticks: {
        display: true, // optional: hides x-axis labels
      },
      border: {
        display: false, // 🧨 This hides the axis line (Chart.js v4+)
      },
    },
    y: {
      grid: {
        display: false, // ❌ removes horizontal grid lines
      },
      ticks: {
        display: false, // optional: hides y-axis labels
      },
      border: {
        display: false, // 🧨 This hides the axis line (Chart.js v4+)
      },
    },
  },
};

function Dashboard() {
  type Timeframe = "daily" | "weekly" | "monthly";

const [timeframe, setTimeframe] = useState<Timeframe>("daily");


  return (
    <>
      <TabLayout
        title={"Dashboard"}
        buttons={[
          <DateRangePicker key={1} />,
          <Button key={2}>
            <ArrowDown /> Download
          </Button>,
        ]}
      >
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4  gap-4">
            <SalesCard
              title="Today's Sale"
              label="Up from Yesterday"
              value={2}
              sales="$1,231"
            />
            <SalesCard
              title="Last 7 days"
              label="Down from last week"
              value={-12}
              sales="$11,531"
            />
            <SalesCard
              title="Last 14 days "
              label="Up from prev month"
              value={17}
              sales="$22,231"
            />
            <SalesCard
              title="This month"
              label="Down from prev month"
              value={-30}
              sales="$56,331"
            />
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4">
            <div className="rounded-xl border p-6 flex flex-col gap-10">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Sales Performance</h2>
                <div className="flex gap-2">
                  <Button
                    variant={timeframe === "daily" ? "default" : "outline"}
                    onClick={() => setTimeframe("daily")}
                  >
                    Daily
                  </Button>
                  <Button
                    variant={timeframe === "weekly" ? "default" : "outline"}
                    onClick={() => setTimeframe("weekly")}
                  >
                    Weekly
                  </Button>
                  <Button
                    variant={timeframe === "monthly" ? "default" : "outline"}
                    onClick={() => setTimeframe("monthly")}
                  >
                    Monthly
                  </Button>
                </div>
              </div>

              <div className="h-[300px] w-full flex justify-center ">
                <div className="flex-grow w-full relative ">
                  <Bar
                    key={`${timeframe}-`}
                    data={salesData[timeframe]}
                    options={timeframe === "daily" ? ticksOff() : ticksOn()}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-6 flex flex-col gap-10">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Return Rate</h2>
                <div className="flex gap-2">
                  <Button variant={"outline"}>
                    <FolderDown />
                    Export
                  </Button>
                </div>
              </div>
              <div className="w-full h-[300px] flex justify-center">
                <div className="flex-grow w-full relative ">
                  <ReturnRateChart />
                </div>
              </div>
            </div>

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden p-6 border flex flex-col gap-10">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Best Selling Products</h2>
                <Button variant={"outline"}>
                  View All <ChevronsRight />
                </Button>
              </div>
              <DataTable columns={TopSellingcolumns} data={topSellingdata} />
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
              <div className="rounded-xl border h-60"></div>
              <div className="rounded-xl border h-60"></div>
            </div>

          </div>

          <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            <div className="border h-60 rounded-xl"></div>
          </div>
        </div>
      </TabLayout>
    </>
  );
}

export default Dashboard;

const ticksOff = () => {
  options.scales.x.ticks.display = false;
  return options;
};
const ticksOn = () => {
  options.scales.x.ticks.display = true;
  return options;
};
