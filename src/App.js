import React from "react";
import Home from "../src/Pages/Home";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
         
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
