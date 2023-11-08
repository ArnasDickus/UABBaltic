import {
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { SwapiFilmsApi, SwapiPeopleApi } from "../types/swapi-type";

interface IFilmCharactersApi {
  data: SwapiPeopleApi;
  meta: FetchBaseQueryMeta;
}

export const swapiApi = createApi({
  reducerPath: "SwapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getSwapiFilmsApi: builder.query<SwapiFilmsApi, void>({
      query: () => "films",
    }),
    getSwapiFilmCharactersApi: builder.query<IFilmCharactersApi[], string[]>({
      async queryFn(characters, _queryApi, _extraOptions, baseQuery) {
        try {
          const response: IFilmCharactersApi[] = (await Promise.all(
            characters.map((character) => baseQuery(character))
          )) as IFilmCharactersApi[];
          return { data: response };
        } catch (error: any) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetSwapiFilmsApiQuery,
  useLazyGetSwapiFilmCharactersApiQuery,
} = swapiApi;
