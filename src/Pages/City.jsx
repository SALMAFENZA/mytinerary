import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cities from "../Data/dataCities";
import "../Styles/City.css";
import { touristActivity } from "../Data/touristActivity";
import axios from "axios";

const DetailsCities = () => {
  const { id } = useParams();
  const [city, setCity] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`)

      .then((res) => setCity(res.data.response))
      .then((res) => console.log(res))

      .catch((err) => console.log(err));
  }, [id]);

  console.log(city);

  console.log(id);

  return (
    <>
      <div className="cont-details-city">
        <div className="card-details-city">
          <div className="title-details-city">
            <h5 className="title-city">{city.name}</h5>
          </div>

          <div className="card-img-city">
            <img className="img-city" src={city.photo} alt={""} />
            <h4 className="tittle-details-city">Population: {city.population}</h4>
          </div>

          <div />
          {
            <div className="card-details-tourist">
              {[].map((e) => {
                return <div>{e.description}</div>;
              })}
            </div>
          }
        </div>

        <div>
          {[].map((e) => {
            console.log(e)
            return (
              <>
                <div className="cont-city-turist">
                  <div className="cont-details-tourist">
                    <div className="title-city"> {e.name} </div>
                    <div className="cont-img-details">
                      <img
                        className="img-details-city"
                        src={e.photo[0]}
                        alt={e.name}
                      />
                    </div>
                    <div className="cont-desciption-city">
                      <div className="cont-text-city"> {e.description} </div>

                      <div className="cont-text-city"> U$D : {e.price}</div>

                      <div className="cont-text-city">
                        {" "}
                        time duration :{e.duration}
                      </div>
                    </div>
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
