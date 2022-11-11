import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/hotel'
import  hotel  from '../../Data/HotelsAndCasinoss'

export default function CityCard() {
    const cityCard = hotel.map(e => e)
    return (
    cityCard.map (e => {
        return(
        <div>
            <div className="box-hotel">
            <div className='cont-img-hotel'>
                <img className="image-hotel" src={e.photo} alt="hotel" />
            </div>
                <h3>{e.name}</h3>
                <Link to={`/hotel/${e.id}`} className='nav-hotel'>See More</Link>
            </div>
        </div>
        )
        })
    )
}

//CityCard
