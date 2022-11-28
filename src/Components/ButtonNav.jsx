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
function logout(){
  confirmAlert({
    title: "Log out",
    message: "Really leave us? 😭",
    buttons: [
      {
        label: "Yes, bye",
        onClick: async () => {
localStorage.clear()
         toast("good bye dear user")
        },
      },
      {
        label: "No, I'll stay ♥",
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
                    <NavLink >
                        <li className="b">
                            <a className="ancorLink"  href="" onClick={() => logout()} >Log out</a>
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
       <ToastContainer />
    </div>
  );
}
export { ButtonNav };
