import React, { useEffect, useState, useRef } from "react";
import { Link as NavLink } from "react-router-dom";
import { ButtonNav } from "../Components/ButtonNav";
import "../Styles/CityCard.css";
import { useGetAllQuery, useGetAllContinentQuery } from "../redux/reducers/citiesAPI";

export default function CardCities() {
  const [search, setSearch] = useState("");
  const checkRef = useRef();
  const searchRef = useRef();
  const [checkbox, setChecbox] = useState([]);

  let { data } = useGetAllQuery({ search, checkbox });  
  let { data: checkboxs } = useGetAllContinentQuery();

  let cities = data?.city;
  let checkboxArray = checkboxs?.city;

  const checkBox = Array.from(new Set(checkboxArray?.map((e) => e.continent)));

  function filterCities() {
    setSearch(searchRef.current.value);
  }

  function filterCheck(e) {
    let checks = Array.from(checkRef.current)
      .filter((check) => check.checked === true)
      .map((check) => check.id);
    setChecbox(checks);
    console.log(checks);
  }
  return (
    <>
      <div className="filters">
        {/* <NavLink to="/newcity">
          <li className="addCity">
            <ButtonNav className="ancorLink" n2="New City">
              !Add your city!
            </ButtonNav>
          </li>
        </NavLink> */}
      </div>
      <div className="filters">
        <form ref={checkRef}>
          {checkBox?.map((e) => {
            return (
              <div key={e}>

              <label>
                {e}
                <input id={e} type="checkbox" onClick={filterCheck} />
              </label>
              </div>
            );
          })}
        </form>
        <label className="inputs">Serch Here</label>
        <input
          onKeyUp={filterCities}
          ref={searchRef}
          className="search"
          type="text"
        />
      </div>

      {cities?.map((e) => {        
        return (
          <div id={e._id} key={e._id}>
            <div className="box2">
              <div className="cont-img">
                <img className="image" src={e.photo} alt={e.name} />
              </div>
              <h3>{e.name}</h3>
              <NavLink to={`/city/${e._id}`} className="nav-cities">
                See More
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
}
