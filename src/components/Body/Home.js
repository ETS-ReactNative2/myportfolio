import React from 'react';
import "../../App.css";
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import hello from "../../assets/img/hello.png";
import laptop from "../../assets/img/ordenador-portatil.gif";

export const Home = () => {

    return (
        <div className="App home">
            <div className="top-section">
                <div className="App-img">
                    <img className="laptop-gif" src={laptop}/>
                </div>
                <div className="App-header">
                    <h2>Hello! <span><img src={hello} className="hello-img" alt="hello"/></span></h2>
                    <h2>I am Desirée Moreno</h2>
                    <h2>Welcome to my Portfolio</h2>
                    <FaHeart/> <FaRegHeart/> <FaHeart/> <FaRegHeart/>
                </div>
            </div>
        </div>
    );

}


