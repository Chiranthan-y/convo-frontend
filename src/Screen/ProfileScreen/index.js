import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Logout} from '../../Redux/Services/auth.service';
import styles from './styles';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>LOGout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
