import { BASE_URL } from "../../api/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/// Redux API ? Una herramienta de redux toolkit que permite hacer peticiones ♥
const itinerariesAPI = createApi({
  reducerPath: "itinerariesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, /// LocalHost:8000
  }),

  endpoints: (builder) => ({
    //// endpoints son las acciones que realizará el redux. ♥
    deleteItineraries: builder.mutation({
      query: (itinerariesId) => ({
        url: `/api/itineraries/${itinerariesId}`,
        method: "DELETE",
      }),
    }),
  }),
});
export default itinerariesAPI;
export const { useDeleteItinerariesMutation } = itinerariesAPI;
