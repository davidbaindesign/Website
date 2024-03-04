import React, { Component } from 'react';

export class Footer extends Component {


  render() {

    return (
      <footer>
        <div className="footer">
          <a href="https://github.com/davidbaindesign" target="_new"><button className="sideButtons"><i className="fa fa-github"></i></button></a>
          <a href="http://codepen.io/davidbaindesign/" target="_new"><button className="sideButtons"><i className="fa fa-codepen"></i></button></a>
          <a href="https://www.freecodecamp.com/davidbaindesign" target="_new"><button className="sideButtons"><i className="fa fa-fire"></i></button></a>
          <a href="https://www.linkedin.com/in/david-bain-74465b54" target="_new"><button className="sideButtons"><i className="fa fa-linkedin"></i></button></a>
          <span>&copy; 2020 David Bain Design – All rights reserved.</span>
        </div>
      </footer>
    );
  }
}
