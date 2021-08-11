import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';

const RegisterScreen = ({navigation}) => {
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require('./assets/log2.png')} /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Firstname"
          placeholderTextColor="#003f5c"
          onChangeText={firstname => setFirstname(firstname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Lastname"
          placeholderTextColor="#003f5c"
          onChangeText={lastname => setLastname(lastname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          onChangeText={username => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phonenumber"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          onChangeText={phonenum => setPhonenumber(phonenum)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={pass => setPassword(pass)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RegisterScreen;
