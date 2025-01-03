import React from "react";
import { Line } from "react-chartjs-2";
import AnalyticsCard from "../../../components/AnalyticsCard/AnalyticsCard";
/*import styles from './MUACChart.module.css';*/

function MUACChart({ labels, data }) {
  return (
    <AnalyticsCard title="MUAC Over Time">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "MUAC (cm)",
              data,
              borderColor: "rgb(153, 102, 255)",
              backgroundColor: "rgba(153, 102, 255, 0.2)",
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
              text: "MUAC Over Time",
            },
          },
        }}
      />
    </AnalyticsCard>
  );
}

export default MUACChart;
