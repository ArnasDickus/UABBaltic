import {
  IWeatherApiRequest,
  IWeatherApiResponse,
} from "@/app/[lng]/portfolio/projects/weather-app/components/interfaces";
import { getBaseUrl } from "@/app/utils/get-base-url";
import { apiRoutes } from "@/constants/routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherAppApi = createApi({
  reducerPath: "weatherAppApi",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({
    getCurrentWeatherApi: builder.query<
      IWeatherApiResponse,
      IWeatherApiRequest
    >({
      query: ({ lat, lon }) => {
        return {
          url: apiRoutes["get-weather-data"],
          method: "POST",
          body: { lat, lon },
        };
      },
    }),
  }),
});

export const { useLazyGetCurrentWeatherApiQuery } = weatherAppApi;
