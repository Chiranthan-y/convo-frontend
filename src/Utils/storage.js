import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async value => {
  try {
    await AsyncStorage.setItem('@userDATA', JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('@userDATA');
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
};

export const removeData = async () => {
  try {
    AsyncStorage.removeItem('@userDATA');
  } catch (error) {
    console.log(error);
  }
  console.log('Removed');
};
