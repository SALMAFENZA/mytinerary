import React from 'react'
import '../Styles/Home1.css';
import { Link as NavLink } from "react-router-dom";


export default function Home1() {
return (
    <>
        <main className="body-home1">
            <div>
                <h1>Welcome to My Tineraries</h1>
                <h2>Where you fulfill dreams </h2>

            </div>
            <div className='box-botom'>
                <NavLink to='/cardcities'>
                    <button className='boton-home1'>Find a City</button>
                </NavLink>

                
            </div>
        </main>
    </>
)
}
