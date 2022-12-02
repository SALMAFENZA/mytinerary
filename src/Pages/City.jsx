import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/City.css";
import axios from "axios";
import Reactions from "../Components/Reactions";

const DetailsCities = () => {
  const { id } = useParams();
  const [city, setCity] = useState([]);
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`)
      .then((res) => setCity(res.data.response))
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:8000/api/itineraries?cityId=${id}`)
      .then((res) => setItineraries(res.data.response))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="cont-details-city">
        <div className="card-details-city-more">
          <div className="title-details-city">
            <h5 className="title-city">{city.name}</h5>
          </div>
          <div className="img-city-detail-more">
            <img className="img-details-city" src={city.photo} alt={""} />
            <h4 className="tittle-details-city">
              Population: {city.population}
            </h4>
            {/* <h4>  Edit: {city.botonEdit}</h4> */}
          </div>
          <div/>
          <div className="card-details-tourist">
            <div>{city.description}</div>
          </div>
        </div>

        <div>
          {itineraries.map((e) => {
            return (
              <>
                <div>
                  <div className="card-details-city">
                    <div className="title-city-more"> {e.name} </div>
                    <div className="cont-img-details">
                      <img
                        className="img-details-city"
                        src={e.photo}
                        alt={e.name}
                      />
                    </div>
                    <div className="cont-desciption-city">
                      <div className="cont-text-city"> {e.description} </div>

                      <div className="cont-text-city"> U$D : {e.price}</div>

                      <div className="cont-text-city">
                        time duration :{e.duration}
                      </div>
                      <Reactions itineraryId={e._id} />
                    </div>
                <button> Open Comments </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default DetailsCities;
