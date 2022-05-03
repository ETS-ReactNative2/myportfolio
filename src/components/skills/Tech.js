import React from 'react';
import "./Tech.css";
import * as icon from '../../assets/img/icons/techImg'
import AOS from "aos";


const Tech = () => {
    AOS.init();
    const Tech = [
        {
            image: icon.html,
            name: 'HTML'
        },
        {
            image: icon.css,
            name: 'CSS'
        },
        {
            image: icon.jquery,
            name: 'JQUERY'
        },
        {
            image: icon.js,
            name: 'JAVASCRIPT'
        },
        {
            image: icon.react,
            name: 'REACT'
        },
        {
            image: icon.springboot,
            name: 'SPRINGBOOT'
        },
        {
            image: icon.gradle,
            name: 'GRADLE'
        },

        {
            image: icon.mocha,
            name: 'MOCHA'
        },
        {
            image: icon.postman,
            name: 'POSTMAN'
        },
        {
            image: icon.java,
            name: 'JAVA'
        },
        {
            image: icon.junit,
            name: 'JUNIT'
        },
        {
            image: icon.github,
            name: 'GITHUB'
        },
        {
            image: icon.postgres,
            name: 'POSTGRESQL'
        },
        {
            image: icon.npm,
            name: 'NPM'
        },
        {
            image: icon.node,
            name: 'NODEJS'
        },
        {
            image: icon.bootstrap,
            name: 'BOOTSTRAP'
        },
    ]


    return (
        <section>
            <div className="Tech-title tech" data-aos="fade-left" data-aos-duration="3000">
                <h2>TECH</h2>
                <div className="tech-grid">
                    {Tech.map(Tech =>
                        <div className="tech-card" key={Tech.name}>
                           {Tech.image}
                            <p>{Tech.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}


export default Tech