import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link as NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function MyTineraries() {
  let [itinerary, setItinerary] = useState();
  let userId = "636f1edc14f79b76f5e442bb";

  useEffect(() => {
      axios
      .get(`http://localhost:8000/api/itineraries?userId=${userId}`)
      .then((res) => setItinerary(res.data.response))
      .catch((err) => console.log(err));
      console.log(itinerary)
      
  }, []);

  function deleteItinerary(e) {
    e.preventDefault();
    console.log(e.target.id);
    let itineraryId = e.target.id;

    confirmAlert({
      title: "Delete this itinerary",
      message: "Are you sure to do this?.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            axios
              .delete(`http://localhost:8000/api/itineraries/${itineraryId}`)
              .then((res) => alertFunction(res.data.message)),
            },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  }
  function alertFunction (e){
    toast(e)
}

  return (
    itinerary?.map((e) => (
<>
      <div className="cont-city-turist">
        <div className="cont-details-tourist">
          <div className="title-city"> {e.name} </div>
          <div className="cont-img-details">
            <img
              className="img-details-city"
              src={e.photo}
              alt={e.name}
            />
          </div>
          <div className="cont-desciption-city">
            <div className="cont-text-city"> {e.description} </div>

            <div className="cont-text-city"> U$D : {e.price}</div>

            <div className="cont-text-city">
              time duration :{e.duration}
            </div>
          </div>
        </div>
        <NavLink to={`/edititinerary/${e._id}`}>
          <button id={e._id}>Edit</button>{" "}
        </NavLink>
        <button id={e._id} onClick={deleteItinerary}>
          Delete
        </button>
      </div>
    </>

    )
    
    )
  );
}
