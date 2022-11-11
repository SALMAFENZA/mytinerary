import React from "react";
import Home1 from "../../Pages/Home1";
import Home2 from "../Carousel/Home2";
import cities from "../../Data/dataCities";

function HomeComplete() {
  return (
    <>
      <Home1 />
      <Home2 range="4" cities={cities} />
    </>
  );
}
export default HomeComplete;
