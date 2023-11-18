"use client";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

import classes from "./weather-daily.module.scss";
import reusableClasses from "@/styles/components/weather-reusable.module.scss";
import { roundToNoDecimals } from "@/app/utils/round-values";

interface IWeatherDaily {
  cityName: string;
  temperature: number;
  weatherType: string;
}

const WeatherDaily = ({
  cityName,
  temperature,
  weatherType,
}: IWeatherDaily) => {
  return (
    <div className={classes.container}>
      <div>
        <h2 className={`${reusableClasses.secondaryTitle} ${classes.title}`}>
          {roundToNoDecimals(temperature)} &deg;
        </h2>
        <p className={`${reusableClasses.secondaryTitle} ${classes.subtitle}`}>
          {cityName}
        </p>
        <p
          className={`${reusableClasses.secondaryTitle} ${classes.weatherType}`}>
          {weatherType} <CloudOutlinedIcon className={classes.svg} />
        </p>
      </div>
    </div>
  );
};
export default WeatherDaily;
