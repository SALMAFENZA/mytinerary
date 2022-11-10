//Trae las cosas antes de usarlas mensa,
import React from "react";
import "../../Styles/HotelCard.css";
import hotelandcasinos from "../../Data/HotelsAndCasinoss";

export default function HotelCard() {
  console.log(hotelandcasinos);

  const DetailsCards = (item) => (
    <div className="ContainCard">
    <div className="card" style={{backgroundImage: `url(${item.photo[0]})` }}>
      <div className="content">
        <h2 className="title">{item.name}</h2>
        <p className="copy">Capacity: {item.capacity}</p>
        <button className="btn">View more</button>
      </div>
    </div>
    </div>
  );

  return <>{hotelandcasinos.map(DetailsCards)}</>;
}
