import {
  IWeatherApiRequest,
  ICurrentWeatherApiResponse,
  I5DaysWeatherApiResponse,
} from "@/app/[lng]/portfolio/projects/weather-app/components/interfaces";
import { getBaseUrl } from "@/app/utils/get-base-url";
import { apiRoutes } from "@/constants/routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherAppApi = createApi({
  reducerPath: "weatherAppApi",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({
    getCurrentWeatherApi: builder.query<
      ICurrentWeatherApiResponse,
      IWeatherApiRequest
    >({
      query: (data) => {
        return {
          url: apiRoutes["get-current-weather"],
          method: "POST",
          body: { ...data },
        };
      },
    }),
    get5DaysWeatherApi: builder.query<
      I5DaysWeatherApiResponse,
      IWeatherApiRequest
    >({
      query: (data) => {
        return {
          url: apiRoutes["get-5-day-weather"],
          method: "POST",
          body: { ...data },
        };
      },
    }),
  }),
});

export const {
  useLazyGetCurrentWeatherApiQuery,
  useLazyGet5DaysWeatherApiQuery,
} = weatherAppApi;
