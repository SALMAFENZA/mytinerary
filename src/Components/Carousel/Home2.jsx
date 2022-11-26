import React from "react";
import "../../Styles/Slider.css";
import "../../Styles/ScrollToTop.css";
import { useState } from "react";
import Arrow from "./Arrow";

export default function Home2(props) {
  const range = props.range;
  const [start, setStart] = useState(0);
  const end = start + range;
  const cities = props.cities;

  function right() {
    if (end >= 11) {
      {
        setStart(0);
      }
    } else {
      setStart(start + range);
    }
  }

  function left() {
    if (start < range) {
      setStart(end);
    } else {
      setStart(start - range);
    }
  }
  const ciudades = (city) => (
    <div className="slider-event" key={city.id}>
      <img src={city.photo} alt={city.name} className="slider-image" />
      <p className="slider-text">{city.name}</p>
    </div>
  );

  return (
    <div className="slider-container">
      <div className="slider-slider">
        <Arrow icon={"⋘"} function={left} /> 
        <Arrow icon={"⋙"} function={right} />
        {cities.slice(start, end).map(ciudades)}
      </div>
    </div>
  );
}
