import React from "react";
import { DoughnutChart } from "../components/charts/doughnutChart";
import MixedChart from "../components/charts/mixedChart";
import BarAndLineChart from "../components/charts/barAndLine";
import BarChart from "../components/charts/barChart";
import MixedLineChart from "../components/charts/mixedLine";

function LandingPage() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Chart Js and Graphs</h1>
      <BarChart />
      <BarAndLineChart />
      <MixedChart />
      <DoughnutChart />
      <MixedLineChart />
    </>
  );
}

export default LandingPage;
