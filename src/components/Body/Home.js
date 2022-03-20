import React from 'react';
import "../../App.css";
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import hello from "../../assets/img/hello.png";

export const Home = () => {

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Hello! <span><img src={hello} className="hello-img" alt="hello"/></span></h2>
                    <h2>I am Desirée Moreno</h2>
                    <h2>Welcome to my Portfolio</h2>
                    <FaHeart/> <FaRegHeart/> <FaHeart/> <FaRegHeart/>
                </div>

            </div>
        );

}


