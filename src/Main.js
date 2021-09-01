import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getData} from './Utils/storage';
import {AUTH, AUTH_REQUEST, AUTH_FAIL} from './Redux/Actions/action.types';

import HomeStack from './Stack/HomeStack';
import AuthStack from './Stack/AuthStack';
import LodingComp from './Components/LodingComp';

const Main = () => {
  const {isAuthenticated, loading} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getuser = () => {
      getData().then(res => {
        const {user, token} = res;
        dispatch({type: AUTH_REQUEST});
        console.log('RESponce', res);
        if (user && token) {
          dispatch({type: AUTH, payload: {user, token}});
        } else {
          dispatch({type: AUTH_FAIL});
        }
      });
    };
    getuser();
  }, []);

  if (loading) {
    return <LodingComp />;
  }
  return isAuthenticated ? <HomeStack /> : <AuthStack />;
};

export default Main;
