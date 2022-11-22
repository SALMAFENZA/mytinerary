// //Trae las cosas antes de usarlas mensa,
// import React from "react";
// import "../../Styles/HotelCard.css";
// import { Link } from "react-router-dom";

// export default function HotelCard(props) {

//   let {hotel} = props
//   return (
//     <>
//     <div className="ContainCard-hotel">
//       <div className="card"style= {{ backgroundImage: `url(${hotel.photo[0]})` }} >
//         <div className="content">
//           <h2 className="title">{hotel.name}</h2>
//           <p className="copy">Capacity: {hotel.capacity}</p>
//           <Link key={hotel._id} to={`/DetailsHotel/${hotel._id}`} className="nav-cities">
//             See More
//           </Link>
//         </div>
//       </div>
//     </div>
//     </>
//     )
//   }
