"use client";

import { useTranslation } from "@/app/i18n/client";
import classes from "./week-forecast.module.scss";
import reusableClasses from "@/styles/components/weather-reusable.module.scss";

interface IWeekForescast {
  language: string;
}

const WeekForecast = ({ language }: IWeekForescast) => {
  const { t } = useTranslation({ language: language, ns: "weather-app" });

  return (
    <div>
      <div className={classes.titleContainer}>
        <h2 className={reusableClasses.secondaryTitle}>{t("weekForecast")}</h2>
      </div>
    </div>
  );
};
export default WeekForecast;
