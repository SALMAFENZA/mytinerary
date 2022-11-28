import React, { useState ,useEffect } from 'react'
import axios from 'axios';

export default function NewItinerary() {
let [cities , setCities] = useState()

    useEffect(() => {      
        axios
          .get(`http://localhost:8000/api/cities`)
          .then((res) => setCities(res.data.city))
          .catch((err) => console.log(err));
        console.log(cities);
      }, []);

function getId(e){
    e.preventDefault()
    console.log(e.target.value)
}


  return (
    <>
    <div className="Home-btn">
    Create a new itinerary
  </div>

  <div >
  <select className="EditCity-select" onChange={getId}>
  <option hidden>Select city to edit</option>
  {cities?.map((city) => (
              <option  key={city._id} value={city._id}  >{city.name} </option>
            ))}
</select>
  </div>



    </>
  )
}
