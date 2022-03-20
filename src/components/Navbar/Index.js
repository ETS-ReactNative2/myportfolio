import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import logo from "../../assets/img/logo.jpeg";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (

        <Nav>
            <Bars/>
            <Link to="/">
                <div className="Navbar-logo">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </Link>
            <NavMenu>
                <NavLink to='/tech' activeStyle>
                    Tech
                </NavLink>
                <NavLink to='/skills' activeStyle>
                    Skills
                </NavLink>
                <NavLink to='/projects' activeStyle>
                    Projects
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/contact'>Contacto</NavBtnLink>
            </NavBtn>
        </Nav>

    );
};

export default Navbar;


