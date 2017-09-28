import { INCREMENT, DECREMENT } from '../actions/appActions';
import { LOGIN_SUCCESS } from '../actions/loginActions';
const INITIAL_STATE = {
  counter: 0,
  loggedIn: false,
  profile: {},
};

function appState( state=INITIAL_STATE, action) {


  switch (action.type){

    case INCREMENT:
      return Object.assign({}, state, {counter: state.counter+1});

    case DECREMENT:
      //do something
      return Object.assign({}, state, {counter: state.counter - action.payload});

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        profile: action.payload.profile
      });

    default:
      return state
  }


}

export default appState;
