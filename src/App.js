import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Index";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Body/Home";
import {Tech} from "./components/Body/Tech";
import {Skills} from "./components/Body/Skills";
import {Projects} from "./components/Body/Projects";
import {Contact} from "./components/Body/Contact";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path="/tech" element={<Tech/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;