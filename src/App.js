import React from "react";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn"
import NewHotel from "./Pages/NewHotel";
import Hotels from "./Pages/Hotels";
import MainComplete from './Components/layouts/mainComplete/MainComplete'
import SignUp from './Pages/SignUp'
import City from './Pages/City'
import NewCity from './Pages/NewCity'
import CardCities from './Components/CardCities'
import HomeComplete  from './Components/layouts/HomeComplete'
import HotelCard from "./Components/Hotel/HotelCard";
import DetailsHotel from "./Components/DetailsHotel";
// todas las rutas que van en pats minusculas

function App() {
  return (
    <BrowserRouter>
    <MainComplete>
        <Routes>
          <Route path='/' element = {<HomeComplete/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/cardcities" element={<CardCities/>}/>
          <Route path='/detailscities/:idcity' element={<City/>}/>
          <Route path='/new-city' element={<NewCity/>}/>
          <Route path="/hotels" element = {<Hotels/>}/>
          <Route path="/hotel" element={<HotelCard/>}/>
          <Route path='/detailsHotel/:idh' element={<DetailsHotel/>}/>
          <Route path="/new-hotel" element={<NewHotel />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </MainComplete>
      </BrowserRouter>
  );
}

export default App;