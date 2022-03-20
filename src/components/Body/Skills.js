import React from 'react';
import "./Tech.css";
import Wp from "../../assets/img/wordpress.png"
import Elem from "../../assets/img/elementor.png"
import Power from "../../assets/img/powershell.png"
import Woo from "../../assets/img/woocommerce.png"
import Figma from "../../assets/img/figma.png"
import Cpanel from "../../assets/img/Cpanel.png"
import Hard from "../../assets/img/motherboard.png"
import Mail from "../../assets/img/mailchimp.jpg"
import Post from "../../assets/img/PostgreSQL.png"
import Dokan from "../../assets/img/dokan.png"



export const Skills = () => {
    return (
        <div className="Tech-title">
            <h2>SKILLS</h2>
            <div className="Tech-icons">
                <span className="icon-span"><img src={Wp} className="tech-img" alt="Wordpress"/></span>
                <span className="icon-span"><img src={Elem} className="tech-img" alt="Elementor"/></span>
                <span className="icon-span"><img src={Power} className="tech-img" alt="Powershell"/></span>
                <span className="icon-span"><img src={Woo} className="tech-img" alt="Woocommerce"/></span>
                <span className="icon-span"><img src={Figma} className="tech-img" alt="Figma"/></span>
            </div>
            <div className="Tech-icons">
                <span className="icon-span"><img src={Cpanel} className="tech-img1" alt="Cpanel"/></span>
                <span className="icon-span"><img src={Hard} className="tech-img" alt="Hardware"/></span>
                <span className="icon-span"><img src={Mail} className="tech-img" alt="Mailchimp"/></span>
                <span className="icon-span"><img src={Post} className="tech-img" alt="Postgresql"/></span>
                <span className="icon-span"><img src={Dokan} className="tech-img" alt="Dokan"/></span>
            </div>
        </div>

    );
};
