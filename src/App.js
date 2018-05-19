import React, { Component } from 'react';


import {Header} from './header';
import {Footer} from './footer';

import {Load} from './load';
import {AppContainer} from './appContainer';
import {Background} from './background';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "Home",
      x: 0,
      y: 0,
      manual: false,
      load: false,
      speedArr: [0,0,0,0]
     };
    this.stateChange = this.stateChange.bind(this);
    this.navigateClick = this.navigateClick.bind(this);
    this.speed = this.speed.bind(this);
    this.manualAuto = this.manualAuto.bind(this);
  }

  manualAuto () {
    if (this.state.manual) {
      this.setState(
        {
          manual: false
        }
      );
    }
    else {
      this.setState(
        {
          manual: true
        }
      );
    }
  }

  stateChange(current) {
    this.setState(
      {
        current:  current,
        x: 0,
        y: 0,
        speedArr: [0,0,0,0]
     }
    );
  }

  speed() {
    //up right down left
    //maybe recursion would be better than interval

    if (this.state.speedArr[0] !== this.state.speedArr[2] || this.state.speedArr[3] !== this.state.speedArr[1]) {

      let x = this.state.x;
      let y = this.state.y;

      this.setState(
        {
          x: x + (this.state.speedArr[3] - this.state.speedArr[1]),
          y: y + (this.state.speedArr[0] - this.state.speedArr[2])
       }
      );
    }

  }


  navigateClick(direction) {

    //speedX speedY
          if (direction === "Up") {
            this.setState(
            {
                speedArr: [this.state.speedArr[0] +1, this.state.speedArr[1], this.state.speedArr[2], this.state.speedArr[3]]
            });
          }
          else if (direction === "Right") {
            this.setState(
            {
                speedArr: [this.state.speedArr[0], this.state.speedArr[1] +1, this.state.speedArr[2], this.state.speedArr[3]]
            });
          }
          else if (direction === "Down") {
            this.setState(
            {
                speedArr: [this.state.speedArr[0], this.state.speedArr[1], this.state.speedArr[2]+1, this.state.speedArr[3]]
            });
          }
          else if (direction === "Left") {
            this.setState(
            {
                speedArr: [this.state.speedArr[0], this.state.speedArr[1], this.state.speedArr[2], this.state.speedArr[3]+1]
            });
          }
          //this.speed();
  }

  componentDidMount() {
    setInterval(this.speed, 25);
  }

  render() {



    return (

      <div tabIndex="0" className="root">
      <Load loading={this.state.load} />
      <Background x={this.state.x/5} y={this.state.y/5} manual={this.state.manual} current={this.state.current}  />
      <Header speedArr={this.state.speedArr} toggle={this.manualAuto} checked={this.state.manual} state={this.stateChange} current={this.state.current} navigate={this.navigateClick} />
      <div style={{left: this.state.x, top: this.state.y}} className="container" id="container">
        <AppContainer current={this.state.current} />
      </div>

      <Footer/>
      </div>


    );
  }
}

export default App;
