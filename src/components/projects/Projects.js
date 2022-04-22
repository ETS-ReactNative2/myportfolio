import React, {useState} from 'react';

import econotravel from "../../assets/img/projectsImg/econotravel.png";
import goHome from "../../assets/img/projectsImg/goHome.png";
import legacyGames from "../../assets/img/projectsImg/legacyGames.png";
import libritos from "../../assets/img/projectsImg/libritos.png";
import paginaDeEquipo from "../../assets/img/projectsImg/paginaDeEquipo.png";
import quieroTrabajo from "../../assets/img/projectsImg/quieroTrabajo.png";
import toDoList from "../../assets/img/projectsImg/toDoList.png";
import wheelOfDoom from "../../assets/img/projectsImg/wheelOfDoom.png";
import coders from "../../assets/img/projectsImg/coders.png";
import './Projects.css'
import * as icon from '../../assets/img/icons/techImg';
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


    const [showHoverLayer, setShowHoverLayer] = useState(false);
    return (
        <container className="carousel-container">
            <div className="Tech-title projects">
                <h2>PROJECTS</h2>
                <Carousel responsive={responsive} infinite={true} showDots={false}
                          autoPlaySpeed={4000}
                          keyBoardControl={true}
                          transitionDuration={600} showThumbs={false}>


                    {projects.map(project =>
                        (<div className="project-img" onMouseEnter={() => setShowHoverLayer(true)}
                              onMouseLeave={() => setShowHoverLayer(false)}><img src={project.image} className="img-container" alt={project.name}/>

                            {showHoverLayer && <div className="hover-layer">
                                <h1>{project.name}</h1>
                                <br/>
                                <p>Stack used:</p>
                                <div className="stack-icons">{project.stack}</div>


                                            <a target="_blank" rel="noreferrer" href={project.github}>
                                                <button className="cssbuttons-io-button"> GitHub
                                                    <div className="icon">
                                                        <svg height="24" width="24" viewBox="0 0 24 24"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            </a>

                                            {project.demo && <a target="_blank" rel="noreferrer" href={project.demo}>
                                                <button className="cssbuttons-io-button"> Demo
                                                    <div className="icon">
                                                        <svg height="24" width="24" viewBox="0 0 24 24"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            </a>}

                                    </div>}
                            </div>
                        )
                    )}


                </Carousel>
            </div>
        </container>
    );
};

export default Projects
