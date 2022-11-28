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
                </div>
                <div className="buton-nav-header">
                <img className="buton-nav-header" src="https://th.bing.com/th/id/OIP.JEYHfXEn6eiFCUGpn8uZ-wHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7" width="30%" alt="" />
                    <ButtonNav2 n7="Edit a city" n8="Crete a city"/>
                    
                
                </div>
                <div className="buton-nav-header">
                    <img className="buton-nav-header" src="https://u7.uidownload.com/vector/461/227/vector-administration-vector-icon-eps.jpg" width="17%" alt="" />
                    <ButtonNav n1="Log In" n2="Sign Up"/>

                </div>
        </header>
        </>
        )
}
export { Header }