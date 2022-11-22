import React from "react";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn"
import NewHotel from "./Pages/NewHotel";
import Hotels from "./Components/Hotel/Hotels";
import MainComplete from './Components/layouts/mainComplete/MainComplete'
import SignUp from './Pages/SignUp'
import City from './Pages/City'
import NewCity from './Pages/NewCity'
import Cities from './Pages/Cities'
import HomeComplete  from './Components/layouts/HomeComplete'
import DetailsHotel from "./Components/DetailsHotel";
import MyCities from "./Pages/MyCities";
import EditCity from "./Pages/EditCity";
import EditItinerary from "./Pages/EditItinerary";
import MyTineraries from "./Components/MyTineraries";

// todas las rutas que van en pats minusculas

function App() {
  return (
    <BrowserRouter>
    <MainComplete>
        <Routes>
          <Route path='/' element = {<HomeComplete/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/cardcities" element={<Cities/>}/>
          <Route path='/city/:id' element={<City/>}/>
          <Route path='/new-city' element={<NewCity/>}/>
          <Route path="/hotels" element = {<Hotels/>}/>
          <Route path="/myCities" element = {<MyCities/>}/>
          <Route path="/mytineraries" element = {<MyTineraries/>}/>
          <Route path='/detailsHotel/:idh' element={<DetailsHotel/>}/>
          <Route path="/new-hotel" element={<NewHotel />}/>
          <Route path="/editcity/:id" element={<EditCity />}/>
          <Route path="/edititinerary/:id" element={<EditItinerary />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </MainComplete>
      </BrowserRouter>
  );
}

export default App;