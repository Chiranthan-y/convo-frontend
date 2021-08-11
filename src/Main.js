import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import {getData} from './Utils/storage';
import {AUTH} from './Redux/Actions/action.types';

const Stack = createStackNavigator();

const Main = () => {
  const {isAuthenticated, loading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const getuser = () => {
      getData().then(res => {
        const {user, token} = res;
        if (user && token) {
          dispatch({type: AUTH, payload: {user, token}});
        }
      });
    };
    getuser();
  }, [isAuthenticated]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Home' : 'Login'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
