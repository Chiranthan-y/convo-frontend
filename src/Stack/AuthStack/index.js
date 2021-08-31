import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RegisterScreen from './../../Screen/RegisterScreen';
import LoginScreen from './../../Screen/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
