import React, { useEffect, useState } from "react";
import ChecBoxCities from "../Components/ChecBoxCities";
import Cities from "./Cities";
import { Link as NavLink } from "react-router-dom";
import { ButtonNav } from "../Components/ButtonNav";
import { useDispatch, useSelector } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";

export default function CardCities() {
    const citiesList = useSelector(store => store.citiesReducer.citiesList);
    console.log(citiesList);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(citiesAction.getCities());
  }, []);
  let renderSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="filters">
        <ChecBoxCities />

        <NavLink to="/newcity">
          <li className="addCity">
            <ButtonNav className="ancorLink" n2="New City">
              !Add your city!
            </ButtonNav>
          </li>
        </NavLink>
      </div>

      <div className="boxes">
        <Cities />
      </div>
    </>
  );
}
