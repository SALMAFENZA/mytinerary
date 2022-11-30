import React from "react";
import { useState } from "react";
import "../Styles/ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav2(props) {
  let { n7, n8 } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);

  //funcion para mostrar el menu
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
  };

  return (
    <div>
      {mostrarOcultar ? (
        <>
          <img
            className="buton-nav-header"
            onClick={hide}
            src="https://th.bing.com/th/id/OIP.JEYHfXEn6eiFCUGpn8uZ-wHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7"
            width="60"
            height="55"
            alt="-"
           
          />
          <ul className="ul">
                    <NavLink to="/mycities">
                        <li className="b">
                            <a className="ancorLink"  href="-">{n8}</a>
                        </li>
                    </NavLink>
                    <NavLink to='/new-city'>
                        <li className="a">
                            <a className="ancorLink" href="-">{n7}</a>
                        </li>
                    </NavLink>
          </ul>
        </>
      ) : (
        <img
          className="buton-nav-header"
          onClick={hide}
src="https://th.bing.com/th/id/OIP.JEYHfXEn6eiFCUGpn8uZ-wHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7"          
width="90"
          height="70"
          alt="-"
        />
      )}
    </div>
  );
}
export { ButtonNav2};
