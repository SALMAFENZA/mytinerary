import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import axios from "axios";

export default function NewReaction() {
  let [itineraryId, setItineraryId] = useState();
  let [itinerary, setItinerary] = useState();
  let [user, userId] = useState();
  let nameRef = useRef();
  let iconRef = useRef();
  let iconBackRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/itineraries")
      .then((e) => setItinerary(e.data.response));
    userId(JSON.parse(localStorage.getItem("user")).id);
  }, []);

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
      pending: "Creating new city 🚧",
      success: e + " 👌",
      error: "Can not create a city 🤯 " + e,
    });
  }

  //// itineraryId
  //// [userId]
  function submit(e) {
    console.log(e.target.value);

    confirmAlert({
      title: "Create city",
      message: "Are you sure to create this city?.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            const reaction = {
              itineraryId: itineraryId,
              name: nameRef.current.value,
              icon: iconRef.current.value,
              iconBack: iconBackRef.current.value,
              userId: [],
            };

            console.log(reaction);
            axios({
              method: "POST",
              url: `http://localhost:8000/api/reactions/`,
              data: reaction,
            })
              .then((e) => alerts(e.data.message, e.data.success))
              .catch((err) => alerts(err.response.data.message, false));
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
      <div className="form-new-reaction">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(e);
          }}
        >
          <select
            onChange={(e) => {
              e.preventDefault();
              setItineraryId(e.target.value);
            }}
          >
            <option hidden>Select Itinerary</option>
            {itinerary?.map((e) => (
              <option key={e._id} value={e._id}>
                {e.name}
              </option>
            ))}
          </select>
          <label>
            <input
              type="text"
              ref={nameRef}
              placeholder="Reaction Name"
              required
            ></input>
          </label>
          <label>
            <input
              type="text"
              ref={iconRef}
              placeholder="Icon"
              required
            ></input>
          </label>
          <label>
            <input
              type="text"
              ref={iconBackRef}
              placeholder="Icon back"
              required
            ></input>
          </label>
          <button>Create</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
