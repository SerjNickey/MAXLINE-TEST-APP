import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-backend-url.com/api/" }),
  endpoints: (builder) => ({
    register: builder.mutation<
      any,
      {
        phoneNum: string;
        password: string;
        firstChecked: boolean;
        secondChecked: boolean;
      }
    >({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registrationApi;
