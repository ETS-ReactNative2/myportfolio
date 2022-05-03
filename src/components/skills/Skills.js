import React from 'react';
import "./Tech.css";
import * as icon from '../../assets/img/icons/techImg.js';

const Skills = () => {

    const Skills = [

        {
            image: icon.powershell,
            name: 'POWERSHELL'
        },
        {
            image: icon.linux,
            name: 'LINUX'
        },
        {
            image: icon.cpanel,
            name: 'CPANEL'
        },

        {
            image: icon.figma,
            name: 'FIGMA'
        },

        {
            image: icon.mailchimp,
            name: 'MAILCHIMP'
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
            <div className="Tech-title skills">
                <h2>TOOLS</h2>
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