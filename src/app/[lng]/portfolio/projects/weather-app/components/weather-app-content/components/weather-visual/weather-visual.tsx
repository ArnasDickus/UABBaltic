"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

interface IWeatherVisual {
  minTemperatures: number[];
  maxTemperatures: number[];
}

const WeatherVisual = ({
  minTemperatures,
  maxTemperatures,
}: IWeatherVisual) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement);

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        alignToPixels: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        alignToPixels: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },

    datasets: {
      bar: {
        categoryPercentage: 1,
        barPercentage: 1,
        barThickness: "flex",

        borderWidth: {
          top: 2,
          bottom: 2,
        },
      },
    },
  };

  const data: ChartData<"bar"> = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        data: minTemperatures,
        backgroundColor: "#ab8149",
        borderColor: "#F1961C",
      },
      {
        data: maxTemperatures,
        backgroundColor: "#667899",
        borderColor: "#6B87BC",
      },
    ],
  };

  return <Bar data={data} height={50} options={options} />;
};
export default WeatherVisual;
