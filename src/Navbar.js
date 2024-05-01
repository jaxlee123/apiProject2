
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElelments";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Login 
                        {/* //console.log("blahhh"); */}
                    </NavLink>
                    <NavLink to="/infoScreen" activeStyle>
                        InfoScreen
                    </NavLink>
                   
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;