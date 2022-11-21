import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCities = createAsyncThunk("getCities", async () => {
const response = await axios.get(`${BASE_URL}/api/cities`)
console.log(response.data)  
return {
     citiesList: response.data.response 
}
})

const citiesAction = {
  getCities
}

export default citiesAction;
