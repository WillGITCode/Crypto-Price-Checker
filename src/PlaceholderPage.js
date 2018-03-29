import React, { Component} from 'react'

export default class PlaceHolderPage extends Component{

    render(){
        return (<section id="placeholder">
            <div className="container">
                <h1>Sorry! This page is under construction</h1>
                <h3>Feel free to use the basic features while this site is upgraded</h3>

                <div className="col-md-6">
                    <img src="/img/bitcoin-logo.png"  alt="bitcoin-logo" className="bitcoin-logo" />
                </div>

                <div className="col-md-12">
                    <button className="main-btn" onClick={this.props.goBack}>Check Another Investment</button>
                </div>
            </div>
        </section>)
    }
}