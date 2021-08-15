import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ChatScreen from './Screen/ChatScreen';
import SettingScreen from './Screen/SettingScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';

import {getData} from './Utils/storage';
import {AUTH, AUTH_REQUEST} from './Redux/Actions/action.types';

const Stack = createStackNavigator();

const Main = () => {
  const {isAuthenticated, loading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const getuser = () => {
      getData().then(res => {
        dispatch({type: AUTH_REQUEST});
        const {user, token} = res;
        if (user && token) {
          dispatch({type: AUTH, payload: {user, token}});
        }
      });
    };
    getuser();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return isAuthenticated ? (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerTitleStyle: {padding: 10},
          headerLeft: () => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <View>
                  <TouchableOpacity onPress={() => navigation.goBack(null)}>
                    <Icon name="ios-chevron-back" size={30} color={'#171717'} />
                  </TouchableOpacity>
                </View>
                <Avatar
                  rounded
                  size="small"
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                  }}
                />
              </View>
            );
          },
        })}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default Main;
