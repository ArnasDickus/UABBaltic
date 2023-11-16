import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISwapiFilmsApi, ISwapiPeopleApi } from "../types/swapi-type";
import { RootState } from "../store";

export interface IMoviesSwapiData extends TFilmsSwapiData {
  actors: TPeopleSwapiData[];
}

export type TPeopleSwapiData = Pick<
  ISwapiPeopleApi,
  "name" | "gender" | "birth_year" | "mass"
>;

export type TFilmsSwapiData = Pick<
  ISwapiFilmsApi["results"][0],
  "episode_id" | "title" | "release_date" | "characters"
> & { showActors: boolean };

export interface ISwapiFilmsSlice {
  movies: IMoviesSwapiData[];
  episodeId: number | null;
}

const initialState: ISwapiFilmsSlice = {
  movies: [],
  episodeId: null,
};

export const swapiFilmsSlice = createSlice({
  name: "FilmsSlice",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<ISwapiFilmsSlice["movies"]>) => {
      state.movies = action.payload;
    },
    addEpisodeId: (state, action: PayloadAction<number>) => {
      state.episodeId = action.payload;
    },
    addActors: (
      state,
      action: PayloadAction<ISwapiFilmsSlice["movies"][0]["actors"]>
    ) => {
      const findMovie = state.movies.find(
        (movie) => movie.episode_id === state.episodeId
      );

      if (findMovie) {
        findMovie.showActors = true;
        findMovie.actors = action.payload;
        state.episodeId = null;
      }
    },
    showHideActors: (
      state,
      action: PayloadAction<{ episodeId: number; showActors: boolean }>
    ) => {
      const findMovie = state.movies.find(
        (movie) => movie.episode_id === action.payload.episodeId
      );

      if (findMovie) {
        findMovie.showActors = action.payload.showActors;
      }
    },
  },
});

export const { addMovies, addEpisodeId, addActors, showHideActors } =
  swapiFilmsSlice.actions;

export const selectSwapiFilms = (state: RootState) => state.swapiFilms;

export default swapiFilmsSlice.reducer;
