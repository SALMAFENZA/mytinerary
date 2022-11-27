import React, { useEffect, useState, useRef } from "react";
import { Link as NavLink } from "react-router-dom";
import { ButtonNav } from "../Components/ButtonNav";
import "../Styles/CityCard.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import7yu
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useGetAllMutation , useDeleteCityMutation } from '../redux/reducers/citiesAPI'

export default function MyCities() {
  let [deleteCityRedux ,  { data: cityRedux, error }] = useDeleteCityMutation()
  const [checkboxArray, setCheckboxArray] = useState([]);
  const [checks, setChecks] = useState([]);
  const [cities, setCities] = useState();  
  const checkRef = useRef();
  const searchRef = useRef();

  let userId = "636f1edc14f79b76f5e442bb"

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities`)
      .then((res) => setCheckboxArray(res.data.city))
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:8000/api/cities?userId=${userId}`)
      .then((res) => setCities(res.data.city))
      .catch((err) => console.log(err));
  }, []);

  const checkBox = Array.from(new Set(checkboxArray?.map((e) => e.continent)));

function deleteCity(e){
e.preventDefault()  /// Evita que la página cargue.
console.log(e.target.id)   /// Console.log del ID de la ciudad
let cityId = e.target.id    /// guardar el ID en una variable



///// ------- COMPONENTE DE ALERTAS (revisar documentación) -------- /////
 
confirmAlert({
  title: 'Delete this city',
  message: 'Are you sure to do this?.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => 
          //// ----------- Redux para eliminar una ciudad. ------------- ////
        deleteCityRedux(cityId)
        .then(() => alertFunction("City deleted"))



        /// -------- Axios para eliminar una ciudad ---------////
        
        // axios.delete(`http://localhost:8000/api/cities/${cityId}`)
        //         .then((res) => alertFunction(res.data.message))
        
        
      },
      {
        label: 'No',
        onClick: () => console.log('Click No')
      }
    ]
  });
}
function alertFunction (e){
    toast(e)
  }
  
  console.log(cityRedux)


function filterCities(){
let value= searchRef.current.value;
}

  function filterCheck(e) {
    let checks = Array.from(checkRef.current)
      .filter((check) => check.checked === true)
      .map((check) => check.id);
  }
  return (
    <>
      <div className="filters">
        <NavLink to="/newcity">
          <li className="addCity">
            <ButtonNav className="ancorLink" n2="">
              !Add your city!
            </ButtonNav>
          </li>
        </NavLink>
      </div>
      <div className="filters">
        <form ref={checkRef}>
          {checkBox?.map((e) => {
            return (
              <label>
                {e}
                <input id={e} type="checkbox" onClick={filterCheck} />
              </label>
            );
          })}
        </form>
        <label className="inputs">Serch Here</label>
        <input
          onKeyUp={filterCities}
          ref={searchRef}
          className="search"
          type="text"
        />
      </div>

      {cities?.map((e) => {
        return (
          <div>
            <div className="box2">
              <div className="cont-img">
                <img className="image" src={e.photo} alt="Cities" />
              </div>
              <h3>{e.name}</h3>
              <NavLink to={`/city/${e._id}`} className="nav-cities">
                See More
              </NavLink>
              <NavLink to={`/editcity/${e._id}`}>
                <button id={e._id}>Edit</button>{" "}
              </NavLink>
              <button id={e._id} onClick={deleteCity}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </>
  );
}
