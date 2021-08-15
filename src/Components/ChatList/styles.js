import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  ChatContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 70,
  },
  TextContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    flex: 1,
  },
  Username: {
    fontSize: 17,
    fontWeight: '500',
    color: '#171717',
  },
  Message: {
    fontSize: 12,
    color: '#818181',
  },
  Timestamp: {
    fontSize: 9,
    textAlign: 'right',
  },
});
