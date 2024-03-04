import React, { Component } from 'react';

import {resume} from './data.js';

let education = resume[0];

education.text = education.text.map((item, index) => (
  <p key={'"eduText-' + index + '"'}>{item}</p>
));

let achievements = resume[1];

achievements.text = achievements.text.map((item, index) => (
  <li key={'"achText-' + index + '"'}>{item}</li>
));

let skills = resume[2];


skills.skills = skills.skills.map((item, index) => (

  <div key={'"skills-' + index + '"'} className="skills"><div className="language">{item.skill}</div><div style={{width: item.years * 4 + "%"}} className="meter"></div><div className ="years">{(item.years > 1) ? item.years + ' years' : item.years + ' year' }</div></div>
));

let experience = resume[3];


let experienceTitle = experience.experience.map((item, index) => (
  item.title.map((title, index1) => (
    <p key={'"exTitle-' + index1 + '"'}><strong>{title}</strong></p>
  ))
));

let experienceText = experience.experience.map((item, index) => (
  item.text.map((text, index1) => (
    <li key={'"exText-' + index1 + '"'}>{text}</li>
  ))
));

let exArr = [];
for (let i = 0; i < experienceTitle.length; i ++) {
  exArr.push(experienceTitle[i]);
  exArr.push(<ul key={'"exTextWrap-' + i + '"'}>{experienceText[i]}</ul>);
}

let references = resume[4];


references.references = references.references.map((item, index) => (
  <div key={'"refText-' + index + '"'}><p><strong>{item.name}</strong></p><p>{item.text}</p><p>{item.contact}</p><br /></div>
));


let newStyle = {left: document.documentElement.clientWidth * 2};


export class Resume extends Component {

  componentWillReceiveProps (newProps) {

    if(newProps.current === 'Resume') {
      newStyle={left: '50%', top: '0'};
    }
    else if (newProps.current === 'Home') {
      newStyle = {left: document.documentElement.clientWidth * 2, top: '0'};
    }
    else if (newProps.current === 'Portfolio') {
      newStyle = {left: -(document.documentElement.clientWidth * 2), top: '0'};
    }
    else if (newProps.current === 'Contact') {
      newStyle = {left: -(document.documentElement.clientWidth * 4), top: '0'};
    }
  }

  render() {
    //alert(newClass);
    return (
      <div className="content" style={newStyle}>
        <div className = "text">
        <h1>Resume</h1>
          <h4>{education.title}</h4>
          <div className="smallText">{education.text} </div>
          <h4>{achievements.title}</h4>
          <ul className="smallText">{achievements.text} </ul>
            <h4>{skills.title}</h4>
          <div className= "skillsContainer">
            {skills.skills}
          </div>
          <h4>{experience.title}</h4>
          <div className="smallText">
          {exArr}
          </div>
          <h4>{references.title}</h4>
          <div className="smallText">
          {references.references}
          </div>
        </div>
      </div>
    );
  }
}
