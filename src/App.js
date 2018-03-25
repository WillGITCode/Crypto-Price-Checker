import React, { Component} from 'react'
import Home from './Home.js';
import Results from './Results.js';
import moment from 'moment'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'William',
      location: 'Home',
      date: moment(),
      data: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    }
    this.routingSystem = this.routingSystem.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.apiCall = this.apiCall.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  componentWillMount(){
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${moment().unix()}&extraParams=Crypto Gainz`)
      .then((response) => { //arrow function to preserve this
        this.setState({
          btcToday: response.data.BTC
        }, () => {
          console.log(this.state);
        })
      })
      .catch(function (err) {
        console.log(err);
        });
  }

  routingSystem(){
    switch(this.state.location){
      case 'Home':
        return <Home handleDateChange={this.handleDateChange} globalState={this.state} onInputChange={this.onInputChange} apiCall={this.apiCall} />
        break;
      case 'Results':
        return <Results globalState={this.state} goBack={this.goBack}/>
        break;
      default:
        return <Home />
    }
  }

  handleDateChange(date){
    this.setState({
      date: date
    });
  }

  onInputChange(event){
    this.setState({
      cryptoAmount: event.target.value
    })
  }

  apiCall(){
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${this.state.date.unix()}&extraParams=Crypto Gainz`)
      .then((response) =>{ //arrow function to preserve this
        this.setState({
          data: response.data.BTC
        }, () => {
          const costPrice = this.state.data.USD
          var newCP = (this.state.cryptoAmount * 100)
          newCP = (newCP * costPrice) / 100
          const sellingPrice = this.state.btcToday.USD
          var newSP = (this.state.cryptoAmount * 100)
          newSP = (newSP * sellingPrice) / 100

          if(newCP < newSP){
            var gain = newSP - newCP
            var gainPercent = (gain/newCP) * 100
            gainPercent = gainPercent.toFixed(2)
            console.log(`profit percent is ${gainPercent}`)
            this.setState({
              location: 'Results',
              status: 'gain',
              gainDirection: '+',
              totalStatus: {
                newCP: newCP.toFixed(2),
                costPrice: costPrice,
                newSP: newSP.toFixed(2),
                sellingPrice: sellingPrice,
                percent: gainPercent
              }
            }, () => console.log(this.state))
          }else{
            var loss = newCP - newSP
            var lossPercent = (loss/newCP) * 100
            lossPercent = lossPercent.toFixed(2)
            console.log(`loss percent is ${lossPercent}`)
            this.setState({
              location: 'Results',
              status: 'loss',
              gainDirection: '-',
              totalStatus: {
                newCP: newCP.toFixed(2),
                costPrice: costPrice,
                newSP: newSP.toFixed(2),
                sellingPrice: sellingPrice,
                percent: lossPercent
              }
            }, () => console.log(this.state))
          }
          console.log(`${this.state.cryptoAmount} bitcoin newSP: ${newSP}, sellingPrice: ${sellingPrice}, newCP: ${newCP}, costPrice: ${costPrice}`)
        })
      })
      .catch(function (err) {
        console.log(err);
        });
  }

  goBack(){
    this.setState({
      location: 'Home',
      date: moment(),
      data: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    })
  }

  render () {
    return (<div className='home'>
        <div className="container">
          <header>
            <div className="logo">
              Crypto Gainz!
            </div>

            <nav className="menu">
              <a href="#">Register</a>
            </nav>
          </header>
          
          {this.routingSystem()}
        </div>
      </div>)
  }
}

export default App;

