import React, { useState } from 'react'
import ChecBoxCities from '../Components/ChecBoxCities'
import CitiesCard from '../Pages/CityCard'
import { Link as NavLink } from "react-router-dom";
// import { cities } from '../Data/dataCities';

// let filtrosSearch = []

// filtrosSearch = cities.sort((a,b) => a.name.localeCompare (b.name))


export default function CardCities() {

    const [search, setSearch] = useState('')
    
    let renderSearch = (e) => {
        setSearch(e.target.value)
    }

    function filtrar(){
        // filtrosSearch = cities.filter(e => e.name.toLocaleLowerCase().includes(setSearch.value.toLocaleLowerCase))
    }
    console.log(filtrar)

    return (
    <>
        <div className='filters'>

        <ChecBoxCities/>

        <label className='inputs'>Serch Here</label>
        <input onChange={ renderSearch } value = {search} className='search' type="text"/>

        <NavLink to="/newcity">
            <li className="addCity">
                <a className="ancorLink"  href="-"> !! add your city !!</a>
            </li>
        </NavLink>

        </div>

        <div className='boxes'>
            <CitiesCard/>
        </div>
    </>
    )
}

