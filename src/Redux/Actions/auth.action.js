import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  AUTH_FAILURE,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from './action.types';

export const signupRequest = () => {
  return {
    type: SIGN_UP_REQUEST,
  };
};

export const signupSuccess = data => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: data,
  };
};

export const signupFailure = error => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};
//! SIGNIN
export const signinRequest = () => {
  return {
    type: SIGN_IN_REQUEST,
  };
};

export const signinSuccess = data => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: data,
  };
};

export const signinFailure = error => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};

//!LOGOUT

export const signOutRequest = () => {
  return {
    type: SIGN_OUT_REQUEST,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = () => {
  return {
    type: SIGN_OUT_FAILURE,
  };
};
