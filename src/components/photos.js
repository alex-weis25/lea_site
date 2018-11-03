import React, { Component } from 'react';
import { SectionHeader } from './index';

class Photos extends Component {
  render() {
    return (
      <div id="Photos" className="section-wrapper">
      <SectionHeader text="Photos" />
      <div className='section-text'>
        Please Send Selfie
      </div>
      </div>
    );
  }
}

export default Photos;
