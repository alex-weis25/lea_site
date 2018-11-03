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
      <div id="sectionHeader-wrapper">
        <div id="sectionHeader-text">
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default SectionHeader;
