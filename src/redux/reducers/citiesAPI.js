import { BASE_URL } from "../../api/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/// Redux API ? Una herramienta de redux toolkit que permite hacer peticiones ♥
const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, /// LocalHost:8000
  }),

  endpoints: (builder) => ({
    //// endpoints son las acciones que realizará el redux. ♥

    //// getAll ========= useState()
    getAll: builder.query({
      query: ({ search, checkbox }) =>
        `/api/cities?name=${search}&continent=${checkbox}`,
    }),

    //// getAllContinent ===== useEffect()
    getAllContinent: builder.query({
      query: () => `/api/cities`,
    }),

    ///// newCity ==== useRef()
    newCity: builder.mutation({
      query: (dataCity) => ({
        url: "/api/cities",
        method: "POST",
        body: dataCity,
      }),
    }),

    deleteCity: builder.mutation({
      query: (cityId) => ({
        url: `/api/cities/${cityId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default citiesAPI;
export const {
  useGetAllQuery,
  useGetAllContinentQuery,
  useNewCityMutation,
  useDeleteCityMutation,
} = citiesAPI;
