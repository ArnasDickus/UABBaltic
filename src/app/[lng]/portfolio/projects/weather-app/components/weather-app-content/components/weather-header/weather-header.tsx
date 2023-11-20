"use client";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useTranslation } from "@/app/i18n/client";
import classes from "./weather-header.module.scss";
import reusableClasses from "@/styles/components/weather-reusable.module.scss";
import { roundToNoDecimals } from "@/app/utils/round-values";
import { useState } from "react";
import CitySearch from "../city-search/city-search";

interface IWeatherHeader {
  maxTemperature: number;
  minTemperature: number;
  cityName: string;
  language: string;
}

interface ISearchMenu {
  isOpen: boolean;
}

const WeatherHeader = ({
  minTemperature,
  maxTemperature,
  cityName,
  language,
}: IWeatherHeader) => {
  const { t } = useTranslation({ language: language, ns: "weather-app" });
  const [searchMenu, setSearchMenu] = useState<ISearchMenu>({
    isOpen: false,
  });

  const openSearchMenu = () => {
    setSearchMenu({
      isOpen: true,
    });
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.flexContainer}>
        {!searchMenu.isOpen ? (
          <CloudOutlinedIcon className={classes.svg} />
        ) : (
          <button
            className={classes.doneButton}
            onClick={() =>
              setSearchMenu({
                isOpen: false,
              })
            }>
            {t("done")}
          </button>
        )}

        <div className={classes.headerTextContainer}>
          <p className={reusableClasses.mainTitle}>
            {searchMenu.isOpen ? t("location") : t("weatherForecast")}
          </p>
          <span className={reusableClasses.subtitle}>{cityName}</span>
        </div>
        {!searchMenu.isOpen ? (
          <div onClick={openSearchMenu}>
            <SettingsOutlinedIcon className={classes.svg} />
          </div>
        ) : (
          <span className={classes.emptyIcon} />
        )}
      </div>
      {searchMenu.isOpen ? (
        <CitySearch language={language} />
      ) : (
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
      )}
    </div>
  );
};
export default WeatherHeader;
