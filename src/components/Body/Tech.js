import React from 'react';
import "./Tech.css";
import Html from "../../assets/img/html5.png"
import Css from "../../assets/img/css-3.png"
import Js from "../../assets/img/js.png"
import Jquery from "../../assets/img/jquery-4.svg"
import react from "../../assets/img/atom.png"
import Spring from "../../assets/img/springboot.png"
import Gradle from "../../assets/img/gradle.png"
import Node from "../../assets/img/nodejs.png"
import VsCode from "../../assets/img/vscode.png"
import Mocha from "../../assets/img/mocha.png"
import Postman from "../../assets/img/postman.svg"
import Bootstrap from "../../assets/img/bootstrap.png"
import JUnit from "../../assets/img/junit.png"
import Github from "../../assets/img/github.png"
import Java from "../../assets/img/java.png"


export const Tech = () => {
    return (
        <div className="Tech-title">
            <h2>TECH</h2>
            <div className="Tech-icons">
                <span className="icon-span"><img src={Html} className="tech-img" alt="html"/></span>
                <span className="icon-span"><img src={Css} className="tech-img" alt="Css"/></span>
                <span className="icon-span"><img src={Js} className="tech-img" alt="Js"/></span>
                <span className="icon-span"><img src={Jquery} className="tech-img" alt="Jquery"/></span>
                <span className="icon-span"><img src={react} className="tech-img" alt="react"/></span>
            </div>
            <div className="Tech-icons">
                <span className="icon-span"><img src={Java} className="tech-img" alt="Java"/></span>
                <span className="icon-span"><img src={Spring} className="tech-img" alt="Spring"/></span>
                <span className="icon-span"><img src={Gradle} className="tech-img1" alt="Gradle"/></span>
                <span className="icon-span"><img src={Node} className="tech-img" alt="Node"/></span>
                <span className="icon-span"><img src={VsCode} className="tech-img" alt="VsCode"/></span>
            </div>

            <div className="Tech-icons">
                <span className="icon-span"><img src={Mocha} className="tech-img1" alt="Mocha"/></span>
                <span className="icon-span"><img src={Postman} className="tech-img" alt="Postman"/></span>
                <span className="icon-span"><img src={Bootstrap} className="tech-img" alt="Bootstrap"/></span>
                <span className="icon-span"><img src={JUnit} className="tech-img1" alt="JUnit"/></span>
                <span className="icon-span"><img src={Github} className="tech-img" alt="Github"/></span>
            </div>
        </div>

    );
};

