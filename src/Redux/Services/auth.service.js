import FormData from 'form-data';
import {storeData, removeData, getData} from '../../Utils/storage';
import axios from 'axios';
import {
  signupRequest,
  signupFailure,
  signupSuccess,
  signinRequest,
  signinSuccess,
  signinFailure,
  signOutFailure,
  signOutRequest,
  signOutSuccess,
  authRequest,
  authFailure,
  authSuccess,
} from './../Actions/auth.action';

export const Register = user => {
  return dispatch => {
    dispatch(signupRequest());
    const {username, firstname, lastname, password, phonenumber} = user;

    const data = new FormData();

    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('username', username);
    data.append('password', password);
    data.append('phonenumber', phonenumber);

    axios
      .post('http://192.168.0.104:9090/api/signin', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch(signupSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(signupFailure(error));
      });
  };
};

export const Login = user => {
  return dispatch => {
    console.log('Resquest');
    dispatch(signinRequest());
    console.log(user);

    const {username, password} = user;
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    console.log('form', data);

    axios
      .post('http://10.0.2.2:9090/api/signin', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('res', response);
        storeData(response.data)
          .then(() => {
            console.log('stored');
            dispatch(signinSuccess(response.data));
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
        dispatch(signinFailure(error));
      });
  };
};

export const Logout = () => {
  return dispatch => {
    dispatch(signOutRequest());
    removeData()
      .then(() => {
        dispatch(signOutSuccess());
      })
      .catch(error => {
        dispatch(signOutFailure(error));
      });
  };
};
