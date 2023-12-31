import { LoginRequestParams, RegisterRequestParams } from "@/api/models/session-model.ts";
import { GetUserRequestParams, GetUserResponseParams } from "@/api/models/user-model.ts";
import { userQueryParams } from "@/store/user/utils.ts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user/api",
  tagTypes: ["users"],
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
    getUsers: builder.query<GetUserResponseParams, GetUserRequestParams>({
      query: ({ accessToken }: GetUserRequestParams) => ({
        ...userQueryParams.user.get,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
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

export const { useLoginMutation, useRegisterMutation, useGetUsersQuery } = userApi;
