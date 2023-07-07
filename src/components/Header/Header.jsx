import React from "react";
import "../Header/Header.css"
import Creator from "../Creator/Creator"
import ThemeChange from "../ThemeChange/ThemeCange"

function Header() {
    return ( 
        <div className="header">
            <Creator/>
            <ThemeChange/>
        </div>
     );
}

export default Header;