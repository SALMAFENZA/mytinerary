import React from "react"
import '../Styles/Header.css'
import {ButtonNav} from './ButtonNav'
import {ButtonNav1} from './ButtonNav1'
import {ButtonNav2} from './ButtonNav2'

function Header() {
        return(
        <>
        <header className="main-nav-header">
                <div className="buton-nav-header">
                    <h2 className="title">Pages</h2>
                    <ButtonNav1 n5="Home" n6="Cities"/> 
                </div>
                <div className="buton-nav-header">
                    <h2 className="title">Your City? </h2>
                    <ButtonNav2 n7="Edit your city" n8="Add a new city"/>
                    
                
                </div>
                <div className="buton-nav-header">
                    <h2 className="title">Login - Register</h2>
                    <ButtonNav n1="Sign In" n2="Sign Up"/>

                </div>
        </header>
        </>
        )
}
export { Header }