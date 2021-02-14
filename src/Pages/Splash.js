import React, { Component } from 'react';
import './landingStyle.css'
import logo from './assests/logo.gif'
import title from './assests/cropped.png'

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
        <a href="http://www.cruisegang.org/#/Home">
            <img id='logo'  src={logo} alt="loading..." />
            <img id='title'  src={title} alt="loading..." />
        </a>
      </div>
    );
  }
}

export default Splash;
