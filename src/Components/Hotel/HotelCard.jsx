//Trae las cosas antes de usarlas mensa,
import React from "react";
import "../../Styles/HotelCard.css";
import { Link } from "react-router-dom";
import hotelandcasinos from "../../Data/HotelsAndCasinoss";

export default function HotelCard() {

  const casinoshotels = hotelandcasinos.map(item => item)
  return (
    casinoshotels.map (item => {
    return(
    <>
    <div className="ContainCard-hotel">
      <div
        className="card"
        style={{ backgroundImage: `url(${item.photo[0]})` }}
      >
        <div className="content">
          <h2 className="title">{item.name}</h2>
          <p className="copy">Capacity: {item.capacity}</p>
          <Link key={item.id} to={`/DetailsHotel/${item.id}`} className="nav-cities">
            See More
          </Link>
        </div>
      </div>
    </div>
    </>
    )
  }))
}