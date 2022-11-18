import react , { useEffect , useState , useRef} from "react"
import { Link } from 'react-router-dom'
import '../Styles/CityCard.css'
import axios from "axios"


export default function CityCard() {

const [searchValue,setSearchValue] = useState("")
const [cityCard, setCityCard] = useState()
const searchRef = useRef()

function searchinput(){
  setSearchValue(searchRef.current.value)
  console.log(searchRef.current.value)
  console.log(searchRef)
  
}
//en see more, me va llevar a una ruta diferente donde no esten todos los filtros 
///desde aca tengo q mandar la info (cityCard, de ahi saco user y pic) a un componente nuevo

//en mongodb agregar la propiedad user
useEffect(() => {       
            axios({
              method: 'GET',
              url: `http://localhost:8000/api/cities?name=${searchValue}`,            
            })
            .then(res => setCityCard(res.data.city))
            .catch(err => console.log(err))
    },[searchValue])

console.log(cityCard)

      return (
<>
<div className="filters">
  <label className='inputs'>Serch Here</label>
  <input ref={searchRef} className='search' type="text" onChange={searchinput}/>
</div>

{cityCard?.map (e => {
  return(
      <div>
        <div className="box2">
          <div className='cont-img'>
            <img className="image" src={e.photo} alt="hotel"/>
          </div>
          <h3>{e.name}</h3>
          <Link to={`/city/${e._id}`} className='nav-cities'>See More</Link>
        </div>
    </div>
    )
  }) }
</>

  )
}
//en vez de llamar un link llamo a un componente o q el boton me mande a esa ruta pero q me muestre otrp compon
// inventarle ruta nueva menos lo de la linea 23