import React, { Component } from 'react';
import {Header, Landing, AboutMe, Photos, Articles, Footer } from './index';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'Landing'
    }
  }

  selectedView = () => {
    switch (this.state.view) {
      case 'Landing':
        return <Landing />;
      case 'AboutMe':
        return (
          <AboutMe />
        );
      case 'Articles':
        return (
          <Articles />
        );
      case 'Photos':
        return (
          <Photos />
        );
    }
  }

  setView = view => {
    this.setState({view});
  }

  render(){
    return (
      <div id="main-root">
      <div id="content">
          <Header setView={this.setView} />
          <AboutMe />
          <Articles />
          <Photos />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
