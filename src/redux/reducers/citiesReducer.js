import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";

const initialState = {
   citiesList: [],
   checked: [],
   searchValue: " ",
};
const citiesReducer = createReducer(initialState, (cities) => {
   cities.addCase(
   citiesAction.getCities.fulfilled,
      function (state, action) {
         return {
            ...state,
            checked: action.payload.checked,
            searchValue: action.payload.searchValue,
            citiesList: action.payload.citiesList
         };
      }
   );
});
export default citiesReducer;
