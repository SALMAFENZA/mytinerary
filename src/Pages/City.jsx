import React from "react";
import { useParams } from "react-router-dom";
import  cities  from '../Data/dataCities'
import '../Styles/City.css'
import {touristActivity} from "../Data/touristActivity"
import axios from "axios"


const DetailsCities = () =>  {



    axios({
        method: 'READ',
        url: `http://localhost:8000/api/cities${idcity}`,     

      })
      .then(res => DetailsCities(res.data.city))
      .catch(err => console.log(err))

      console.log(idcity)       















    let {idcity} = useParams()


    let detailSelect = cities.find( datacities=> datacities.id ===  idcity)

    let activity = touristActivity.filter(activity => activity.citild === idcity)
    console.log(activity)

    return (
        <>

        <div className="cont-details-city">

        <div className="card-details-city"  >

            <div className="title-details-city">

                <h5 className="title-city">{detailSelect.name}</h5>

            </div>


            <div className="card-img-city"> 

                <img className="img-city" src= {detailSelect.photo} alt={detailSelect} /> 

            </div>

        <div/>
{ 
        <div className="card-details-tourist" > 
            { activity.map((e) => {
                return(
                    <div>{e.description}</div>
                )
            } ) }
        </div>
        }

    </div>

        <div>
            {activity.map((e)=>{
                return(

                <>
            <div className="cont-city-turist">

                    <div className="cont-details-tourist">

                        <div className="title-city"> {e.name} </div>

                        <div className="cont-img-details">

                            <img className="img-details-city"  src={e.photo[0]} alt={e.name}/>

                        </div>

                        <div className='cont-desciption-city'>

                            <div className="cont-text-city"> {e.description} </div>

                            <div className="cont-text-city"> U$D : {e.price}</div>

                            <div className="cont-text-city"> time duration :{e.duration}</div>

                        </div>

                    </div>

                </div>
                </>

                )
            })}
        </div>

        </div>
        </>

)}
export default DetailsCities