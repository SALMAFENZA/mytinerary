import React from "react"
import '../Styles/Header.css'
import {ButtonNav} from './ButtonNav'
import {ButtonNav1} from './ButtonNav1'

function Header() {
        return(
        <>
        <header className="main-nav-header">
                <div className="buton-nav-header">
                    <h2 className="title">Pages</h2>
                    <ButtonNav1 n3="Hotels" n4="Home" n5="Cities"/>
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