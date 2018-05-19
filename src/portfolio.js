import React, { Component } from 'react';

import {portfolio} from './data.js';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return null; });
  return images;
}

export const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));



let newStyle = {left: document.documentElement.clientWidth * 4};

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'none'
     };
   }

  componentWillReceiveProps (newProps) {

    if(newProps.current === 'Home') {
      newStyle = {left: (document.documentElement.clientWidth * 4), top: '0'};
    }
    else if (newProps.current === 'Resume') {
      newStyle = {left: (document.documentElement.clientWidth * 2), top: '0'};
    }
    else if (newProps.current === 'Portfolio') {
      newStyle = {left: '50%', top: '0'};
    }
    else if (newProps.current === 'Contact') {
      newStyle = {left: -(document.documentElement.clientWidth * 2), top: '0'};
    }
  }

  projectShow(i) {
    this.setState(
      {
        show: i
      }
    )
  }

  render() {

    let projects = [];
    let previews = [];
    let text = [];

   for (let i = 0; i < portfolio.projects.length; i ++) {
     projects.push(<div key={'"imgCont-' + i + '"'} className="imageContainer"><img alt={portfolio.projects[i].img} src={images[portfolio.projects[i].img]}/><div className="textOver"><p>{portfolio.projects[i].description}</p><button onClick={() => this.projectShow(i)}>View</button></div></div>)
     previews.push(<div key={'"projCont-' + i + '"'} id={i + '-preview'} dangerouslySetInnerHTML={{__html: portfolio.projects[i].html}} className={(this.state.show === i) ? "preview show" : "preview"}></div>)
   }

   text = portfolio.text.map((item, index) => (
     <p key={'"portText-' + index + '"'}>{item}</p>
   ));

    return (
      <div className="content" style={newStyle}>
        <div className = "text">
        <h1>Portfolio</h1>
        <div>{text}<a href={portfolio.link}>Old Portfolio</a></div>
        <div className="portfolioContainer">
          {projects}
        </div>
        {previews}
        </div>
      </div>
    );
  }
}
