import React from 'react'
import { useParams } from "react-router-dom";
import  hotelandcasinos  from '../Data/HotelsAndCasinoss'
import '../Styles/detailsHotel.css'


export default function DetailsHotel() {

    let {idh} = useParams()

    let detailsHotel = hotelandcasinos.find( HotelsAndCasinoss=> HotelsAndCasinoss.id === idh)
    console.log(detailsHotel)
        return(
        <>
            <div className='cont-card-hotel'>

            <div className="cont-hotel-card">

            <div className="cont-text-hotel">
                <div className='text-hotel'>{detailsHotel.name}</div>
            </div>

            <div className="cont-img-hotel" >
                <img className="img-hotel" src={detailsHotel.photo[1]} alt="" />
            </div>
                
            <div className="cont-text-hotel">
                <div className='text-hotel'>Capacity: {detailsHotel.capacity}</div>
            </div>

            </div>

        </div>
        </>
        )
        }
        

