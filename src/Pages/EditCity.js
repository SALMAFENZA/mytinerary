import { React, useRef , useState , useEffect } from "react";
import "../Styles/NewCity.css";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function EditCity() {
    const [city, setCity] = useState([]);
    let id = useParams().id;

    const nameRef = useRef();
    const continentRef = useRef();
    const photoRef = useRef();
    const populationRef = useRef();
    const  userRef= useRef()
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      console.log(nameRef)
      const dataCity = {
          name: nameRef.current.value,
          continent: continentRef.current.value,
          photo: photoRef.current.value,
          population: populationRef.current.value,
          user: userRef.current.value
        };
        console.log(dataCity)
  
      axios({
        method: "PUT",
        url: `http://localhost:8000/api/cities/${id}`,
          data: dataCity
      })
        .then((response) => alert(response.data.message))
        .catch((err) => alert(err.response.data.message));
    };
  
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/cities/${id}`)
          .then((res) => setCity(res.data.response))
          .catch((err) => console.log(err))
      }, [id]);





  
    return (

        
      <>
        <div className="contentCity">
          <div className="content-form">
            <h2>Edit City</h2>
            <form onSubmit={handleSubmit}>              
              <input
                name="name"
                type="text"
                placeholder="Name"
                ref={nameRef}
                defaultValue={city.name}
              />             
            <input
                name="continent"
                type="text"
                placeholder="continent"
                ref={continentRef}
                defaultValue={city.continent}
              />
  
             
              <input
                name="photo"
                type="text"
                placeholder="Photo"
                ref={photoRef}
                defaultValue={city.photo}
              />
  
            
              <input
                name="Population"
                type="text"
                placeholder="Population"
                ref={populationRef}
                defaultValue={city.population}
              />           
              
              
              <div className="bottom">
                <button className="botonRegister" type="submit" onClick={handleSubmit}>
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}
