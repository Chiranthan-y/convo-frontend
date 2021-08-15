import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {styles} from './styles';

const ChatList = ({username, messgae, timestamp, profilepic}) => {
  return (
    <View
      style={styles.container}
      onPress={() => {
        navigation.navigate('Chat');
      }}>
      <View style={styles.ChatContainer}>
        <View style={styles.AvatarContainer}>
          <Avatar
            rounded
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            }}
            size="medium"
          />
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.Username}>{username}</Text>
          <Text style={styles.Message}>{messgae}</Text>
          <Text style={styles.Timestamp}>{timestamp}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatList;
