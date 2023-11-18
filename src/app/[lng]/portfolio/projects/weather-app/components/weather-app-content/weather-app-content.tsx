"use client";
import { useTranslation } from "@/app/i18n/client";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { useEffect } from "react";

import { useLazyGetCurrentWeatherApiQuery } from "@/store/services/weather-app-api";

import PageLoader from "@/app/[lng]/components/page-loader/page-loader";
import WeatherHeader from "./components/weather-header/weather-header";
import WeatherDaily from "./components/weather-daily/weather-daily";
import WeekForecast from "./components/week-forecast/week-forecast";
import classes from "./weather-app-content.module.scss";

const WeatherAppContent = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language: language, ns: "weather-app" });
  const dispatch = useAppDispatch();
  const [currentWeatherTrigger, currentWeather] =
    useLazyGetCurrentWeatherApiQuery();

  console.log("currentWeather", currentWeather);

  const currentWeatherResponse = currentWeather.currentData?.response;

  const getCurrentPosition = async (): Promise<{
    latitude: number;
    longitude: number;
  }> => {
    return await new Promise((resolve) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          resolve({ latitude, longitude });
        });
      } else {
        resolve({ latitude: 54.68916, longitude: 25.2798 });
      }
    });
  };

  useEffect(() => {
    const getCurrentWeather = async () => {
      const geoLocations: { latitude: number; longitude: number } =
        await getCurrentPosition();

      currentWeatherTrigger({
        lat: geoLocations.latitude,
        lon: geoLocations.longitude,
      });
    };

    getCurrentWeather();
  }, [currentWeatherTrigger, t]);

  useEffect(() => {
    if (currentWeather.isError) {
      dispatch(
        showHideAlert({
          message: t("internalError"),
          severity: "error",
          showAlert: true,
        })
      );
    }
  }, [currentWeather.isError, dispatch, t]);

  if (
    currentWeather.status !== "fulfilled" &&
    currentWeather.status !== "rejected"
  ) {
    return <PageLoader />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.autoHeight}>
        <WeatherHeader
          language={language}
          maxTemperature={currentWeatherResponse?.main.temp_max || 0}
          minTemperature={currentWeatherResponse?.main.temp_min || 0}
          cityName={currentWeatherResponse?.name || ""}
        />
      </div>
      <div className={classes.fillHeight}>
        <WeatherDaily
          cityName={currentWeatherResponse?.name || ""}
          temperature={currentWeatherResponse?.main.temp || 0}
          weatherType={currentWeatherResponse?.weather[0].main || ""}
        />
      </div>
      <div className={classes.autoHeight}>
        <WeekForecast />
      </div>
    </div>
  );
};
export default WeatherAppContent;
