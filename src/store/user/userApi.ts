import { LoginRequestParams, RegisterRequestParams } from "@/api/models/session-model.ts";
import { userQueryParams } from "@/store/user/utils.ts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginRequestParams) => ({
        ...userQueryParams.user.login,
        body: body,
      }),
    }),
    register: builder.mutation({
      query: (body: RegisterRequestParams) => ({
        ...userQueryParams.user.register,
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
