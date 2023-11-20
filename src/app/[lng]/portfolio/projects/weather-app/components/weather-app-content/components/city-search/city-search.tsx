"use client";
import WeatherInput from "@/components/weather-input/weather-input";
import CityListJSON from "./city.list.json";
import { useTranslation } from "@/app/i18n/client";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { ICities } from "../../../interfaces";
import classes from "./city-search.module.scss";

const CitySearch = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language: language, ns: "weather-app" });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState<ICities[]>([]);

  const memoizedFilteredCities = useMemo(
    () => filteredCities,
    [filteredCities]
  );

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span className={classes.highlight} key={index}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  useEffect(() => {
    const maxResults = 20;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const cityListJSON: ICities[] = CityListJSON as ICities[];

    const filtered = cityListJSON
      .filter((city) => city.name.toLowerCase().includes(lowerCaseSearchTerm))
      .slice(0, maxResults);
    setFilteredCities(filtered);
  }, [searchTerm]);

  return (
    <div className={classes.citySearchContainer}>
      <div className={classes.input}>
        <WeatherInput
          placeholder={t("search")}
          inputProps={{
            value: searchTerm,
            onChange: (event: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value),
          }}
        />
      </div>
      <div className={classes.citiesContainer}>
        {memoizedFilteredCities.map((city) => (
          <li className={classes.list} key={city.id}>
            <p className={classes.title}>
              {highlightText(city.name, searchTerm)}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};
export default CitySearch;
