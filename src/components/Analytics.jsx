import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Analytics = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Hours Spent Learning",
        data: [12, 19, 8, 15],
        backgroundColor: "#4A90E2",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        User Engagement
      </h2>
      <Bar data={data} options={options} />
    </section>
  );
};

export default Analytics;
