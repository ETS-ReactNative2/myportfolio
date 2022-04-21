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
import './Projects.css'
import * as icon from '../../assets/img/techImg';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


export const Projects = () => {


    const projects = [
        {
            name: 'Econotravel',
            image: econotravel,
            description: 'Econotravel is an eco-friendly travel agency that offers trips and experiences all around Catalonia.',
            stack: [icon.github, icon.springboot, icon.figma, icon.git, icon.js, icon.java, icon.react, icon.css],
            github: 'https://github.com/desimorenoh/bftp2-econotravel-client',
            demo: ''
        },
        {
            name: 'Go Home',
            image: goHome,
            description: 'Go Home is a marketplace for the real estate sector. Finalist project of the Hackathon F5.',
            stack: [icon.github, icon.springboot, icon.git, icon.js, icon.java, icon.css, icon.bootstrap, icon.heroku],
            github: 'https://github.com/desimorenoh/goHome',
            demo: 'https://gohomehackaton2022.herokuapp.com/'
        },
        {
            name: 'Legacy Games',
            image: legacyGames,
            description: 'Online catalog for a video-game store to view and administrate commodities.',
            stack: [icon.github, icon.springboot, icon.git, icon.bootstrap, icon.java, icon.html, icon.css],
            github: 'https://github.com/desimorenoh/legacygames',
            demo: ''
        },
        {
            name: 'Libritos',
            image: libritos,
            description: 'Online catalog for a book store to view and administrate stock',
            stack: [icon.github, icon.springboot, icon.git, icon.bootstrap, icon.java, icon.html, icon.css],
            github: 'https://github.com/desimorenoh/libritos',
            demo: ''
        },
        {
            name: 'Mujeres Full Stack',
            image: paginaDeEquipo,
            description: 'my first project to show off the work team',
            stack: [icon.github, icon.html, icon.css],
            github: 'https://github.com/desimorenoh/bftp2-project1-group5',
            demo: 'https://mujeresfullstack.netlify.app/'
        },
        {
            name: 'Fundación Quiero Trabajo',
            image: quieroTrabajo,
            description: 'Project to manage the stock of donations for Fundación Quiero Trabajo',
            stack: [icon.github, icon.html, icon.css, icon.react, icon.heroku, icon.git, icon.springboot, icon.figma, icon.java],
            github: 'https://github.com/desimorenoh/bftp2-project1-group5',
            demo: 'https://bftp2-fqt-grupo1.herokuapp.com/'
        },
        {
            name: 'To Do List',
            image: toDoList,
            description: '',
            stack: [icon.github, icon.react, icon.css],
            github: 'https://github.com/desimorenoh/toDoList',
            demo: 'https://desimorenotodolist.netlify.app/'
        },
        {
            name: 'Wheel Of Doom',
            image: wheelOfDoom,
            description: 'Wheel of Doom allows you to pick a random name out of a given list without the same name coming up twice until all the names have been chosen.',
            stack: [icon.github, icon.html, icon.css, icon.js],
            github: 'https://github.com/desimorenoh/JS_proyecto_grupo3',
            demo: 'https://wheelofdoom.netlify.app/'
        },
        {
            name: 'Coders',
            image: coders,
            description: 'Wheel of Doom allows you to pick a random name out of a given list without the same name coming up twice until all the names have been chosen.',
            stack: [icon.github, icon.html, icon.css, icon.java, icon.springboot],
            github: 'https://github.com/desimorenoh/coders',
            demo: ''
        }]

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

                    {projects.map(project =>
                        (<div className="project-img"><img src={project.image} className="img-container" alt={project.name}/></div>)
                        )}


                </Carousel>
            </div>
        </container>
    );
};

export default Projects
