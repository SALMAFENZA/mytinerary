import { BASE_URL } from "../../api/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/// Redux API ? Una herramienta de redux toolkit que permite hacer peticiones ♥
const userAPI = createApi({
  reducerPath: "userAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, /// LocalHost:8000
  }),

  endpoints: (builder) => ({   //// endpoints son las acciones que realizará el redux. ♥ 
    ///// newUser ==== useRef()
    create: builder.mutation({
      query: (data) => ({
        url: "api/auth/sign-up",
        method: "POST",
        body: data,
      }),
    }),    
    login: builder.mutation({
      query: (data) => ({
        url: `api/auth/sign-in`,
        method: "PATCH",
        body: data,
      }),
    }),
    getOneUser: builder.mutation({
      query: (id) => ({
        url: `api/auth/me/${id}`,
        method: "GET",
      }),
    }),
editUser: builder.mutation({
  query: ({ data, id }) => ({
    url: `/api/auth/me/${id}`,
    method: "PATCH",
    body: data,
  }),
})

  }),
});

export default userAPI;
export const { useCreateMutation , useLoginMutation , useGetOneUserMutation ,useEditUserMutation} = userAPI;
