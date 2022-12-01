import { BASE_URL } from "../../api/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/// Redux API ? Una herramienta de redux toolkit que permite hacer peticiones ♥
const reactionsAPI = createApi({
  reducerPath: "reactionsAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, /// LocalHost:8000
  }),

  endpoints: (builder) => ({
    //// endpoints son las acciones que realizará el redux. ♥
    addReaction: builder.mutation({
      query: (data) => ({
        url: `/api/reactions/`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }),
    }),
    deleteReaction: builder.mutation({
      query: (data) => ({
        url: `/api/reactions/`,
        method: "DELETE",
        body: data,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }),
    }),
    getReaction: builder.mutation({
      query: ({ itineraryId, userId }) => ({
        url: `/api/reactions?itineraryId=${itineraryId}&userId=${userId}`,
      }),
    }),
  }),
});
export default reactionsAPI;
export const {
  useDeleteReactionMutation,
  useAddReactionMutation,
  useGetReactionMutation,
} = reactionsAPI;
