import React, { Component, PropTypes } from 'react'
import GoogleAd from './GoogleAd.js'

export default class Results extends Component {



  render () {
    const {percent, newCP, newSP} = this.props.globalState.totalStatus
    return (<section id="results">
      <div className="container">
        <div className="col-md-12">
          <div className="ads">
            <GoogleAd />
          </div>
        </div>
        <div className="col-md-12">
          <h3>Your ${newCP} investment is now</h3>
          <h1>${newSP}</h1>
          <h4>Your at {this.props.globalState.gainDirection}{percent}% Gainz!</h4>
          <a href="#" className="main-btn active">Create account and track ALL your Crypto currencies</a>
          <a href="#" className="main-btn" onClick={this.props.goBack}>Or Check Another Investment</a>
        </div>
        <div className="col-md-12">
          <div className="ads">
            <GoogleAd />
          </div>
        </div>
      </div>
    </section>)
  }
}


