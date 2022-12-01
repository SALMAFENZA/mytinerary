import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";


export default function NewItinerary() {
  let [cities, setCities] = useState();
  let [cityId, setCityId] = useState();

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();
  const photoRef = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities`)
      .then((res) => setCities(res.data.city))
      .catch((err) => console.log(err));
    console.log(cities);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(nameRef)
    const dataItinerary = {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        duration: durationRef.current.value,
        photo: [photoRef.current.value],
        cityId: cityId,
        userId : JSON.parse(localStorage.getItem("user")).id
      };

      console.log(dataItinerary)

      confirmAlert({
        title: "Create itinerary",
        message: "Are you ready to create an itinerary?.",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {               
              axios({
                method: "POST",
                url: `http://localhost:8000/api/itineraries/`, 
                data: dataItinerary,
              })
                .then((e) => alerts(e.data.message , e.data.success))
                .catch((err) => alerts(err.response.data.message , false));               
            },
          },
          {
            label: "No",
            onClick: () => console.log("Click No"),
          },
        ],
      })
      
      
      
      
      
      
  };




  function alerts(e, i) {
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      setTimeout(resCreation, 2000);

      function resCreation() {
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
      pending: "Please wait 🕜",
      success: e + " 👌",
      error: "Can not create 🤯 " + e,
    });
  }

  return (
    <>
      <div className="createbuttonitin">
        <div className="botonItineraries">Create a new itinerary</div>
      </div>
      <div className="Selector">
        <select
          className="EditCity-select"
          onChange={(e) => {
            e.preventDefault();
            setCityId(e.target.value);
          }}
        >
          <option hidden>Select city to edit</option>
          {cities?.map((city) => (
            <option key={city._id} value={city._id}>
              {city.name}{" "}
            </option>
          ))}
        </select>
        <div className="contentItinerary">
          <form>
            <input
              name="Name"
              type="text"
              placeholder="Name"
              ref={nameRef}
              required
            />
            <input
              name="Descrtiption"
              type="text"
              placeholder="Description"
              ref={descriptionRef}
              required
            />
            <input
              name="Price"
              type="text"
              required
              placeholder="Price"
              ref={priceRef}
            />
            <input
              name="Duration"
              type="text"
              required
              placeholder="Duration"
              ref={durationRef}
            />
            <input
              name="photo"
              type="text"
              required
              placeholder="photo"
              ref={photoRef}
            />
            <div className="bottom">
              <button className="botom" onClick={(e)=> handleSubmit(e)}>Create</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
