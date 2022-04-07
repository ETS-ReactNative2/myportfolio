import React, {Component} from "react";
import BackToTop from "react-back-to-top";
import "./App.css";
import Navbar from "./components/Navbar/Index";
import {Home} from "./components/Body/Home";
import {Tech} from "./components/Body/Tech";
import {Skills} from "./components/Body/Skills";
import {Projects} from "./components/Body/Projects";
import {Contact} from "./components/Body/Contact";
import Footer from "./components/Footer/Footer";
import BacktoTop from "../src/assets/img/chevron-upwards-arrow.png";


function App() {


    return (


        <div className="App">

            <Navbar/>
            <Home/>
            <Tech/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>

    )
        ;
}

export default App;