"use client";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useTranslation } from "@/app/i18n/client";
import classes from "./weather-header.module.scss";
import reusableClasses from "@/styles/components/weather-reusable.module.scss";
import { roundToNoDecimals } from "@/app/utils/round-values";

interface IWeatherHeader {
  maxTemperature: number;
  minTemperature: number;
  cityName: string;
  language: string;
}

const WeatherHeader = ({
  minTemperature,
  maxTemperature,
  cityName,
  language,
}: IWeatherHeader) => {
  const { t } = useTranslation({ language: language, ns: "weather-app" });

  return (
    <div className={classes.headerContainer}>
      <div className={classes.flexContainer}>
        <CloudOutlinedIcon className={classes.svg} />
        <div className={classes.headerTextContainer}>
          <p className={reusableClasses.mainTitle}>{t("weatherForecast")}</p>

          <span className={reusableClasses.subtitle}>{cityName}</span>
        </div>
        <SettingsOutlinedIcon className={classes.svg} />
      </div>
      <div className={classes.flexContainer}>
        <p className={reusableClasses.secondaryTitle}>{t("dayForecast")}</p>
        <div className={classes.highLowContainer}>
          <span className={reusableClasses.secondaryTitle}>
            {roundToNoDecimals(minTemperature)}
          </span>
          <span className={reusableClasses.subtitle}>
            {roundToNoDecimals(maxTemperature)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default WeatherHeader;
