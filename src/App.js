import React , { useEffect, useState } from "react";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn"
import MainComplete from './Components/layouts/mainComplete/MainComplete'
import SignUp from './Pages/SignUp'
import City from './Pages/City'
import NewCity from './Pages/NewCity'
import Cities from './Pages/Cities'
import HomeComplete  from './Components/layouts/HomeComplete'
import MyCities from "./Pages/MyCities";
import EditCity from "./Pages/EditCity";
import EditItinerary from "./Pages/EditItinerary";
import MyTineraries from "./Components/MyTineraries";
import ProtectedRoute from './Components/ProtectRoute';
import MyProfile from "./Pages/MyProfile";
// todas las rutas que van en pats minusculas




function App() {
let [user , setUser] = useState()
let [logged , setLogged] = useState()
let [role, setRole] = useState()

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      setRole(JSON.parse(localStorage.getItem('user')).role)
      setLogged(true)
    }
  }, [])
  console.log(user)



  return (
    <BrowserRouter>
    <MainComplete>
        <Routes>
          <Route path='/' element = {     <HomeComplete/>       }/>
          <Route path='/signup' element = {  logged  ? <HomeComplete/> :   <SignUp/>      }/>
          <Route path="/signin" element={    logged ? <HomeComplete/> :   <SignIn/>      }/>
          <Route path="/cardcities" element={<Cities/>}/>
          <Route path='/city/:id' element={<City/>}/>
          {logged && (
             <Route element={<ProtectedRoute isAllowed={logged} reDirect="/" />}>
            <Route  path="/mytineraries" element = {<MyTineraries/>}/>
            <Route  path="/myprofile" element = {<MyProfile/>}/>
            </Route>
          )}
          <Route element={<ProtectedRoute isAllowed={role === "admin"} reDirect="/" />}>
          <Route path='/new-city' element={<NewCity/>}/>
          <Route path="/myCities" element = {<MyCities/>}/>
          <Route path="/editcity/:id" element={ <EditCity /> }/>
          </Route>
          <Route element={<ProtectedRoute isAllowed={role === "user"} reDirect="/" />}>
          <Route path="/edititinerary/:id" element={ <EditItinerary />}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </MainComplete>
      </BrowserRouter>
  );
}

export default App;