import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {Login} from './../../Redux/Services/auth.service';

import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('LoginScreen: handleLogin');
    dispatch(Login({password, username}));
    //navigate to home screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phonenumber"
          placeholderTextColor="#003f5c"
          onChangeText={username => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.registerView}>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.forgot_button}>SignUp?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
