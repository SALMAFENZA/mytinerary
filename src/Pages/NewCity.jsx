//esto es el formulario para sumar una nueva ciudad 

import React, { useState , useRef } from "react";
import "../Styles/NewCity.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// funcionando correcto

export default function AddCity() {
  const navigate = useNavigate();

  const nameRef = useRef();
  const continentRef = useRef();
  const photoRef = useRef();
  const populationRef = useRef();
  const  userRef= useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem('user', JSON.stringify({name, continent, photo, population}));
    // navigate('login');

    console.log(nameRef)
    const dataCity = {
        name: nameRef.current.value,
        continent: continentRef.current.value,
        photo: photoRef.current.value,
        population: populationRef.current.value,
        user: userRef.current.value
      };
      console.log(dataCity)

    axios({
      method: "POST",
      url: `http://localhost:8000/api/cities`,
        data: dataCity
    })
      .then((response) => alert(response.data.message))
      .catch((err) => alert(err.response.data.message));
  };


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
            <input
              name="User"
              type="text"
              placeholder="User"
              ref={userRef}
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
