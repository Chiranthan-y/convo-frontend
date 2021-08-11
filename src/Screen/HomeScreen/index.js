import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatlistScreen from './../ChatlistScreen';
import NotificationScreen from './../NotificationScreen';
import ProfileScreen from './../ProfileScreen';

import Icon from 'react-native-vector-icons/dist/Ionicons';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chatlist"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Chatlist') {
            return <Icon name="ios-chatbubble" color={color} size={size} />;
          }
          if (route.name === 'Notification') {
            return <Icon name="ios-notifications" color={color} size={size} />;
          }
          if (route.name === 'Profile') {
            return <Icon name="ios-person" color={color} size={size} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5A20CB',
        inactiveTintColor: '#E6E6E6',
        showLabel: false,
        initialRouteName: 'Chatlist',
      }}>
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Chatlist" component={ChatlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
