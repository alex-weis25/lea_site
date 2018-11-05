import React, { Component } from 'react';

class SectionHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      temp: ''
    }
  }

  render(){
    return (
      <div id="section-header-wrapper">
        <div id="section-header-text">
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default SectionHeader;
