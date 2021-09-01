import React from 'react';

import {View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';

import styles from './style';
const Header = ({navigation}) => {
  return (
    <View style={styles.headerView}>
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
};

export default Header;
