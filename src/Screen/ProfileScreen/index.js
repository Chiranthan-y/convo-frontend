import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Logout} from '../../Redux/Services/auth.service';
import {styles} from './styles';
import {Avatar} from 'react-native-elements';
import ProfileTabs from './../../Components/ProfileTabs';
const ProfileScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
  };

  const {currentUser} = useSelector(state => state.auth);

  return (
    <>
      <View style={styles.profilecontainer}>
        <View style={styles.AvatarContainer}>
          <Avatar
            size="xlarge"
            rounded
            title="UR"
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
            }}
          />
        </View>
        <View style={styles.InformationContainer}>
          <Text style={styles.text}>@{currentUser.username}</Text>
          <Text style={styles.subtext}>{currentUser.firstname}</Text>
          <Text style={styles.subtext}>{currentUser.phonenumber}</Text>
        </View>
      </View>
      <>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.loginText}>Logout</Text>
        </TouchableOpacity>
        <ProfileTabs />
      </>
    </>
  );
};

export default ProfileScreen;
