import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./reducers/citiesAPI";
import itinerariesAPI from "./reducers/itinerariesaAPI";

export default configureStore({
reducer: {
[citiesAPI.reducerPath] : citiesAPI.reducer,
[itinerariesAPI.reducerPath] : itinerariesAPI.reducer
}, 
ware: (getDefaultMiddleware) =>
getDefaultMiddleware()
.concat(citiesAPI.middleware)
.concat(itinerariesAPI.middleware)
})