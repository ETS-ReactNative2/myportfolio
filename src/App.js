import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';
import { FaHeart, FaRegHeart} from 'react-icons/fa';
import hello2 from '../src/assets/img/hello2.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Navbar-logo">
              <img src={logo} className="App-logo" alt="logo" />
          </div>
        <div className="App-header">
          <h2>Hello!  <span><img src={hello2} className="hello-img" alt="hello" /></span></h2>
                <h2>I am Desirée Moreno</h2>
            <h2>Welcome to my Portfolio</h2>
            <FaHeart /> <FaRegHeart /> <FaHeart /> <FaRegHeart />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
