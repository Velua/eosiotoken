import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransferForm from './containers/TransferForm';
import BalanceForm from './containers/BalanceForm';
import PrivateKeyForm from './containers/PrivateKeyForm';
import Jumber from './components/Jumber';

import { ToastContainer, toast } from 'react-toastify';

import eosjs from 'eosjs';

const chainId= "7d47aae09c97dbc21d52c6d9f17bb70a1f1f2fda5f81b3ef18979b74b2070d8c"
const privateKeys = [];
const httpEndpoint = 'http://dolphin.eosblocksmith.io:8888'

class App extends Component {


  constructor(){
    super()
    this.eos = eosjs({
      chainId,
      httpEndpoint,
      keyProvider: privateKeys
    })

    this.state = {
      balances: null
    }

    this.sendEos = this.sendEos.bind(this)
    this.fetchBalance = this.fetchBalance.bind(this)
    this.setPrivateKey = this.setPrivateKey.bind(this)
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

  setPrivateKey(privateKey) {
    const config = {
      chainId: '7d47aae09c97dbc21d52c6d9f17bb70a1f1f2fda5f81b3ef18979b74b2070d8c',
      keyProvider: [privateKey],
      httpEndpoint: "http://dolphin.eosblocksmith.io:8888"
    }
    console.log(config)
    this.eos = eosjs(config)
  }

  render() {


    return (
      <div className="App">
        <ToastContainer />
        <Jumber />
        <div className="">
          <h1>Private Key</h1>
          <PrivateKeyForm setPrivateKey={this.setPrivateKey} />
        </div>
        <div className="section">
          <h1>Set Eosio.token contract</h1>
          <p>This will create your own version of the eosio.token smart contract.</p>
        </div>
        <div className="section">
          <h1>Issue</h1>
          <p>Issue your own crypto token! Enter a symbol and the max allocation</p>
        </div>
        <div className="section">
          <h1>Transfer</h1>
          <TransferForm sendEos={this.sendEos}/>
        </div>
        <div className="section">
          <h1>Check Balance</h1>
          <BalanceForm fetchBalance={this.fetchBalance} balances={this.state.balances}/>
        </div>

        <button onClick={() => console.log('pressed')} >OverHere</button>
      </div>
    );
  }
}

export default App;
