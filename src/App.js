import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../src/store/actions/appActions';
import Login from './Login';
import Profile from './Profile';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {this.props.appState.loggedIn ? <Profile /> : <Login />}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  appState: state.appState,
  login: state.login,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
