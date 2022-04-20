import React from 'react';

import econotravel from "../../assets/img/econotravel.png";
import goHome from "../../assets/img/goHome.png";
import legacyGames from "../../assets/img/legacyGames.png";
import libritos from "../../assets/img/libritos.png";
import paginaDeEquipo from "../../assets/img/paginaDeEquipo.png";
import quieroTrabajo from "../../assets/img/quieroTrabajo.png";
import toDoList from "../../assets/img/toDoList.png";
import wheelOfDoom from "../../assets/img/wheelOfDoom.png";
import coders from "../../assets/img/coders.png";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


export const Projects = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <container className="carousel-container">
            <div className="Tech-title projects">
                <h2>PROJECTS</h2>
                <Carousel responsive={responsive} swipeable={false}
                          draggable={true}
                          showDots={false}
                          ssr={true} // means to render carousel on server-side.
                          infinite={true}
                          autoPlaySpeed={3000}
                          keyBoardControl={true}
                          customTransition="all .5"
                          transitionDuration={500}
                          containerClass="carousel-container"
                          removeArrowOnDeviceType={["tablet", "mobile"]}
                          dotListClass="custom-dot-list-style"
                          itemClass="carousel-item-padding-40-px"
                >


                    <div><img src={econotravel} className="img-container" alt={econotravel}/></div>
                    <div><img src={goHome} alt={goHome}/></div>
                    <div><img src={legacyGames} alt={legacyGames}/></div>
                    <div><img src={libritos} alt={libritos}/></div>
                    <div><img src={paginaDeEquipo} alt={paginaDeEquipo}/></div>
                    <div><img src={quieroTrabajo} alt={quieroTrabajo}/></div>
                    <div><img src={toDoList} alt={toDoList}/></div>
                    <div><img src={wheelOfDoom} alt={wheelOfDoom}/></div>
                    <div><img src={coders} alt={coders}/></div>

                </Carousel>
            </div>
        </container>
    );
};

