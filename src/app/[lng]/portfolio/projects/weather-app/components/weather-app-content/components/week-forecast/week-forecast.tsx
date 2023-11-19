"use client";

import { useTranslation } from "@/app/i18n/client";
import classes from "./week-forecast.module.scss";
import reusableClasses from "@/styles/components/weather-reusable.module.scss";
import { I5DaysWeatherApiResponse } from "../../../interfaces";
import dayjs from "dayjs";
import { roundToNoDecimals } from "@/app/utils/round-values";
import Image from "next/image";
import { getWeatherImage } from "@/app/utils/get-weather-image";

interface IWeekForescast {
  language: string;
  weatherData: I5DaysWeatherApiResponse["response"]["list"];
}

const WeekForecast = ({ language, weatherData }: IWeekForescast) => {
  const { t } = useTranslation({ language: language, ns: "weather-app" });
  return (
    <>
      <div className={classes.titleContainer}>
        <h2 className={reusableClasses.secondaryTitle}>{t("weekForecast")}</h2>
      </div>
      <div className={classes.listContainer}>
        {weatherData?.map((weather) => {
          return (
            <div className={classes.weatherItem} key={weather.dt}>
              <p className={reusableClasses.secondaryTitle}>
                {dayjs(weather.dt_txt).format("ddd").toUpperCase()}
              </p>
              <Image
                src={getWeatherImage(weather.weather[0].icon)}
                width={50}
                height={50}
                alt={weather.weather[0].icon}
              />
              <div className={classes.temperatureContainer}>
                <p className={reusableClasses.secondaryTitle}>
                  {roundToNoDecimals(weather.main.temp_min)}
                </p>
                <p className={reusableClasses.subtitle}>
                  {roundToNoDecimals(weather.main.temp_max)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default WeekForecast;
