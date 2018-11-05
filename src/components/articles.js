import React, { Component } from 'react';
import { SectionHeader } from './index';
import { content } from '../Content';


class Articles extends Component {
  render() {
    return (
      <div id="Articles" className="section-wrapper">
        <SectionHeader text="Articles" />
        <div id="article-content-wrapper">
          { content && content.map(story => {
            return (
              <div id="story-wrapper">
                <div id="story-title">
                {story.title}
                </div>
                <div>
                <img src={story.img} className="story-img" alt='email-link' />
                </div>
                <div>
                  {story.snippet}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Articles;
