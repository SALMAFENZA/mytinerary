import React, { useEffect, useState, useRef } from "react";
import { Link as NavLink } from "react-router-dom";
import { ButtonNav } from "../Components/ButtonNav";
import { useDispatch, useSelector } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";
import "../Styles/CityCard.css";
import axios from "axios";


export default function CardCities() {
    const [checkboxArray, setCheckboxArray] = useState([]);
    const [checks, setChecks] = useState([]);
    const checkRef = useRef();
    const searchRef = useRef();

    let { citiesList, searchValue, checked} = useSelector((store) => store.citiesReducer);
    console.log(citiesList);
    const dispatch = useDispatch();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/cities`)
            .then((res) => setCheckboxArray(res.data.city))
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        if (!citiesList){
            dispatch(citiesAction.getCities({
            searchValue: "",
            checked: ""
           }))}
    },[]);

    const checkBox = Array.from(new Set(checkboxArray?.map((e) => e.continent)));

function filterCities(){
let value= searchRef.current.value;
dispatch(citiesAction.getCities({ searchValue:value,checked }));
}

    function filterCheck(e) {
let checks =(Array.from(checkRef.current).filter(check => check.checked  === true).map(check=>check.id))
    
        dispatch(citiesAction.getCities({ searchValue,checked:checks }));
    }
    return (
        <>
            <div className="filters">
                <NavLink to="/newcity">
                    <li className="addCity">
                        <ButtonNav className="ancorLink" n2="New City">
                            !Add your city!
                        </ButtonNav>
                    </li>
                </NavLink>
            </div>
            <div className="filters">
                <form ref={checkRef}> 
                {checkBox?.map((e) => {
                    return (
                        <label>
                            {e}
                            <input id={e} type="checkbox" onClick={filterCheck} />
                        </label>
                    );
                })}
                </form>
                <label className="inputs">Serch Here</label>
                <input onKeyUp={filterCities}
                    ref={searchRef}
                    className="search"
                    type="text"
                />
            </div>

            {citiesList?.map((e) => {
                return (
                    <div>
                        <div className="box2">
                            <div className="cont-img">
                                <img className="image" src={e.photo} alt="hotel" />
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
