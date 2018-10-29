import React, { Component } from 'react';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/insta2.svg';
import email from '../assets/email.svg';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: ''
    }
  }

  render(){
    return (
      <div id="header-root">
        <div id="header-left" onClick={() => {this.props.setView('Landing')}}>
          Lea Ceas...
        </div>
        <div id="header-right">
          <div className="header-text" onClick={() => {this.props.setView('AboutMe')}}>About Lea</div>
          <div className="header-text" onClick={() => {this.props.setView('Articles')}}>Articles</div>
          <div className="header-text" onClick={() => {this.props.setView('Photos')}}>Photos</div>
        </div>
      </div>
    )
  }
}

export default Header;
