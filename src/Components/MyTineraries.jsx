import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  let [userId , setUserId] = useState()





  const navigate = useNavigate();

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("user"))){
      console.log("si hay un usuario")
      setUserId(JSON.parse(localStorage.getItem("user")).id)
    }

    axios
      .get(`http://localhost:8000/api/itineraries?userId=${userId}`)
      .then((res) => setItinerary(res.data.response))
      .catch((err) => console.log(err));
    console.log(itinerary);

  }, [userId]);

  function deleteItinerary(e) {
    console.log(e);
    e.preventDefault(); /// Evita que la página cargue.
    console.log(e.target.id); /// Console.log del ID de la ciudad
    let itinerariesId = e.target.id;
    let token = JSON.parse(localStorage.getItem("token"));

    confirmAlert({
      title: "Delete this itinerary",
      message: "Are you sure to do this?.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            // axios
            //   .delete(`http://localhost:8000/api/itineraries/${itineraryId}`)
            deleteItineraryRedux({ itinerariesId, token })
              .then((e) => alerts(e.data.message, e.data.success))
              .catch((err) => alerts(err.response.data.message, false)),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  }

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
      error: "Can not delete 🤯 " + e,
    });
  }

  return (
    <>
      <h3 className="Home-btn" onClick={() => navigate("/newitinerary")}>
        Create a new itinerary
      </h3>
      {itinerary?.map((e) => (
        <>
          <div className="cont-details-city" key={e._id}>
            <div className="card-details-city">
              <div className="title-city"> {e.name} </div>
              <div className="img-city">
                <img className="img-details-city" src={e.photo} alt={e.name} />
              </div>
              <div className="cont-desciption-city">
                <div className="cont-text-city"> {e.description} </div>
                <div className="cont-text-city"> U$D : {e.price}</div>
                <div className="cont-text-city">
                  time duration :{e.duration}
                </div>
              </div>
              <div className="contBoton">
                <NavLink to={`/edititinerary/${e._id}`}>
                  <button className="buttonItinerary" id={e._id}>
                    Edit it
                  </button>{" "}
                </NavLink>
                <button
                  className="buttonItinerary"
                  id={e._id}
                  onClick={(e) => deleteItinerary(e)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </>
      ))}
    </>
  );
}
