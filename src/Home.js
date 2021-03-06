import React, { Component} from 'react'
import DatePicker from 'react-datepicker'
import { Debounce } from 'react-throttle'

export default class Home extends Component {
  
  render () {
    return (<section id="home">
      <div className="container">
        <div className="col-md-6">
          <img src="/img/bitcoin-logo.png"  alt="bitcoin-logo" className="bitcoin-logo" />
        </div>

        <div className="col-md-6">
          <h2>Enter Transaction</h2>
          <label>Coin</label>
          
          <Debounce time="500" handler="onChange">
            <input 
              type="text" 
              name="coin" 
              onChange={this.props.onCoinChange} 
              defaultValue={this.props.globalState.coin}
              />
          </Debounce>

          <label>Amount</label>
          <input type="text" name="amount" onChange={this.props.onInputChange} value={this.props.globalState.cryptoAmount} />
          <label>Date</label>
          <DatePicker selected={this.props.globalState.date} onChange={this.props.handleDateChange} />
          <button type="submit" onClick={this.props.apiCall}>Check Gainz</button>
        </div>
      </div>
    </section>)
  }
}


