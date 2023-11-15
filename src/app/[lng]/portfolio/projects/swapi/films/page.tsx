"use client";
import { Fragment, useEffect, useState } from "react";
import Card from "../components/card/card";

import Loader from "@/styles/icons/loader";
import Table from "@/components/table/table";
import {
  useGetSwapiFilmsApiQuery,
  useLazyGetSwapiFilmCharactersApiQuery,
} from "@/components/store/services/swapi-api";
import { SwapiPeopleApi } from "@/components/store/types/swapi-type";

type TPeopleSwapiData = Pick<
  SwapiPeopleApi,
  "name" | "gender" | "birth_year" | "mass"
>;

const PageFilms = () => {
  const [tableData, setTableData] = useState<TPeopleSwapiData[]>();
  const [headers, setHeaders] = useState<string[]>();
  const { data: filmsData } = useGetSwapiFilmsApiQuery();
  const [trigger, peopleData] = useLazyGetSwapiFilmCharactersApiQuery();
  const getPeopleData = (episodeId: number) => {
    const findMovie = filmsData?.results.find(
      (film) => film.episode_id === episodeId
    );

    if (findMovie?.characters) {
      trigger(findMovie.characters);
    }
  };

  useEffect(() => {
    if (peopleData.data) {
      const modifiedData: TPeopleSwapiData[] = peopleData.data.map((person) => {
        return {
          name: person?.data?.name,
          gender: person?.data?.gender,
          birth_year: person?.data?.birth_year,
          mass: person?.data?.mass,
        };
      });
      setTableData(modifiedData);
      setHeaders(Object.keys(modifiedData[0]));
    }
  }, [peopleData.data]);

  return (
    <div className="w-full">
      <div className="flex p-4 gap-3 flex-wrap justify-center">
        {filmsData ? (
          filmsData.results.map((film) => (
            <Fragment key={film.episode_id}>
              <Card
                buttonText="Show people"
                description={film.release_date}
                heroText={`Episode id: ${film.episode_id}`}
                onClick={() => {
                  getPeopleData(film.episode_id);
                }}
                title={film.title}
              />
            </Fragment>
          ))
        ) : (
          <Loader className="animate-spin" />
        )}
      </div>
      <div className="shadow-sm overflow-hidden my-8">
        {peopleData.status === "pending" && (
          <div className="flex justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
        {tableData && headers && (
          <Table
            data={tableData}
            headers={headers}
            loading={peopleData.status === "pending"}
          />
        )}
      </div>
    </div>
  );
};
export default PageFilms;
