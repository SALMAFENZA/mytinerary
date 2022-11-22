import { React, useRef , useState , useEffect } from "react";
import "../Styles/NewCity.css";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function EditItinerary() {
    const [itinerary, setItinerary] = useState([]);
    let id = useParams().id;

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef();
    const  userRef= useRef()
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      console.log(nameRef)
      const dataItinerary = {
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          price: priceRef.current.value,
          duration: durationRef.current.value,
          user: userRef.current.value
        };
        console.log(dataItinerary)
  
      axios({
        method: "PUT",
        url: `http://localhost:8000/api/itineraries/${id}`,
          data: dataItinerary
      })
        .then((response) => alert(response.data.message))
        .catch((err) => alert(err.response.data.message));
    };
  
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/itineraries/${id}`)
          .then((res) => setItinerary(res.data.response))
          .catch((err) => console.log(err))
      }, [id]);





  
    return (

        
      <>
        <div className="contentCity">
          <div className="content-form">
            <h2>Edit Itinerary</h2>
            <form onSubmit={handleSubmit}>              
              <input
                name="name"
                type="text"
                placeholder="Name"
                ref={nameRef}
                defaultValue={itinerary.name}
              />             
            <input
                name="description"
                type="text"
                placeholder="description"
                ref={descriptionRef}
                defaultValue={itinerary.description}
              />
  
             
              <input
                name="price"
                type="text"
                placeholder="price"
                ref={priceRef}
                defaultValue={itinerary.price}
              />
  
            
              <input
                name="duration"
                type="text"
                placeholder="duration"
                ref={durationRef}
                defaultValue={itinerary.duration}
              />           
              
              
              <div className="bottom">
                <button className="botom" type="submit" onClick={handleSubmit}>
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
