import react, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/CityCard.css";
import axios from "axios";

export default function CityCard() {
  const [searchValue, setSearchValue] = useState("");
  const [cityCard, setCityCard] = useState();
  const [checkboxArray, setCheckboxArray] = useState();
  const [checked, setChecked] = useState([]);
  const searchRef = useRef();

  function searchinput() {
    setSearchValue(searchRef.current.value);
    console.log(searchRef.current.value);
  }
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/api/cities?`,
    })
      .then((res) => setCheckboxArray(res.data.city))
      .catch((err) => console.log(err));
      
    axios.get('http://localhost:8000/api/cities', {
      params: {
        continent: checked,
        name: searchValue
      }
    }).then((res) => setCityCard(res.data.city))
    .catch((err) => console.log(err));

  }, [searchValue, checked]);
  const checkBox = Array.from(new Set(checkboxArray?.map((e) => e.continent)));

  function filterCheck(e) {
    console.log(e.target.id);
    let checks = [];
    if (e.target.checked) {
      checks = [...checked, e.target.id];
    } else {
      checks = checked.filter((checkbox) => checkbox !== e.target.id);
    }
    setChecked(checks);
  }
  return (
    <>
      <div className="filters">
        {checkBox?.map((e) => {
          return (
            <label>
              {e}
              <input id={e} type="checkbox" onClick={filterCheck} />
            </label>
          );
        })}

        <label className="inputs">Serch Here</label>
        <input
          ref={searchRef}
          className="search"
          type="text"
          onChange={searchinput}
        />
      </div>

      {cityCard?.map((e) => {
        return (
          <div>
            <div className="box2">
              <div className="cont-img">
                <img className="image" src={e.photo} alt="hotel" />
              </div>
              <h3>{e.name}</h3>
              <Link to={`/city/${e._id}`} className="nav-cities">
                See More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
