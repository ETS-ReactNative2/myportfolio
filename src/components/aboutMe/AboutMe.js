import React from 'react';
import "./AboutMe.css";
import {FaUmbrellaBeach, FaChild, FaBookReader, FaLaptopCode} from "react-icons/fa";
import {GiTechnoHeart} from "react-icons/gi";
import AOS from "aos";

export const AboutMe = () => {
    AOS.init();
    return (
        <div className="Tech-title aboutMe">
            <h2>ABOUT ME</h2>
        <h3 className="aboutMe" data-aos="zoom-in-up" data-aos-duration="3000">I'm a web developer based in Barcelona - Spain. I'm passionate about technology, continuous learning and enjoying life. In my spare time I enjoy going to the beach, spening time with my son and building my own projects.</h3>
        <GiTechnoHeart/> <FaUmbrellaBeach/> <FaChild/> <FaBookReader/> <FaLaptopCode/>
    </div>


    );
};

