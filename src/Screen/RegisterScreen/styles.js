import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    margin: 10,
    color: 'red',
  },
  registerView: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

  loginBtn: {
    width: '30%',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#5A20CB',
  },
  loginText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
