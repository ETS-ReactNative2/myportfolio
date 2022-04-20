import React from "react";

import "./App.css";
import Header from "./components/Navbar/Header";
import {Home} from "./components/Body/Home";
import Tech from "./components/Body/Tech";
import Skills from "./components/Body/Skills";
import {Projects} from "./components/Body/Projects";
import {Contact} from "./components/Body/Contact";
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