import react , { useEffect , useState , useRef} from "react"
import { Link } from 'react-router-dom'
import '../Styles/CityCard.css'
import  cities  from '../Data/dataCities.js'
import axios from "axios"
import Search from "../Components/Search"


export default function CityCard() {

const [searchValue,setSearchValue] = useState("")
const [cityCard, setCityCard] = useState()
const searchRef = useRef()

function searchinput(){

  setSearchValue(searchRef.current.value)
  console.log(searchRef.current.value)
  
}



useEffect(() => {
        if (searchValue) {
          console.log("Caso 1")
            axios.get(`http://localhost:8000/api/cities/?continent=${searchValue}`)


            .then(res => setCityCard(res.data.city))
            .catch(err => console.log(err))
        } else {
          console.log("Caso 2")
            axios.get("http://localhost:8000/api/cities")
            .then(res => setCityCard(res.data.city))
            .catch(err => console.log(err))
        }
    },[searchValue])


  return (
<>

<div>
<label className='inputs'>Serch Here</label>
<input ref={searchRef} className='search' type="text" onChange={searchinput}/>
</div>

{cityCard?.map (e => {
  return(
      <div>
        <div className="box2">
          <div className='cont-img'>
            <img className="image" src={e.photo} alt="hotel" />
          </div>
          <h3>{e.name}</h3>
          <Link to={`/detailscities/${e.id}`} className='nav-cities'>See More</Link>
        </div>
    </div>
    )
  }) }
</>

  )
}

//CityCard
