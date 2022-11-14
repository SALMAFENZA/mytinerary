import React from 'react';
import { useRef } from 'react';
import "../../Styles/NewHotel.css";
import axios from 'axios';


export default function NewCity() {

const nameRef = useRef()
const CapacityRef = useRef()
const citiIdRef = useRef()
const photoRef = useRef()
const citiuserIdRef = useRef()

function create (e){
  e.preventDefault();  /// Evita que la página se recargue al llenar el formulario
  
  
  const dataHotel = {
    name: nameRef.current.value,
    photo: photoRef.current.value,
    capacity: CapacityRef.current.value,
    cityId: citiIdRef.current.value,
    userId: citiuserIdRef.current.value,
  };
console.log(dataHotel)

// localStorage.setItem("hotel", JSON.stringify(dataHotel) )
axios.post(`http://localhost:8000/api/hotels/create`,dataHotel )

}

  return (
<div className='generalContainForm'>
  <div className='formHotel'>
    <form className="formCity" onSubmit={create}>
    <div className="form-Citybody">
      <h1 className='Citytitle'>Hotel</h1>
      <input type="text" placeholder="Name" className='form__input' ref={nameRef}/>
      <input type="text" placeholder="Capacity" className='form__input' ref={CapacityRef}/>
      <input type="text" placeholder="City" className='form__input' ref={citiIdRef}/>
      <input type="text" placeholder="Add a photo" className='form__input' ref={photoRef}/>
      <input type="text" placeholder="User" className='form__input' ref={citiuserIdRef}/>

      <div className="submit">
        <button className='submit2'>Create</button>
      </div>
    </div>
  </form>
  </div>
</div>
  )
  }

