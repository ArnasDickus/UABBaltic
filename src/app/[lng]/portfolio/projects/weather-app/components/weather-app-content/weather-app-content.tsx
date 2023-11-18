"use client";
import { useTranslation } from "@/app/i18n/client";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { useEffect } from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import classes from "./weather-app-content.module.scss";
import { useLazyGetCurrentWeatherApiQuery } from "@/store/services/weather-app-api";
import { convertKelvinToCelsius } from "@/app/utils/temperature-converter";
import PageLoader from "@/app/[lng]/components/page-loader/page-loader";

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
    <div>
      <div className={classes.headerContainer}>
        <div className={classes.flexContainer}>
          <CloudOutlinedIcon className={classes.svg} />
          <div className={classes.headerTextContainer}>
            <p className={classes.mainTitle}>{t("weatherForecast")}</p>

            <span className={classes.subtitle}>Utrecht</span>
          </div>
          <SettingsOutlinedIcon className={classes.svg} />
        </div>
        <div className={classes.flexContainer}>
          <p className={classes.secondaryTitle}>{t("dayForecast")}</p>
          <div className={classes.highLowContainer}>
            <span className={classes.secondaryTitle}>
              {convertKelvinToCelsius(
                currentWeatherResponse?.main.temp_max || 0
              )}
            </span>
            <span className={classes.subtitle}>
              {convertKelvinToCelsius(
                currentWeatherResponse?.main.temp_min || 0
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherAppContent;
