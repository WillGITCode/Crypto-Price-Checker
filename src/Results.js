import React, { Component} from 'react'

export default class Results extends Component {

  // componentDidMount(){
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // }
  
  render () {
    const {percent, newCP, newSP} = this.props.globalState.totalStatus
    return (<section id="results">
      <div className="container">
        <div className="col-md-12">
          <div className="ads">
            <ins className="adsbygoogle"
                style={{"display": "block"}}
                data-ad-client="ca-pub-2259939651078522"
                data-ad-slot="8903129752"
                data-ad-format="auto">
            </ins>
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
            <ins className="adsbygoogle"
                style={{"display": "block"}}
                data-ad-client="ca-pub-2259939651078522"
                data-ad-slot="8903129752"
                data-ad-format="auto">
            </ins>
          </div>
        </div>
      </div>
    </section>)
  }
}


