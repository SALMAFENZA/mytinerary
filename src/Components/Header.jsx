import React from "react";
import "../Styles/Header.css";
import { ButtonNav } from "./ButtonNav";
import { ButtonNav1 } from "./ButtonNav1";
import { ButtonNav2 } from "./ButtonNav2";

function Header() {
return (
        <>
<header className="main-nav-header">
        <ButtonNav1 
                n5="Home" 
                n6="Cities" 
                />
        <ButtonNav2 
                n7="New city" 
                n8="New reaction" 
                n9="New itinerary" />
        <ButtonNav
                n1="Log In"
                n2="Sign Up"
                n3="My profile"
                n8="My cities"
                n10="My reactions"
                n4="Log out"
        />
</header>
</>
);
}
export { Header };
