import React from "react";
import  cities  from "../Data/dataCities";

export default function ChecBoxCities() {
  console.log(cities);
  const checkBox = Array.from(new Set(cities?.map((e) => e.continent)));
  return checkBox.map((e) => {
    return (
      <label>
        {e}
        <input type="checkbox" />
      </label>
    );
  });
}
