import React, { Component } from 'react';

import {home} from './data.js';

let newStyle = {left: '50%'};

let paragraphs = home.text.map((item, index) => (
  <p key={'"homeText-' + index + '"'}>{item}</p>
));

export class Home extends Component {

  componentWillReceiveProps (newProps) {

    if(newProps.current === 'Home') {
      newStyle = {left: '50%', top: '0'};
    }
    else if (newProps.current === 'Resume') {
      newStyle = {left: -(document.documentElement.clientWidth * 2), top: '0'};
    }
    else if (newProps.current === 'Portfolio') {
      newStyle = {left: -(document.documentElement.clientWidth * 4), top: '0'};
    }
    else if (newProps.current === 'Contact') {
      newStyle = {left: -(document.documentElement.clientWidth * 6), top: '0'};
    }
  }

  render() {



    return (
      <div className="content" style={newStyle}>
        <div className = "text">
        <h1>Home</h1>
          {paragraphs}
        </div>
      </div>
    );
  }
}
