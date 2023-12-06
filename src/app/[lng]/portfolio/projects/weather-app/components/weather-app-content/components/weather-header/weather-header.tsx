"use client";
import { useTranslation } from "@/app/i18n/client";
import classes from "./weather-header.module.scss";
import { roundToNoDecimals } from "@/app/utils/round-values";
import { useState } from "react";
import CitySearch from "../city-search/city-search";
import SettingsIcon from "@/styles/icons/settings-icon";
import CloudPlusIcon from "@/styles/icons/cloud-plus-icon";

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
          <SettingsIcon className={classes.svg} width={24} height={24} />
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
          <p className={classes.mainTitle}>
            {searchMenu.isOpen ? t("location") : t("weatherForecast")}
          </p>
          <span className={classes.subtitle}>{cityName}</span>
        </div>
        {!searchMenu.isOpen ? (
          <div onClick={openSearchMenu}>
            <CloudPlusIcon className={classes.svg} width={24} height={24} />
          </div>
        ) : (
          <span className={classes.emptyIcon} />
        )}
      </div>
      {searchMenu.isOpen ? (
        <CitySearch language={language} />
      ) : (
        <div className={classes.flexContainer}>
          <p className={classes.secondaryTitle}>{t("dayForecast")}</p>
          <div className={classes.highLowContainer}>
            <span className={classes.secondaryTitle}>
              {roundToNoDecimals(minTemperature)}
            </span>
            <span className={classes.subtitle}>
              {roundToNoDecimals(maxTemperature)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default WeatherHeader;
