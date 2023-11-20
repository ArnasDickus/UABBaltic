"use client";
import classes from "./weather-daily.module.scss";
import reusableClasses from "@/styles/components/weather-reusable.module.scss";
import { roundToNoDecimals } from "@/app/utils/round-values";
import { IWeather } from "../../../interfaces";
import Image from "next/image";
import { getWeatherImage } from "@/app/utils/get-weather-image";
import { capitalizeFirstLetter } from "@/app/utils/text-manipulation";

interface IWeatherDaily {
  cityName: string;
  temperature: number;
  weather: IWeather[];
}

const WeatherDaily = ({ cityName, temperature, weather }: IWeatherDaily) => {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={`${reusableClasses.secondaryTitle} ${classes.title}`}>
          {roundToNoDecimals(temperature)} &deg;
        </h2>
        <p className={`${reusableClasses.secondaryTitle} ${classes.subtitle}`}>
          {cityName}
        </p>
        <div className={classes.weatherDesriptionContainer}>
          <p
            className={`${reusableClasses.secondaryTitle} ${classes.weatherType}`}>
            {capitalizeFirstLetter(weather?.[0]?.description || "")}
          </p>
          <Image
            alt={weather[0].main}
            width={30}
            height={30}
            src={getWeatherImage(weather[0].icon)}
          />
        </div>
      </div>
    </div>
  );
};
export default WeatherDaily;
