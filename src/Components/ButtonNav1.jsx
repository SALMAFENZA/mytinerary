import React from 'react'
import { useState } from "react";
import "../Styles/ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav1(props) {

    let {n4, n5, n6, n7, n8, n11} = props;
    let [mostraryOcultar, setMostraryOcultar] = useState(false);

    let hidee = () =>{
        setMostraryOcultar(!mostraryOcultar)
    }
return(
    <div>
        {mostraryOcultar ? (
            <>
                <img className="buton-nav-header" onClick={hidee}            
                src="https://th.bing.com/th/id/OIP.BcotGjhQr6xA_0kiwr0I3AHaHa?pid=ImgDet&rs=1"
                  width="56" height="56"alt="-" />
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
                    <NavLink to="mytineraries">
                    <li className="b">
                        <a className="ancorLink"  href="-">{n11}</a>
                    </li>
                </NavLink>
                 <NavLink to="/mycities">
                        <li className="b">
                            <a className="ancorLink"  href="-">{n8}</a>
                        </li>
                    </NavLink>

                </ul>
            </>
        ) : (
            <img className="buton-nav-header" onClick={hidee} 
            src="https://th.bing.com/th/id/OIP.BcotGjhQr6xA_0kiwr0I3AHaHa?pid=ImgDet&rs=1"
             width="90" height="80" alt="-" />
        )}
    </div>
);
}

export {ButtonNav1}