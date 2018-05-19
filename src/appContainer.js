import React, { Component } from 'react';

import {Home} from './home';
import {Resume} from './resume';
import {Portfolio} from './portfolio';
import {Contact} from './contact';

export class AppContainer extends Component {


  render() {



    return (
      <section className="content-container" id="content-container">
        <Home current={this.props.current} />
        <Resume current={this.props.current} />
        <Portfolio current={this.props.current} />
        <Contact current={this.props.current} />
      </section>
    );
  }
}
