import React from "react";
import { Line } from "react-chartjs-2";
import AnalyticsCard from "../../../components/AnalyticsCard/AnalyticsCard";

function WHZChart({ labels, data }) {
  return (
    <AnalyticsCard title="WHZ Scores Over Time">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "WHZ Score",
              data,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "WHZ Scores Over Time",
            },
          },
        }}
      />
    </AnalyticsCard>
  );
}

export default WHZChart;
