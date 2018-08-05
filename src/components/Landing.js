import React, { Component } from 'react';

class Landing extends Component {
  render(){
    return(
      <div>
        <section className="hero is-fullheight is-primary is-bold">
          <div className="hero-body landing-hero">
            <div className="container has-text-centered">
              <h1 className="is-size-1 has-text-weight-bold">Find yoga instructors in London</h1>
              <a className="button is-primary is-rounded is-medium">See yogis</a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title">See instructors nearby</h1>
            <h2 className="subtitle">
              Here are the yogis in your area.
            </h2>
          </div>
        </section>
      </div>
    )
  }

}


export default Landing;
