import React, { Component } from 'react';

import {contact} from './data.js';

let newStyle = {left: document.documentElement.clientWidth * 6};

export class Contact extends Component {

  componentWillReceiveProps (newProps) {

    if(newProps.current === 'Home') {
      newStyle = {left: (document.documentElement.clientWidth * 6), top: '0'};
    }
    else if (newProps.current === 'Resume') {
      newStyle = {left: (document.documentElement.clientWidth * 4), top: '0'};
    }
    else if (newProps.current === 'Portfolio') {
      newStyle = {left: (document.documentElement.clientWidth * 2), top: '0'};
    }
    else if (newProps.current === 'Contact') {
      newStyle = {left: '50%', top: '0'};
    }
  }

  render() {

    return (
      <div className="content" style={newStyle}>
        <div className = "text">
        <h1>Contact</h1>
        <p>{contact.text}</p>
        <form action="mailto:davidbaindesign@gmail.com" method="post">
          <p>Name:</p>
          <input type="text" name="name" /><br />
          <p>E-mail:</p>
          <input type="text" name="mail" /><br />
          <p>Comment:</p>
          <textarea cols="50" rows="21" name="comment"></textarea>
          <br />
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </form>
        </div>
      </div>
    );
  }
}
