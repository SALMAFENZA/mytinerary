import React from "react";
import { useState } from "react";
import "../Styles/ButtonNav.css";
import { Link as NavLink } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ButtonNav(props) {
  let { n1, n2 } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);

  //funcion para mostrar el menu
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
  };
  function logout() {
    confirmAlert({
      title: "Log out",
      message: "Really leave us? 😭",
      buttons: [
        {
          label: "Yes, bye",
          onClick: async () => {
            localStorage.clear();
            toast("Good bye dear!");
          },
        },
        {
          label: "No, I want to stay here ♥",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  }

  return (
    <div>
      {mostrarOcultar ? (
        <>
          <img
            className="buton-nav-header"
            onClick={hide}
            src="https://u7.uidownload.com/vector/461/227/vector-administration-vector-icon-eps.jpg"
            margin-bottom="5rem"
            width="50"
            height="40"
            alt="-"
          />
          <ul className="ul">
            <NavLink to="/myprofile">
              <li className="a">
                <a className="ancorLink" href="">
                  My profile
                </a>
              </li>
            </NavLink>
            <NavLink to="/SignIn">
              <li className="a">
                <a className="ancorLink" href="">
                  {n1}
                </a>
              </li>
            </NavLink>
            <NavLink to="/signup">
              <li className="b">
                <a className="ancorLink" href="-">
                  {n2}
                </a>
              </li>
            </NavLink>
            <NavLink>
              <li className="b">
                <a className="ancorLink" href="" onClick={() => logout()}>
                  Log out
                </a>
              </li>
            </NavLink>
          </ul>
        </>
      ) : (
        <img
          className="buton-nav-header"
          onClick={hide}
          src="https://u7.uidownload.com/vector/461/227/vector-administration-vector-icon-eps.jpg"
          width="80"
          height="70"
          alt="-"
        />
      )}
      <ToastContainer />
    </div>
  );
}
export { ButtonNav };
