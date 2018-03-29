import React, { Component} from 'react'

export default class PlaceHolderPage extends Component{

    render(){
        return (<section id="placeholder">
            <h2>Sorry! This page is under construction</h2>
            <h3>Feel free to use the basic features as this site is upgraded</h3>

            <div className="col-md-6">
                <img src="/img/bitcoin-logo.png"  alt="bitcoin-logo" className="bitcoin-logo" />
            </div>

        </section>)
    }
}