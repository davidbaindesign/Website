import React, { Component } from 'react';
import logo from './img/baindesign.png';

export class Header extends Component {


  render() {

    return (
      <div>
      <header>
        <img className='logo' src={logo} alt='Bain Design' />
        <div className='button-container'>
          {this.props.checked ? <button className={(this.props.lastClick === 'left' ? 'fa fa-arrow-circle-left nav red' : 'fa fa-arrow-circle-left nav')} onClick={() => this.props.navigate('Left') }></button> : <button onClick={() => this.props.state('Home')} className={(this.props.current === 'Home' ? 'red' : '')}>Home</button>}
          {this.props.checked ? <button className={(this.props.lastClick === 'right' ? 'fa fa-arrow-circle-right nav red' : 'fa fa-arrow-circle-right nav')} onClick={() => this.props.navigate('Right')}></button> : <button onClick={() => this.props.state('Resume')} className={(this.props.current === 'Resume' ? 'red' : '')}>Resume</button>}
          {this.props.checked ? <button className={(this.props.lastClick === 'down' ? 'fa fa-arrow-circle-down nav red' : 'fa fa-arrow-circle-down nav')} onClick={() => this.props.navigate('Down')}></button> : <button onClick={() => this.props.state('Portfolio')} className={(this.props.current === "Portfolio" ? 'red' : '')}>Portfolio</button>}
          {this.props.checked ? <button className={(this.props.lastClick === 'up' ? 'fa fa-arrow-circle-up nav red' : 'fa fa-arrow-circle-up nav')} onClick={() => this.props.navigate('Up')}></button> : <button onClick={() => this.props.state('Contact')} className={(this.props.current === "Contact" ? 'red' : '')}>Contact</button>}
        </div>
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onClick={() => this.props.toggle()} checked={this.props.checked}></input>
            <span className="slider round"></span>
          </label>
        </div>
        <h1 id="activity-title">{this.props.current}</h1>
      </header>
      <section className="divider"></section>
      <section className="content-header">
      </section>
      </div>
    );
  }
}
