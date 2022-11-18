import react , { useEffect , useState , useRef} from "react"
import { Link } from 'react-router-dom'
import '../../Styles/CityCard.css'
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



useEffect(() => {       
            axios({
              method: 'GET',
              url: `http://localhost:8000/api/cities?name=${searchValue}`,            
            })
            .then(res => setCityCard(res.data.city))
            .catch(err => console.log(err))
    },[searchValue])


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
            <img className="image" src={e.photo} alt="hotel" />
          </div>
          <h3>{e.name}</h3>
          <Link to={`/api/cities/${e._id}`} className='nav-cities'>See More</Link>
        </div>
    </div>
    )
  }) }
</>

  )
}