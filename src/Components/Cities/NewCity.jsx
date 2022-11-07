import React from 'react'
import { useRef } from 'react'

export default function NewCity() {

const cityRef = useRef()
const countryRef = useRef()
const populationRef = useRef()
const photoRef = useRef()
const foundedRef = useRef()

function create (e){
  e.preventDefault();  /// Evita que la página se recargue al llenar el formulario
  
  
  const dataCity = {
    city: cityRef.current.value,
    country: countryRef.current.value,
    population: populationRef.current.value,
    photo: photoRef.current.value,
    founded: foundedRef.current.value,
  };
console.log(dataCity)

localStorage.setItem("city", JSON.stringify(dataCity) )


}






  return (

    <form className="formCity" onSubmit={create}>
    <div className="form-Citybody">
      <h1 className='Citytitle'>City</h1>


      <input type="text" placeholder="City" className='form__input' ref={cityRef}/>
      <input type="text" placeholder="Country" className='form__input' ref={countryRef}/>
      <input type="text" placeholder="Population" className='form__input' ref={populationRef}/>
      <input type="text" placeholder="Photo" className='form__input' ref={photoRef}/>
      <input type="text" placeholder="Founded" className='form__input' ref={foundedRef}/>
      



      <div className="submit">
        <button className='submit2'>Create</button>
      </div>
    </div>
  </form>
  )
}
