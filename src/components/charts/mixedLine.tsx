import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController
);

export default function MixedLineChart() {
  const options = {
    legend: {
      display: true,
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        backgroundColor: "rgb(30, 60, 80)",
        displayColors: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Output (pcs)",
          color: "#212121",
          font: {
            family: "Roboto",
            size: 12,
            lineHeight: 1,
            letterSpacing: "0.03px",
          },
        },
      },
    },
  };
  const dummyData = [
    { key: "Line 01" },
    { key: "Line 02" },
    { key: "Line 03" },
    { key: "Line 04" },
    { key: "Line 05" },
    { key: "Line 06" },
  ];

  const data = {
    labels: [...dummyData].map((cd: any) => cd.key),

    datasets: [
      // {
      //   type: "line" as const,
      //   label: "Scheduled",
      //   borderColor: "#9630D6",
      //   backgroundColor: "white",
      //   borderWidth: 2,
      //   fill: false,
      //   data: [560, 580, 400, 700, 300, 500],
      //   order: 2,
      //   barThickness: 140,
      // },
      {
        type: "bar" as const,
        label: "Ahead of Schedule",
        backgroundColor: "#E2BB72",
        data: [200, 100, 400, 100, 400, 100],
        borderColor: "white",
        order: 2,
        barThickness: 60,
      },
      {
        type: "bar" as const,
        label: "On Schedule",
        backgroundColor: "#97CEA5",
        data: [400, 300, 500, 500, 500, 300],
        borderColor: "white",
        order: 2,
        barThickness: 60,
      },
      {
        type: "bar" as const,
        label: "Behind Schedule",
        data: [700, 700, 900, 800, 900, 500],
        backgroundColor: "#E28F8F",
        borderColor: "white",
        order: 2,
        barThickness: 60,
      },
      {
        type: "line" as const,
        label: "WIP Capacity",
        borderColor: "rgb(255, 0, 0,0)",
        borderWidth: 10,
        borderHeight: 5,
        fill: false,
        data: [300, 400, 800, 700, 300, 400],
        backgroundColor: "rgb(53, 162, 235)",
        pointStyle: "line",
        pointRadius: 40,
        pointBorderColor: "rgb(53, 162, 235)",
        order: 1,
        pointHoverRadius: 40,
        hoverBorderWidth: 10,
        hoverBorderHeight: 5,
      },
    ],
  };
  return <Chart height={68} type="bar" options={options} data={data} />;
}
