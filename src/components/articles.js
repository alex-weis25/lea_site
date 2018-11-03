import React, { Component } from 'react';
import { SectionHeader } from './index';

class Articles extends Component {
  render() {
    return (
      <div id="Articles" className="section-wrapper">
        <SectionHeader text="Articles" />
        <div className='section-text'>
          Hellooooo
        </div>
      </div>
    );
  }
}

export default Articles;
