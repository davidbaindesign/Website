import React, { Component } from 'react';



export class Background extends Component {

  componentDidMount() {
    const canvas = document.getElementById('background');
    const topCanvas = document.getElementById('top');
    const middleCanvas = document.getElementById('middle');
    const cloudCanvas = document.getElementById('clouds');

    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let x;
    let y;
    let r;
    let radius;
    Math.TAU = Math.PI * 2;

    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);

    cloudCanvas.setAttribute("width", width);
    cloudCanvas.setAttribute("height", height);

    topCanvas.setAttribute("width", width*4);
    topCanvas.setAttribute("height", height*4);

    middleCanvas.setAttribute("width", width*4);
    middleCanvas.setAttribute("height", height*4);



    class StarMaker {
      constructor(canvas, size, howMany) {
        this.ctx = canvas.getContext('2d'),
        this.size = size,
        this.howMany = howMany,
        this.canvas = canvas
      }

      starCreate() {

        let width = this.canvas.width;
        let height = this.canvas.height;

        this.ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < this.howMany; i++ ) {

           this.ctx.beginPath();

           this.ctx.fillStyle="#fff";

           x = Math.floor(Math.random() * width);
           y = Math.floor(Math.random() * height);

           radius = Math.floor(Math.random() * 3) + this.size;

           this.ctx.arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle

           this.ctx.fill();

          }
      }
    }

    let layer1 = new StarMaker(canvas, 1, 400);
    let layer3 = new StarMaker(middleCanvas, 3, 350);
    let layer4 = new StarMaker(topCanvas, 4, 150);

    layer1.starCreate();
    layer3.starCreate();
    layer4.starCreate();

    let layer2 = () => {

      let ctx = cloudCanvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);
      let color;
      let o;

      for (let i = 0; i < 60; i++) {

        ctx.beginPath();
        //o = Math.floor(Math.random() * 3) + 1;
        o = 2;
        x = Math.floor(Math.random() * width);
        y = Math.floor(Math.random() * height);
        r = Math.floor(Math.random() * 500) + 50;

        if (r > 200) {
          color = 0;
        }
        else {
          color = 200;
        }
        let grd = ctx.createRadialGradient(x, y, 0, x, y, r);
        grd.addColorStop(0, 'rgba(255,' + color + ',' + color +', 0.' + o +')');
        grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = grd;

        ctx.arc(x, y, r, 0, Math.TAU);
        ctx.fill();
        ctx.closePath();
      }
    }

    layer2();

    document.getElementsByTagName("BODY")[0].onresize = () => {
      let width = document.body.clientWidth;
      let height = document.body.clientHeight;

      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);

      cloudCanvas.setAttribute("width", width);
      cloudCanvas.setAttribute("height", height);

      middleCanvas.setAttribute("width", width*2);
      middleCanvas.setAttribute("height", height*2);

      topCanvas.setAttribute("width", width*2);
      topCanvas.setAttribute("height", height*2);

      layer1.starCreate();
      layer2();
      layer3.starCreate();
      layer4.starCreate();
    };
  }


  render() {
    let style;
    let style2;
    let left;
    let top = this.props.y/25;

    if (this.props.current === 'Home') {
      left = 9 + (this.props.x/25);
      style = {left: left + '%', top: top + '%'};
      style2 = {left: left/2 + '%', top: top/2 + '%'};
    }
    else if (this.props.current === 'Resume') {
      left = 6 + (this.props.x/25);
      style = {left: left + '%', top: top + '%'};
      style2 = {left: left/2 + '%', top: top/2 + '%'};
    }
    else if (this.props.current === 'Portfolio') {
      left = 3 + (this.props.x/25);
      style = {left: left + '%', top: top + '%'};
      style2 = {left: left/2 + '%', top: top/2 + '%'};
    }
    else {
      left = 0 + (this.props.x/25);
      style = {left: left + '%', top: top + '%'};
      style2 = {left: left/2 + '%', top: top/2 + '%'};
    }




    return (
      <div className="body">
        <canvas style={style} id="top" className={this.props.manual ? "" : "transition"}>
        </canvas>
        <canvas style={style2} id="middle" className={this.props.manual ? "" : "transition"}>
        </canvas>
        <canvas id="clouds">
        </canvas>
        <canvas id="background">
        </canvas>
      </div>
    );
  }
}
