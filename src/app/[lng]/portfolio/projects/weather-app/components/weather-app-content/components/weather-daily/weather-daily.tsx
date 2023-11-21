"use client";
import classes from "./weather-daily.module.scss";
import { roundToNoDecimals } from "@/app/utils/round-values";
import { IWeather } from "../../../interfaces";
import Image from "next/image";
import { getWeatherImage } from "@/app/utils/get-weather-image";
import { capitalizeFirstLetter } from "@/app/utils/text-manipulation";
import { useTranslation } from "@/app/i18n/client";

interface IWeatherDaily {
  cityName: string;
  temperature: number;
  weather: IWeather[];
  language: string;
}

const WeatherDaily = ({
  cityName,
  temperature,
  weather,
  language,
}: IWeatherDaily) => {
  const { t } = useTranslation({ language, ns: "weather-app" });

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h2 className={classes.title}>
          {roundToNoDecimals(temperature)} &deg;
        </h2>
        <p className={classes.subtitle}>{cityName}</p>
        <div className={classes.weatherDesriptionContainer}>
          <p className={classes.weatherType}>
            {capitalizeFirstLetter(weather?.[0]?.description || "")}
          </p>
          <Image
            alt={weather[0]?.main || t("weather")}
            width={30}
            height={30}
            src={getWeatherImage(weather[0]?.icon)}
          />
        </div>
      </div>
    </div>
  );
};
export default WeatherDaily;
