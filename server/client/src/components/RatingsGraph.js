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
      x: {
        ticks: {
          color: "white", // X-axis labels color
          font: {
            weight: "bold", // Bold font for X-axis labels
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "white", // Y-axis labels color
          font: {
            weight: "bold", // Bold font for Y-axis labels
          },
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white", // Legend labels color
          font: {
            weight: "bold", // Bold font for legend labels
          },
        },
      },
      title: {
        display: true,
        color: "white", // Title color if you have a title
        font: {
          weight: "bold", // Bold font for title
        },
      },
    },
  };

  return (
    <div
      className="w-72 sm:w-80 md:w-90 lg:w-90 my-5 p-10"
      style={{ height: "400px" }}
    >
      <h2 className="text-center text-lg font-semibold mb-5 text-amber-400">
        Ratings Graph
      </h2>
      <Bar data={getChartData()} options={options} />
    </div>
  );
};

export default RatingsGraph;
