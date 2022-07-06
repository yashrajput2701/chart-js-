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
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export default function BarAndLineChart() {
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
      datalabels: {
        display: true,
        color: "white",
        anchor: "center",
        align: "center",
        whiteSpace: "pre",
        font: {
          size: "10px",
          weight: "bold",
        },
      },
    },

    responsive: true,
    scales: {
      x: {
        beginAtZero: false,
        stepSize: 2,
        fixedStepSize: 2,
        title: {
          display: true,
          text: "data on x axes",
          color: "#212121",
          font: {
            family: "Roboto",
            size: 12,
            lineHeight: 1,
            letterSpacing: "0.03px",
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "data on y axes",
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
    { key: "Line 07" },
  ];

  const data = {
    labels: [...dummyData].map((cd: any) => cd.key),

    datasets: [
      {
        type: "line" as const,
        label: "Scheduled",
        borderWidth: 2,
        fill: false,
        data: [560, 580, 200, 400, 80, 350, 100],
        backgroundColor: "white",
        borderColor: "#9630D6",
      },
      {
        type: "bar" as const,
        label: "Load on",
        backgroundColor: "#E2BB72",
        data: [520, 580, 400, 550, 200, 80, 580],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar" as const,
        label: "Output",
        backgroundColor: "#97CEA5",
        data: [560, 280, 490, 500, 200, 300, 450],
        borderColor: "white",
      },
    ],
  };

  return <Chart options={options} height={68} type="bar" data={data} />;
}
