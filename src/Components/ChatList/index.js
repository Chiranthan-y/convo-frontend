import React from 'react';
import {View, Text} from 'react-native';
import Avatar from '../Avatar';

const ChatList = ({username, message, timestamp, profilepic}) => {
  return (
    <View>
      <Avatar />
      <Text>ChatList</Text>
    </View>
  );
};

export default ChatList;
