import React from "react";
import { Line } from "react-chartjs-2";
import AnalyticsCard from "../../../components/AnalyticsCard/AnalyticsCard";

function WeightChart({ labels, data }) {
  return (
    <AnalyticsCard title="Weight Over Time">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Weight (kg)",
              data,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
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
              text: "Weight Over Time",
            },
          },
        }}
      />
    </AnalyticsCard>
  );
}

export default WeightChart;
