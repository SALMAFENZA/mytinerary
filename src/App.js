import React from "react";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import NewHotel from "./Pages/NewHotel";
import Hotels from "./Pages/Hotels";
import MainComplete from './Components/layouts/mainComplete/MainComplete'
import SignUp from './Pages/SignUp'
import CardCities from './Pages/CardCities'
import NewCity from './Pages/NewCity'
import HomeComplete  from './Components/layouts/HomeComplete'
import DetailsCities from './Pages/DetailsCities'

// todas las rutas que van en pats minusculas



function App() {
  return (
    <BrowserRouter>
    <MainComplete>
        <Routes>
          <Route path='/' element = {<HomeComplete/>} />
          <Route path='/signp' element = {<SignUp/>}/>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path='/cities' element ={<CardCities/>}/>
          <Route path='/city/:id' element={<DetailsCities/>}/> {/* corregir el useparams de details city*/}
          <Route path='/new-city' element={<NewCity/>}/>
          <Route path="/hotels" element = {<Hotels/>} />
          <Route path="/new-hotel" element={<NewHotel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </MainComplete>
      </BrowserRouter>
  );
}

export default App;
