"use client";
import { Fragment, useEffect, useState } from "react";

import Loader from "@/styles/icons/loader";
import Table from "@/components/table/table";
import {
  useLazyGetSwapiFilmCharactersApiQuery,
  useLazyGetSwapiFilmsApiQuery,
} from "@/components/store/services/swapi-api";
import { useTranslation } from "@/app/i18n/client";

import Card from "../../../components/card/card";
import { useAppDispatch, useAppSelector } from "@/components/store/redux-hooks";
import {
  IMoviesSwapiData,
  TPeopleSwapiData,
  addActors,
  addEpisodeId,
  addMovies,
  selectSwapiFilms,
  showHideActors,
} from "@/components/store/slices/swapi-films-slice";

import { sectionHeader } from "@/styles/reusable-styles";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";

const FilmContent = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "swapi" });
  const dispatch = useAppDispatch();
  const swapiData = useAppSelector(selectSwapiFilms);
  const [filmsTrigger, filmsData] = useLazyGetSwapiFilmsApiQuery();
  const [actorsTrigger, peopleData] = useLazyGetSwapiFilmCharactersApiQuery();

  const [alert, setAlert] = useState<Omit<ISnackAlert, "onClose">>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const fetchMovieActors = async (episodeId: number) => {
    if (!swapiData.movies.length) {
      const findMovie = filmsData?.data?.results.find(
        (film) => film.episode_id === episodeId
      );
      if (findMovie?.characters) {
        dispatch(addEpisodeId(episodeId));
        await actorsTrigger(findMovie.characters);
      }
    } else {
      const findMovie = swapiData.movies.find(
        (film) => film.episode_id === episodeId
      );
      if (findMovie?.actors) {
        dispatch(addEpisodeId(episodeId));
        await actorsTrigger(findMovie.characters);
      }
    }
  };

  const handleCardButton = async (
    episodeId: number,
    showActors: boolean,
    actorsLength: number
  ) => {
    if (!actorsLength) {
      fetchMovieActors(episodeId);
    } else {
      dispatch(
        showHideActors({
          episodeId,
          showActors: !showActors,
        })
      );
    }
  };

  const displayButtonText = (actorLength: number, showActors: boolean) => {
    if (!actorLength) {
      return t("fetchActors");
    }
    if (showActors) {
      return t("hideActors");
    }
    return t("showActors");
  };

  useEffect(() => {
    const getMovieCharacters = () => {
      if (peopleData.data) {
        const errorResults = peopleData.data.filter((item) =>
          item.hasOwnProperty("error")
        );
        setAlert({
          message: errorResults.length
            ? t("fetchedData", {
                data: peopleData.data.length - errorResults.length,
                amount: peopleData.data.length,
              })
            : t("fetchedAll", {
                data: peopleData.data.length,
              }),
          showAlert: true,
          severity: errorResults.length ? "error" : "success",
        });

        const modifiedData: TPeopleSwapiData[] = peopleData.data.map(
          (person) => {
            return {
              name: person?.data?.name,
              gender: person?.data?.gender,
              birth_year: person?.data?.birth_year,
              mass: person?.data?.mass,
            };
          }
        );
        dispatch(addActors(modifiedData));
      }
    };

    getMovieCharacters();
  }, [dispatch, peopleData.data, t]);

  useEffect(() => {
    const getAllMovies = () => {
      if (filmsData?.currentData?.results.length) {
        const reduxData: IMoviesSwapiData[] = [];
        filmsData.currentData.results.map((film) => {
          reduxData.unshift({
            title: film.title,
            episode_id: film.episode_id,
            release_date: film.release_date,
            showActors: false,
            failedActors: [],
            characters: film.characters,
            actors: [],
          });
        });
        dispatch(addMovies(reduxData));
      }
    };

    getAllMovies();
  }, [dispatch, filmsData]);

  useEffect(() => {
    if (!swapiData.movies.length) {
      filmsTrigger();
    }
  }, [filmsTrigger, swapiData.movies]);

  return (
    <>
      <SnackAlert
        {...alert}
        onClose={() => {
          setAlert((prevState) => ({
            ...prevState,
            showAlert: false,
          }));
        }}
      />

      <div className="w-full">
        <div className="flex p-4 gap-3 flex-wrap justify-center">
          {swapiData.movies.length ? (
            swapiData.movies.map((film) => (
              <Fragment key={film.episode_id}>
                <Card
                  buttonText={displayButtonText(
                    film.actors.length,
                    film.showActors
                  )}
                  description={film.release_date}
                  heroText={`${t("episodeId")}: ${film.episode_id}`}
                  onClick={() => {
                    handleCardButton(
                      film.episode_id,
                      film.showActors,
                      film.actors.length
                    );
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
          {swapiData.movies
            .filter((movie) => movie.showActors)
            .map((movies) => {
              return (
                <div key={movies.episode_id}>
                  <h2 className={sectionHeader}>
                    {movies.actors.length ? movies.title : ""}
                  </h2>
                  <Table
                    data={movies.actors}
                    headers={
                      movies.actors.length ? Object.keys(movies.actors[0]) : []
                    }
                    loading={
                      movies.episode_id === swapiData.episodeId &&
                      peopleData.status === "pending"
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default FilmContent;