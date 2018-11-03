import React, { Component } from 'react';
import { Media } from './index';

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
        <div id="header-left">
          <Media />
        </div>
        <div id="header-right">
          <div id="header-title" onClick={() => {this.props.setView('Landing')}}>
            Lea Carolina Ceasrine
          </div>
          <div id="header-content-wrapper">
            <div className="header-text" onClick={() => initScroll("AboutMe")}>About Lea</div>
            <div className="header-text" onClick={() => initScroll("Articles")}>Articles</div>
            <div className="header-text" onClick={() => initScroll("Photos")}>Photos</div>
          </div>
        </div>
      </div>
    )
  }
}

let marginY = 0;
let destination = 0;
let speed = 20;
let scroller = null;

const initScroll = elementId => {
  destination = document.getElementById(elementId).offsetTop;
  scroller = setTimeout(() => {
    initScroll(elementId);
  }, 1);
  marginY += speed;
  if (marginY >= destination) {
    clearTimeout(scroller);
    destination = 0;
    marginY = 0;
  } else {
    window.scroll(0, marginY);
  }
};

const toTop = elementId => {
  destination = document.getElementById(elementId).offsetTop;
  scroller = setTimeout(() => {
    initScroll(elementId);
  }, 1);
  marginY -= speed;
  if (marginY <= 0) {
    clearTimeout(scroller);
  }
  window.scroll(0, marginY);
};


export default Header;
