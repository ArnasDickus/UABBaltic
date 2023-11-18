"use client";
import { useTranslation } from "@/app/i18n/client";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { useEffect } from "react";

import {
  useLazyGet5DaysWeatherApiQuery,
  useLazyGetCurrentWeatherApiQuery,
} from "@/store/services/weather-app-api";

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
  const [weather5DaysTrigger, weather5Days] = useLazyGet5DaysWeatherApiQuery();

  // const [weeklyWeatherTrigger, weeklyWeather] = useLazyGetWeatherApiQuery();

  // console.log("currentWeather", currentWeather);
  // console.log("weeklyWeather", weeklyWeather);
  const currentWeather5DaysResponse = weather5Days.currentData?.response;
  const currentWeatherResponse = currentWeather.currentData?.response;

  console.log("currentWeather5DaysResponse", currentWeather5DaysResponse);
  console.log("currentWeatherResponse", currentWeatherResponse);

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
        language,
      });

      weather5DaysTrigger({
        lat: geoLocations.latitude,
        lon: geoLocations.longitude,
        language,
      });
    };

    getCurrentWeather();
  }, [currentWeatherTrigger, language, t, weather5DaysTrigger]);

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
        <WeekForecast language={language} />
      </div>
    </div>
  );
};
export default WeatherAppContent;
