import { SET_FORM_FIELD, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  SET_LOGIN_MSG } from '../actions/loginActions';

const INITIAL_STATE = {
  username: '',
  password: '',
  loginMsg: '',
  loginErrorClass: 'hide',
};

function login( state=INITIAL_STATE, action) {

  switch (action.type) {
    case SET_FORM_FIELD:
      return Object.assign({}, state, { [action.payload.id]: action.payload.value, loginErrorClass: 'hide' });

    case SET_LOGIN_MSG:
      return Object.assign({}, state, { loginMsg: action.payload.msg, loginErrorClass: action.payload.css });

    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        loginMsg: 'Attempting Login...',
        loginErrorClass: 'show'
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginMsg: '',
        loginErrorClass: 'hide',
        password: '',
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginMsg: action.payload.response.message,
        loginErrorClass: 'show'
      });
    default:
      return state;
  }
}

export default login;
