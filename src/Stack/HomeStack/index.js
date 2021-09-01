import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../../Screen/HomeScreen';
import SettingScreen from './../../Screen/SettingScreen';
import ChatScreen from './../../Screen/ChatScreen';

import Header from '../../Components/Header';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerTitleStyle: {padding: 10},
          headerLeft: () => {
            return <Header navigation={navigation} />;
          },
        })}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
