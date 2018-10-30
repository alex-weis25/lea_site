import React, { Component } from 'react';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/insta2.svg';
import email from '../assets/email.svg';
import spotify from '../assets/spotify.svg';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: ''
    }
  }

  render(){
    return (
      <div id="footer-root">
      </div>
    )
  }
}

export default Footer;

/* STORE
<div id="footer-root">
        <div id="footer-wrapper">
        <a href="mailto:leaceas@gmail.com">
        <img src={email} className="footer-img" alt='email-link' />
        </a>
        <a href="https://twitter.com/lea_cea?lang=en">
        <img src={twitter} className="footer-img" alt='twitter-link' />
        </a>
          <a href="https://www.linkedin.com/in/leaceasrine/"><img src={linkedin} className="footer-img" alt='linkedin-link' /></a>
          <a href="https://www.instagram.com/lelemodern/?hl=ur">
          <img src={instagram} className="footer-img" alt='instagram-link' />
          </a>
          <a href="https://open.spotify.com/playlist/1bqGMsXL6s0qzVeAF4BXKN">
          <img src={spotify} className="footer-img" alt='spotify-link' />
          </a>
        </div>
      </div>
*/
