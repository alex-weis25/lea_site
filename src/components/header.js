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
            <div className="header-text" onClick={() => {this.props.setView('AboutMe')}}>About Lea</div>
            <div className="header-text" onClick={() => {this.props.setView('Articles')}}>Articles</div>
            <div className="header-text" onClick={() => {this.props.setView('Photos')}}>Photos</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
