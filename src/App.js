import React from "react";
import Home from "../src/Pages/Home";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import SignIn from "./Pages/SignIn";
import NewCity from "./Pages/NewCity";
import NewHotel from "./Pages/NewHotel";
import Hotels from "./Pages/Hotels";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/NewCity" element={<NewCity />} />
          <Route path="/createhotel" element={<NewHotel />} />
          <Route path="/hotels" element = {<Hotels/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
