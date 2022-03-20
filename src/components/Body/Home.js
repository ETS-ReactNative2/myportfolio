import React from 'react';
import "../../App.css";
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import hello2 from "../../assets/img/hello2.png";

export const Home = () => {

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Hello! <span><img src={hello2} className="hello-img" alt="hello"/></span></h2>
                    <h2>I am Desirée Moreno</h2>
                    <h2>Welcome to my Portfolio</h2>
                    <FaHeart/> <FaRegHeart/> <FaHeart/> <FaRegHeart/>
                </div>

            </div>
        );

}


