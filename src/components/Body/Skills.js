import React from 'react';
import "./Tech.css";
import * as icon from '../../assets/img/techImg.js';

const Skills = () => {

    const Skills = [
        {
            image: icon.bootstrap,
            name: 'BOOTSTRAP'
        },
        {
            image: icon.cpanel,
            name: 'CPANEL'
        },
        {
            image: icon.dokan,
            name: 'DOKAN'
        },
        {
            image: icon.elementor,
            name: 'ELEMENTOR'
        },
        {
            image: icon.figma,
            name: 'FIGMA'
        },
        {
            image: icon.github,
            name: 'GITHUB'
        },
        {
            image: icon.mailchimp,
            name: 'MAILCHIMP'
        },
        {
            image: icon.motherboard,
            name: 'HARDWARE'
        },

        {
            image: icon.node,
            name: 'NODEJS'
        },
        {
            image: icon.powershell,
            name: 'POWERSHELL'
        },
        {
            image: icon.vscode,
            name: 'VSCODE'
        },
        {
            image: icon.wordpress,
            name: 'WORDPRESS'
        },
        {
            image: icon.woocommerce,
            name: 'WOOCOMMERCE'
        },
    ]


    return (
        <section>
            <div className="Tech-title">
                <h2>SKILLS</h2>
                <div className="tech-grid">
                    {Skills.map(Skills =>
                        <div className="tech-card" key={Skills.name}>
                            {Skills.image}
                            <p>{Skills.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}


export default Skills