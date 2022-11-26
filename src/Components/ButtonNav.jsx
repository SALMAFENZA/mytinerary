import React from "react";
import { useState } from "react";
import "../Styles/ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav(props) {
  let { n1, n2 } = props;
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
            margin-bottom="5rem"
            width="50"
            height="40"
            alt="-"
          />
          <ul className="ul">
                    <NavLink to="/SignIn">
                        <li className="a">
                            <a className="ancorLink" href="">{n1}</a>
                        </li>
                    </NavLink>
                    <NavLink to="/signup">
                        <li className="b">
                            <a className="ancorLink"  href="-">{n2}</a>
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
export { ButtonNav };
