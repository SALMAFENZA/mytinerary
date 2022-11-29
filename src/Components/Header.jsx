import React from "react"
import '../Styles/Header.css'
import {ButtonNav} from './ButtonNav'
import {ButtonNav1} from './ButtonNav1'
import {ButtonNav2} from './ButtonNav2'

function Header() {
        return(
        <>
        <header className="main-nav-header">
                    <ButtonNav1 n5="Home" n6="Cities"/> 
                    <ButtonNav2 n7="Edit a city" n8="Crete a city"/>                     
                    <ButtonNav n1="Log In" n2="Sign Up"/>
        </header>
        </>
                )
}
export { Header }