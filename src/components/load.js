import React, { Component } from 'react';

export class Load extends Component {


  render() {

    if (this.props.loading) {

      return (
        <div className="overlay-container" id="loading">
          <div className="overlay">
            <section className="loading">
              <i className="fa fa-spinner fa-pulse"></i>
            </section>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}
