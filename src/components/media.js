import React, { Component } from 'react';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/insta2.svg';
import email from '../assets/email.svg';
import spotify from '../assets/spotify.svg';

class Media extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: ''
    }
  }

  render(){
    return (
      <div id="media-wrapper">
        <a href="mailto:leaceas@gmail.com">
          <img src={email} className="media-img" alt='email-link' />
        </a>
        <a href="https://twitter.com/lea_cea?lang=en">
          <img src={twitter} className="media-img" alt='twitter-link' />
        </a>
        <a href="https://www.linkedin.com/in/leaceasrine/">
          <img src={linkedin} className="media-img" alt='linkedin-link' />
        </a>
      </div>
    )
  }
}

export default Media;

/* NOT USED

Spotify
<a href="https://open.spotify.com/playlist/1bqGMsXL6s0qzVeAF4BXKN">
          <img src={spotify} className="media-img" alt='spotify-link' />
          </a>

Instagram
<a href="https://www.instagram.com/lelemodern/?hl=ur">
          <img src={instagram} className="media-img" alt='instagram-link' />
          </a>
*/
