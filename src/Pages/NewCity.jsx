//esto es el formulario para sumar una nueva ciudad

import React, { useState, useRef, useEffect } from "react";
import "../Styles/NewCity.css";
import { useNavigate } from "react-router-dom";
import { useNewCityMutation } from "../redux/reducers/citiesAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// funcionando correcto

export default function AddCity() {
  let [message, setMessage] = useState("");
  let [isSuccess, setIsSuccess] = useState();

  let [newCity, { data: resNewCity }] = useNewCityMutation();

  const navigate = useNavigate();

  async function alerts(e,i) {
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      setTimeout(resCreation, 2000);
      
      function  resCreation() {
        if (i) {
          resolve();
          console.log(e);
        } else {
          reject(e);
          console.log(e);
        }
      }
    });
    console.log(e);
    toast.promise(resolveAfter3Sec, {
      pending: "Creating new city 🚧",
      success: e + " 👌",
      error: "Can not create a city 🤯 " + e,
    });
  }

  const nameRef = useRef();
  const continentRef = useRef();
  const photoRef = useRef();
  const populationRef = useRef();

  //////// ------------- COnFIRMACIÓN PARA PREGUNTAR SI QUIERE CREAR UNA CIUDAD*-------//////
  function createNewCity(e) {
    e.preventDefault();

    confirmAlert({
      title: "Create city",
      message: "Are you sure to create this city?.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const dataCity = {
              name: nameRef.current.value,
              continent: continentRef.current.value,
              photo: photoRef.current.value,
              population: populationRef.current.value,
              userId: "637e5f6eb770505b2535a175",
            };
            //// ----------- Redux para crear una ciudad. ------------- ////
            newCity(dataCity)
              .then((e) => {
                alerts(e.data.message , e.data.success);                
              })
              
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  }

  return (
    <>
      <div className="contentCity">
        <div className="content-form">
          <h2>Create your City</h2>
          <form onSubmit={createNewCity}>
            <input name="name" type="text" placeholder="Name" ref={nameRef} />

            <input
              name="continent"
              type="text"
              placeholder="continent"
              ref={continentRef}
              required
            />

            <input
              name="photo"
              type="text"
              placeholder="Photo"
              ref={photoRef}
              required
            />

            <input
              name="Population"
              type="text"
              required
              placeholder="Population"
              ref={populationRef}
            />

            <div className="bottom">
              <button className="botonRegister" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
