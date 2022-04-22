import React from "react";

import "./App.css";
import Header from "./components/Navbar/Header";
import {Home} from "./components/Home/Home";
import Tech from "./components/skills/Tech";
import Skills from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contact} from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {


    return (


        <div className="App">

            <Header/>
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