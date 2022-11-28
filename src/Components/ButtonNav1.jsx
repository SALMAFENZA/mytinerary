import React from 'react'
import { useState } from "react";
import "../Styles/ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav1(props) {

    let {n4, n5, n6,n7 } = props;
    let [mostraryOcultar, setMostraryOcultar] = useState(false);

    let hidee = () =>{
        setMostraryOcultar(!mostraryOcultar)
    }
return(
    <div>
        {mostraryOcultar ? (
            <>
                <img className="img" onClick={hidee}            
                src="https://cdn-icons-png.flaticon.com/512/64/64787.png"
                  width="50" height="40"alt="-" />
                <ul className="ul">

                    <NavLink to="/hotels">
                        <li className="a">
                            <a className="ancorLink" href="-">{n4}</a>
                        </li>
                    </NavLink>

                    <NavLink to="/">
                        <li className="b">
                            <a className="ancorLink"  href="-">{n5}</a>
                        </li>
                    </NavLink>

                    <NavLink to="/cardcities">
                        <li className="b">
                            <a className="ancorLink"  href="-">{n6}</a>
                        </li>
                    </NavLink>
                    <NavLink to="editcity/6382d72c6eb8318094d88cc5">
                        <li className="b">
                            <a className="ancorLink"  href="-">{n7}</a>
                        </li>
                    </NavLink>


                </ul>
            </>
        ) : (
            <img className="img" onClick={hidee} 
            src="https://cdn-icons-png.flaticon.com/512/64/64787.png"
             width="50" height="40" alt="-" />
        )}
    </div>
);
}

export {ButtonNav1}