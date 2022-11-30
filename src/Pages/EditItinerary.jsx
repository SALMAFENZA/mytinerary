import { React, useRef , useState , useEffect } from "react";
import "../Styles/NewCity.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function EditItinerary() {
    const [itinerary, setItinerary] = useState([]);
    let id = useParams().id;

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const durationRef = useRef();
    const  photoRef= useRef()
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      console.log(nameRef)
      const dataItinerary = {
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          price: priceRef.current.value,
          duration: durationRef.current.value,
          photo: [photoRef.current.value],
        };
       let JWTToken = JSON.parse(localStorage.getItem("token"))
        console.log(dataItinerary)
  
        confirmAlert({
          title: "Create user",
          message: "Are you ready to create an user?.",
          buttons: [
            {
              label: "Yes",
              onClick: async () => {               
                axios({
                  method: "PUT",
                  url: `http://localhost:8000/api/itineraries/${id}`, 
                  data: dataItinerary,
                  headers: {"Authorization" : `Bearer ${JWTToken}`}
                })
                  .then((e) => alerts(e.data.message , e.data.success))
                  .catch((err) => alert(err.response.data.message));               
              },
            },
            {
              label: "No",
              onClick: () => console.log("Click No"),
            },
          ],
        })
        
        
        
        
        
        
    };
  
    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/itineraries/${id}`)
          .then((res) => setItinerary(res.data.response))
          .catch((err) => console.log(err))
      }, [id]);
  
      function alerts(e, i) {
        const resolveAfter3Sec = new Promise((resolve, reject) => {
          setTimeout(resCreation, 2000);
    
          function resCreation() {
            if (i) {
              resolve();
              console.log(e);
            } else {
              reject(e);
              console.log(e);
            }
          }
        });
        console.log(e);
        toast.promise(resolveAfter3Sec, {
          pending: "Please wait 🕜",
          success: e + "👌",
          error: "Can not edit 🤯 " + e,
        });
      }



    return (
 
      <>
        <div className="cont-details-city">
          <div className="content-form">
            <h2>Edit Itinerary</h2>
            <img  className="img-details-city" src={itinerary.photo}/>            
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
                name="photo"
                type="text"
                placeholder="photo"
                ref={photoRef}
                defaultValue={itinerary.photo}
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
                <button className="botom">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </>
    );
}
