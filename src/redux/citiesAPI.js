import { BASE_URL } from "../api/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/// Redux API ? Una herramienta de redux toolkit que permite hacer peticiones ♥
const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, /// LocalHost:8000
  }),

  endpoints: (builder) => ({
    getAll: builder.query({
      query: ({ search, checkbox }) =>
        `/api/cities?name=${search}&continent=${checkbox}`,
    }),
    getAllContinent: builder.query({
      query: () => `/api/cities`,
    }),
    newCity: builder.mutation({
      query: (dataCity) => ({
        url: "/api/cities",
        method: "POST",
        body: dataCity,
      }),
    }),
  }),
});

export default citiesAPI;
export const { useGetAllQuery, useGetAllContinentQuery , useNewCityMutation } = citiesAPI;
