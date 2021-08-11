import React from 'react';
import {View, Text} from 'react-native';
import ChatList from '../../Components/ChatList';

const ChatlistScreen = () => {
  return (
    <View>
      <Text>ChatlistScreen</Text>
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
    </View>
  );
};

export default ChatlistScreen;

