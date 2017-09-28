import { CALL_API } from 'redux-api-middleware';

export const SET_FORM_FIELD = 'SET_FORM_FIELD';
export function setFormField(field) {
  return ({
    type: SET_FORM_FIELD,
    payload: field,
  });
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(body) {
  return {
    [CALL_API]: {
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      endpoint: 'https://co-ment.glitch.me/api/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

export const SET_LOGIN_MSG = 'SET_LOGIN_MSG';
export function setLoginMsg(msg) {
  return({
    type: SET_LOGIN_MSG,
    payload: msg,
  });
}
