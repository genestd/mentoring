import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  changeCounter(event) {
    let newValue = 0;
    switch (event.target.id) {
      case 'plus':
        newValue = this.state.counter + 1;
        this.setState({ counter: newValue});
        break;
      case 'minus':
        newValue = this.state.counter - 1;
        this.setState({ counter: newValue});
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{`Welcome to React: ${this.state.counter}`}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          <button id="plus" onClick={event => this.changeCounter(event)}>Increment</button>
          <button id="minus" onClick={event => this.changeCounter(event)}>Decrement</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.appState,
})

export default connect(mapStateToProps)(App);
