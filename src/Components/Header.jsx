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
                <img className="buton-nav-header" src="https://th.bing.com/th/id/OIP.BcotGjhQr6xA_0kiwr0I3AHaHa?pid=ImgDet&rs=1" width="17%" alt="" />
                    <ButtonNav1 n5="Home" n6="Cities"/> 
                    <ButtonNav2 n8="My cities" n7="Crete a city"/>                     
                    <ButtonNav n1="Log In" n2="Sign Up" n3="My profile" n4="Log out"/>
                    </div>
        </header>
        </>
        )
}
export { Header }