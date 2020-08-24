import React, { Component } from 'react';
import SplashGrid from './SplashGrid';
import './landingStyle.css'
import logo from './logo.gif'

class Splash extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <div class='example'>
        <a href="http://localhost:3000/#/Home">
            <img id='logo'  src={logo} alt="loading..." />
        </a>
      </div>
    );
  }
}

export default Splash;
// <a href="http://localhost:3000/#/Home"><h1>Enter Site</h1></a>

//
//
