"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement, Tooltip);

export default function ReturnRateChart() {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Returning Rate",
        data: [5, 9, 6, 14, 12, 16, 7, 13, 11, 14, 10, 18],
        borderColor: "#f97316", // Tailwind orange-500
        borderWidth: 2,
        tension: 0, // heartbeat style
        pointRadius: 0,
pointHitRadius: 10,
        fill: false,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#9ca3af", // gray-400
          font: { size: 12 }
        }
      },
      y: {
        display: false,
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `Return Rate: ${ctx.parsed.y}`,
        },
      },
    }
  };

  return (
      <Line data={data} options={options} />
  );
}
