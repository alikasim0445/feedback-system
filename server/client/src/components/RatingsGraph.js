import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RatingsGraph = ({ workouts }) => {
  const getChartData = () => {
    const ratingsCount = {
      Bad: 0,
      Normal: 0,
      Good: 0,
      Great: 0,
      Excellent: 0,
    };

    workouts.forEach((workout) => {
      if (ratingsCount[workout.rate] !== undefined) {
        ratingsCount[workout.rate] += 1;
      }
    });

    const colors = [
      "red", // Bad
      "rgba(255, 100, 0)", // Normal
      "rgba(255, 200, 0)", // Good
      "rgba(75, 255, 100)", // Great
      "rgba(0, 150, 0)", // Excellent
    ];

    return {
      labels: Object.keys(ratingsCount),
      datasets: [
        {
          label: "Ratings Count",
          data: Object.values(ratingsCount),
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Ratings Graph",
      },
    },
  };

  return (
    <div className="w-3/6 mx-auto my-5 p-10" style={{ height: "400px" }}>
      <h2 className="text-center text-lg font-semibold mb-5">Ratings Graph</h2>
      <Bar data={getChartData()} options={options} />
    </div>
  );
};

export default RatingsGraph;
