import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import ChatList from '../../Components/ChatList';

const ChatlistScreen = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {name: 'v'})}>
        <ChatList username={'username'} profilepic={''} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ChatlistScreen;
