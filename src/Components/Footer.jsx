import React from "react";
import "../Styles/Footer.css";
import "./Arrow";
import "./Arrow.css";
import { Link as NavLink } from "react-router-dom";
import { FooterToTop } from "./Arrow";

function Footer() {
    return (
        <footer> 
            <div className="contenedorBoton">
            <NavLink to='/cardcities'>
                    <button className='boton-footer'>Cities</button>
                </NavLink>

            </div>
            <div className="date">
                <h3 className="date">Information</h3>
                <p>Monday to Friday. 10am - 21pm.</p>
                <p>Saturdays. 10am - 17pm.</p>
                <p>Fair. 10am - 15pm</p>
            </div>
            <div className="date">
                <p className="date">Contact us</p>
                <a className="date" href="tel:+">
                    0800-824-1784
                </a> <br />
                <a className="date" href="https://github.com/SALMAFENZA">-Web made by Salma Fenza with love- </a>
            </div>
            <div className="date">
                <h3 className="date">Methods of payment</h3>
                <p>Debit</p>
                <p>Credit</p>
                <p>Transfer</p>
            </div>

            {<FooterToTop />}

        </footer>
    );
}
export { Footer };