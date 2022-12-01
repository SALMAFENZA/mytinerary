import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./reducers/citiesAPI";
import itinerariesAPI from "./reducers/itinerariesaAPI";
import userAPI from "./reducers/userAPI";
import reactionsAPI from "./reducers/reactions";

export default configureStore({
reducer: {
[citiesAPI.reducerPath] : citiesAPI.reducer,
[itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
[userAPI.reducerPath] : userAPI.reducer,
[reactionsAPI.reducerPath] : reactionsAPI.reducer
}, 
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware()
.concat(citiesAPI.middleware)
.concat(itinerariesAPI.middleware)
.concat(userAPI.middleware)
.concat(reactionsAPI.middleware)
})