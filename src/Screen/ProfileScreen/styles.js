import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profilecontainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
  },
  AvatarContainer: {
    alignItems: 'center',
    padding: 10,
  },
  InformationContainer: {
    padding: 10,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#171717',
    paddingBottom: 10,
  },
  subtext: {
    fontSize: 15,
    fontWeight: '500',
    color: '#808080',
  },
  logoutBtn: {
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
