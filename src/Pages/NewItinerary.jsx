import React, {useRef, useState, useEffect } from "react";
import axios from "axios";
import "../Styles/NewItinerary.css"

export default function NewItinerary() {
  let [cities, setCities] = useState();

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();
  const  userRef= useRef()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities`)
      .then((res) => setCities(res.data.city))
      .catch((err) => console.log(err));
    console.log(cities);
  }, []);

  function getId(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <>
    <div className="containButton">
      <div className="botonItineraries">Create a new itinerary</div>
</div>
      <div className="Selector">
        <select className="EditCity-select" onChange={getId}>
          <option hidden>Select city to edit</option>
          {cities?.map((city) => (
            <option key={city._id} value={city._id}>
              {city.name}{" "}
            </option>
          ))}
        </select>
        <div className="contentItinerary">
        <form >
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
</form>
        </div>
      </div>
    </>
  );
}
