import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCities = createAsyncThunk("getCities", async ({checked, searchValue}) => {
  try {
    // console.log("continent="+checked) it works!
    const response = await axios.get(`${BASE_URL}/api/cities?name=${searchValue}&continent=${checked.join(",")}`)
    return {
      checked: checked,
      searchValue: searchValue,
      citiesList: response.data.city
    };
  } catch (error) {
    console.log(error);
  }
});

const citiesAction = {
  getCities,
};

export default citiesAction;
