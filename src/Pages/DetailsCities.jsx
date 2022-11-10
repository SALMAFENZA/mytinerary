import React from "react";
import { useParams } from "react-router-dom";
import  cities  from '../Data/dataCities'
import './DetailsCities.css'
import {touristActivity} from "../Data/touristActivity"


const DetailsCities = () =>  {

    let {cId} = useParams()
    console.log(cId)



    let detailSelec = cities.find( datacities=> datacities.id ===  cId )

    let activity = touristActivity.filter(activity => activity.cId === cId)

    return (
        <>

        <h5>{detailSelec.name}</h5>
        <div> <img src= {detailSelec.photo} alt="photo" /> </div>
{ 
        <div> 
            { activity.map((e) => {
                return(
                    <div>{e.description}</div>
                )
            } ) }
        </div>
        }

        </>

)}
export default DetailsCities