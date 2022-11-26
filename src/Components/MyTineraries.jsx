import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link as NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  useGetAllMutation,
  useDeleteItinerariesMutation,
} from "../redux/reducers/itinerariesaAPI";

export default function MyTineraries() {
  let [deleteItineraryRedux, { data: itineraryRedux, error }] =
    useDeleteItinerariesMutation();
  let [itinerary, setItinerary] = useState();
  let [test, setTest] = useState();
  let userId = "637e5f6eb770505b2535a175";

  useEffect(() => {
    // axios
    // .get(`http://localhost:8000/api/itineraries`)
    // .then((res) => setCheckboxArray(res.data.itineraries))
    // .catch((err) => console.log(err));
    axios
      .get(`http://localhost:8000/api/itineraries?userId=${userId}`)
      .then((res) => setItinerary(res.data.response))
      .catch((err) => console.log(err));
    console.log(itinerary);
  }, [test]);

  function deleteItinerary(e) {

console.log(e)
    e.preventDefault(); /// Evita que la página cargue.
    console.log(e.target.id); /// Console.log del ID de la ciudad
    let itineraryId = e.target.id;

    confirmAlert({
      title: "Delete this itinerary",
      message: "Are you sure to do this?.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            // axios
            //   .delete(`http://localhost:8000/api/itineraries/${itineraryId}`)
            deleteItineraryRedux(itineraryId)
            .then(() => alertFunction("Itinerary deleted")),

        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  }
    function alertFunction(e) {
      toast(e);
    }
    

    return (
    itinerary?.map((e) => (
      <>
        <div className="cont-details-city">
          <div className="card-details-city">
            <div className="title-city"> {e.name} </div>
            <div className="img-city">
              <img className="img-details-city" src={e.photo} alt={e.name} />
            </div>
            <div className="cont-desciption-city">
              <div className="cont-text-city"> {e.description} </div>
              <div className="cont-text-city"> U$D : {e.price}</div>
              <div className="cont-text-city">time duration :{e.duration}</div>
            </div>
            <div className="contBoton">
              <NavLink to={`/edititinerary/${e._id}`}>
                <button className="buttonItinerary" id={e._id}>
                  Edit it
                </button>{" "}
              </NavLink>
              <button
                className="buttonItinerary"
                id={e._id} onClick={(e) => deleteItinerary(e)}
                
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    ))
  )
}
