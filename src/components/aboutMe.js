import React, { Component } from 'react';
import { SectionHeader } from './index';

class AboutMe extends Component {
  render() {
    return (
      <div id="AboutMe" className="section-wrapper">
        <SectionHeader text="About Me" />
        <div className='section-text'>
          Leba deeba
        </div>
      </div>
    );
  }
}

export default AboutMe;
