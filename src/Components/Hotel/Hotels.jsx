import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import '../../Styles/HotelCard.css'
import HotelCard from './HotelCard'

export default function Hotels() {

    let [hotels, setHotels] = useState([])
    let searchRef = useRef()
    let selectRef = useRef()

    useEffect(() => {
        axios.get('http://localhost:8000/api/hotels')
        .then(res => setHotels (res.data.response))
        .catch(error => console.log(error))
    },[])

    function filter(){
        if(selectRef.current.value !=='asc' && selectRef.current.value !=='desc'){
            selectRef.current.value = 'asc' 
        }
        axios.get(`http://localhost:8000/api/hotels?name=${searchRef.current.value}&order=${selectRef.current.value}`)
        .then(res => setHotels (res.data.response))
        .catch(error => console.log(error))
    }

    return (
        <>
        <div>
            <label>
                search here
                <input ref={searchRef} type="search" onChange={filter}/>
            </label>
            <label>
                <select ref={selectRef} onChange={filter}>
                    <option value='asc'>ascendent</option>
                    <option value='desc'>descedent</option>
                </select>
            </label>
        </div>
        <div>
            { hotels.map((hotel, index) =>{ 
                return <HotelCard hotel= {hotel}/>
            })}
        </div>
        </>
    )    
}

