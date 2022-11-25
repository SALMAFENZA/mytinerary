import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./citiesAPI";

export default configureStore({
reducer: {
[citiesAPI.reducerPath] : citiesAPI.reducer
}, 
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware()
.concat(citiesAPI.middleware)
})