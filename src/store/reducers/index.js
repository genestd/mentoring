import { combineReducers } from 'redux';
import appState from './appState';
import login from './login'

let rootReducer = combineReducers({
  appState,
  login
});

export default rootReducer;
