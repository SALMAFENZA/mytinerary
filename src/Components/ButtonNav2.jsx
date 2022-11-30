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
            className="img"
            onClick={hide}
            src="https://cdn-icons-png.flaticon.com/512/64/64787.png"
            width="50"
            height="40"
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
          className="img"
          onClick={hide}
src="https://cdn-icons-png.flaticon.com/512/64/64787.png"          
width="50"
          height="40"
          alt="-"
        />
      )}
    </div>
  );
}
export { ButtonNav2};
