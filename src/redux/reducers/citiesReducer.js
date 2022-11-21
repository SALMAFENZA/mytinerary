import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";

const initialState = {
   citiesList: [],
   loading: false,
   error: false
};
const citiesReducer = createReducer(initialState, (cities) => {
   cities.addCase(
   citiesAction.getCities.fulfilled,
      function (state, action) {
         return {
            ...state,
            loading: false,
            citiesList: action.payload.citiesList
         };
      }
   );
});
export default citiesReducer;
