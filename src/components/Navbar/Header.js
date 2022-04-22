import React from 'react';
import logo from "../../assets/img/headerImg/logo.jpeg";
import {Link} from "react-scroll";

import {useScrollHandler} from '../ScrollHandler'

const Header = ({close}) => {

    const scroll = useScrollHandler();
    return (

        <header className={scroll ? "header-active" : "header"} id='header'>
            <nav>
                <div className='header-section'>
                    <Link to="/">
                        <div className="Navbar-logo">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </div>
                    </Link>
                    <ul>
                        <li><Link className="link" activeClass="active" to="/" spy={true} smooth={true} duration={500}
                                  onClick={close}>Home</Link></li>
                        <li><Link className="link" activeClass="active" to="tech" offset={-15} spy={true} smooth={true}
                                  duration={500} onClick={close}>Tech</Link></li>
                        <li><Link className="link" activeClass="active" to="projects" offset={-15} spy={true}
                                  smooth={true} duration={500} onClick={close}>Projects</Link></li>
                        <li><Link className="link" activeClass="active" to="skills" offset={-15} spy={true}
                                  smooth={true} duration={500} onClick={close}>Skills</Link></li>
                        <li><Link className="link" activeClass="active" to="contact" offset={-15} spy={true}
                                  smooth={true} duration={500} onClick={close}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    );
};

export default Header;


