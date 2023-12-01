import {
  ICheckEmailApi,
  ICheckUsernameApi,
  ICheckUsernameRequest,
} from "@/app/[lng]/register/components/register-form/interfaces";
import { getBaseUrl } from "@/app/utils/get-base-url";
import { apiRoutes } from "@/constants/routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({
    checkEmailApi: builder.query<ICheckEmailApi, ICheckUsernameRequest>({
      query: (data) => {
        return {
          url: apiRoutes["get-check-email"],
          method: "POST",
          body: { ...data },
        };
      },
    }),
    checkUsernameApi: builder.query<ICheckUsernameApi, { username: string }>({
      query: (data) => {
        return {
          url: apiRoutes["get-check-username"],
          method: "POST",
          body: { ...data },
        };
      },
    }),
  }),
});

export const { useLazyCheckEmailApiQuery, useLazyCheckUsernameApiQuery } =
  authApi;
