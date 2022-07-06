import React, { useEffect, useRef } from "react";
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

export default function MixedChart() {
  const myChart = useRef<any>(null);
  const options = {
    legend: {
      display: true,
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    // responsive: true,
    // maintainAspectRatio: true,
    scales: {
      xAxes: {
        title: {
          display: true,
          color: "#212121",
          font: {
            family: "Roboto",
            size: 12,
            lineHeight: 1,
            letterSpacing: "0.03px",
          },
        },
      },
      yAxes: {
        display: true,
        min: 0,
        max: 1000,
        ticks: {
          beginAtZero: true,
          stepSize: 500,
        },
        title: {
          display: true,
          text: "Scanned In/ Out(pcs)",
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

  const dummyData = [{ key: "DATA 01" }];

  const data: any = {
    labels: [...dummyData].map((cd: any) => cd.key),

    datasets: [
      {
        type: "line" as const,
        label: "Line data",
        borderColor: "rgb(255, 0, 0,0)",
        borderWidth: 10,
        borderHeight: 5,
        fill: false,
        data: [560],
        backgroundColor: "rgb(53, 162, 235)",
        pointStyle: "line",
        pointRadius: 170,
        pointBorderColor: "rgb(53, 162, 235)",
        order: 1,
        pointHoverRadius: 170,
        hoverBorderWidth: 10,
        hoverBorderHeight: 5,
      },
      {
        type: "bar" as const,
        label: "My First Dataset",
        barThickness: 150,
        data: [200],
        backgroundColor: "rgb(226,187,114)",
        borderColor: "rgb(226,187,114)",
        borderWidth: 1,
      },
      {
        type: "bar" as const,
        label: "My Second Dataset",
        barThickness: 150,
        data: [400],
        backgroundColor: "rgba(151,206,165,1)",
        borderColor: "rgba(151,206,165,1)",
        borderWidth: 1,
      },
    ],
  };
  return <Chart height={120} type="bar" options={options} data={data} />;
}
