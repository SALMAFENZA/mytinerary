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
      query: ({id , token }) => ({
        url: `/api/reactions/${id}`,
        method: "PUT",
        headers: {
          Authorization: "Bearer " + `${token}`,
        },
      }),
    }),
    deleteReaction: builder.mutation({
      query: ({id , token }) => ({
        url: `/api/reactions/`,
        method: "DELETE",
        body: id,
        headers: {
          Authorization: "Bearer " + `${token}`, 
        },
      }),
    }),
    getReaction: builder.mutation({
      query: ({ itineraryId, userId , token }) => ({
        url: `/api/reactions?itineraryId=${itineraryId}&userId=${userId}`,
        headers: {
          Authorization: "Bearer " + `${token}`, 
        },
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
