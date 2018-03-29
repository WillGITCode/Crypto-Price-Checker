import React, { Component } from 'react'
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
          <button className="main-btn active" onClick={this.props.goToPlaceHolder}>Create account and track ALL your Crypto currencies</button>
          <button className="main-btn" onClick={this.props.goBack}>Or Check Another Investment</button>
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


