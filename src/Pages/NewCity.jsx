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
  let [newCity, { data: dataNewCity, error }] = useNewCityMutation();
  let [message, setMessage] = useState("");

  const navigate = useNavigate();

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
          onClick: () => {
            const dataCity = {
              name: nameRef.current.value,
              continent: continentRef.current.value,
              photo: photoRef.current.value,
              population: populationRef.current.value,
              userId: "636f1edc14f79b76f5e442bb",
            };
            console.log(dataCity);
            //// ----------- Redux para crear una ciudad. ------------- ////
            newCity(dataCity).then((i) => setMessage(dataNewCity?.message));
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
          <h2>Add your City</h2>
          <form>
            <input name="name" type="text" placeholder="Name" ref={nameRef} />

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
              <button
                className="botonRegister"
                type="submit"
                onClick={createNewCity}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
