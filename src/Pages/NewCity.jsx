//esto es el formulario para sumar una nueva ciudad 

import React, { useState , useRef } from "react";
import "../Styles/NewCity.css";
import { useNavigate } from "react-router-dom";
import { useNewCityMutation } from "../redux/citiesAPI";

// funcionando correcto

export default function AddCity() {
let [newCity] = useNewCityMutation()



  const navigate = useNavigate();

  const nameRef = useRef();
  const continentRef = useRef();
  const photoRef = useRef();
  const populationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const dataCity = {
        name: nameRef.current.value,
        continent: continentRef.current.value,
        photo: photoRef.current.value,
        population: populationRef.current.value,
        userId: "636f1edc14f79b76f5e442bb"
      };
      console.log(dataCity)
/// Pista: Va aqui ♥ 

newCity(dataCity)


    }

  return (
    <>
      <div className="contentCity">
        <div className="content-form">
          <h2>Add your City</h2>
          <form onSubmit={handleSubmit}>
             <input
              name="name"
              type="text"
              placeholder="Name"
              ref={nameRef}
            />

            <input
              name="continent"
              type="text"
              placeholder="continent"
              ref={continentRef}
            />

            <input
              name="photo"
              type="text"
              placeholder="Photo"
              ref={photoRef}
            />

            <input
              name="Population"
              type="text"
              placeholder="Population"
              ref={populationRef}
            />
           
            <div className="bottom">
              <button className="botonRegister" type="submit" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
