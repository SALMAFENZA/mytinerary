import React, { useState } from 'react'
import ChecBoxCities from '../Components/ChecBoxCities'
import Cities from './Cities'
import { Link as NavLink } from "react-router-dom";
import { ButtonNav } from '../Components/ButtonNav';

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

        <NavLink to="/newcity">
            <li className="addCity">
                <ButtonNav className="ancorLink" n2="New City">!Add your city!</ButtonNav>
            </li>
        </NavLink>

        </div>

        <div className='boxes'>
            <Cities/>
        </div>
    </>
    )
}

