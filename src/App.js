import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransferForm from './containers/TransferForm';
import BalanceForm from './containers/BalanceForm';
import Jumber from './components/Jumber';

import eosjs from 'eosjs';

const privateKeys = ["5KdwwCES75DbEsAQr5YViVTNR4dtz1jSRa2qgtCewFzZWXw6YYG",
"5KdY61tockKqKaWsjjoJZXTrRx3hwAhiF932CnDyj9Uh4pdWwkK",
"5JYv2CvmA1HhQkLVyvhfKjU58ux7FJfEegvgENLmwM5n6bfJzRF",
"5JmnLQBSRY6VMm3sbV5ypANR4KufoFeYBLh5j78u92rqaT2wqCj",
"5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
"5KCM27WPRx5TNNrkBWZysnNbsLuaDvTwhX7GzM9JKdyGtRQh38q",
"5JDuaRen74yTcTozAR4xWooXBEonPkYPyMeESHSA8iFZyqDDHUM"];



class App extends Component {


  constructor(){
    super()
    this.eos = eosjs({
      httpEndpoint: 'http://127.0.0.1:7777',
      keyProvider: privateKeys
    })

    this.state = {
      balances: []
    }

    this.sendEos = this.sendEos.bind(this)
    this.fetchBalance = this.fetchBalance.bind(this)
  }

  componentDidMount() {
    this.eos.getBlock(200)
      .then(result => {
        console.log(result)
      })
  }

  sendEos(payload) {
    this.eos.transfer(payload).then(({transaction_id}) => console.log(`TX success: ${transaction_id}`))
  }

  fetchBalance(payload) {
    this.eos.getCurrencyBalance(payload).then(balances => this.setState({ balances })).catch(error => console.log(error))
  }


  render() {

    return (
      <div className="App">
        <Jumber />
        <div className="section">
          <h1>Transfer</h1>
          <TransferForm sendEos={this.sendEos}/>
        </div>
        <div className="section">
          <h1>Check Balance</h1>
          <BalanceForm fetchBalance={this.fetchBalance} balances={this.state.balances}/>
        </div>
        <button onClick={this.tester} />
      </div>
    );
  }
}

export default App;
