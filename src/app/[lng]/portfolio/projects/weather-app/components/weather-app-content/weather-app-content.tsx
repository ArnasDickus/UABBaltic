"use client";
import { NGetWeatherData } from "@/app/api/get-weather-data/route";
import { useTranslation } from "@/app/i18n/client";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { useEffect } from "react";

const WeatherAppContent = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language: language, ns: "weather-app" });
  const dispatch = useAppDispatch();

  const getCurrentPosition = async (): Promise<{
    latitude: number;
    longitude: number;
  }> => {
    return await new Promise((resolve, reject) => {
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

      const currentWeatherResponse = await fetch(
        apiRoutes["get-weather-data"],
        {
          method: "POST",
          body: JSON.stringify({
            lat: geoLocations.latitude,
            lon: geoLocations.longitude,
          }),
        }
      );

      if (currentWeatherResponse.status !== StatusCodes.okStatus) {
        dispatch(
          showHideAlert({
            message: t("internalError"),
            severity: "error",
            showAlert: true,
          })
        );
        return;
      }
      const currentWeather: NGetWeatherData.IResponse =
        await currentWeatherResponse.json();
    };

    getCurrentWeather();
  }, [dispatch, t]);
  return (
    <div>
      <p>WeatherAppContent</p>
    </div>
  );
};
export default WeatherAppContent;
