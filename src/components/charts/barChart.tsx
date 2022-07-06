import React from 'react';
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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

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

export default function BarChart() {

  const options = {
    legend: {
      display: true,
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Lines',
          color: '#212121',
          font: {
            family: 'Roboto',
            size: 12,
            lineHeight: 1,
            letterSpacing: '0.03px',
          },
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: 2500,
        title: {
          display: true,
          text: 'Scanned In/Out (pcs)',
          color: '#212121',
          font: {
            family: 'Roboto',
            size: 12,
            lineHeight: 1,
            letterSpacing: '0.03px',
          },
        },
      },
    },
  };

  const dummyData = [
    { key: 'Line 01' },
    { key: 'Line 02' },
    { key: 'Line 03' },
    { key: 'Line 04' },
    { key: 'Line 05' },
    { key: 'Line 06' },
    { key: 'Line 07' },
    { key: 'Line 08' },
    { key: 'Line 09' },
  ];

  const data = {
    labels: [...dummyData].map((cd: any) => cd.key),
    datasets: [
      {
        type: 'bar' as const,
        label: 'My First Dataset',
        barThickness: 25,
        data: [1400, 1590, 1800, 1881, 1560, 1550, 3400, 2000, 2500],
        backgroundColor: [
          'rgb(226,187,114)',
        ],
        borderColor: [
          'rgb(226,187,114)',
        ],
        borderWidth: 1,
      },
      {
        type: 'bar' as const,
        label: 'My Second Dataset',
        barThickness: 25,
        data: [700, 390, 800, 881, 560, 550, 700, 1000, 1500],
        backgroundColor: [
          'rgba(151,206,165,1)',
        ],
        borderColor: [
          'rgba(151,206,165,1)',
        ],
        borderWidth: 1,
      },
      
    ],
  };
  return <Chart height={68} type="bar" options={options} data={data} />;
}
