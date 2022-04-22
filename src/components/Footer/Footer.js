import * as React from 'react';
import "./Footer.css";
import Github from "../../assets/img/icons/github.png";
import Linkedin from "../../assets/img/icons/linkedin.png";
import Email from "../../assets/img/icons/email.png";


const Footer = () => {
    return (
        <footer>
            <div className="findMe-icons">
                <div className="socialMedia">
                    <a href="https://github.com/desimorenoh" target="_blank" rel="noreferrer">
                        <img className="socialMedia"  alt="github icon" src={Github}/>
                    </a>
                    <a href="https://linkedin.com/in/md-morenoh" target="_blank" rel="noreferrer">
                        <img className="socialMedia" alt="linkedin icon" src={Linkedin}/>
                    </a>
                    <a href="mailto:desimorenoh@gmail.com" target="_blank" rel="noreferrer">
                        <img className="socialMediaM" alt="mail-icon" src={Email}/>
                    </a>
                </div>
                <p>Made by Desirée Moreno © 2022</p>
            </div>
        </footer>
    )

}

export default Footer