import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(Config.STORAGE_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log('getData error', e);
  }
};

const setData = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(Config.STORAGE_KEY, jsonValue);
  } catch (e) {
    console.log('setData error', e);
  }
};

export { getData, setData };
