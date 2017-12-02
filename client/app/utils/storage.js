import {AsyncStorage} from 'react-native'

export async function getStorageValue(token){
  try {
    return  await AsyncStorage.getItem(token);
  } catch (error) {
    throw error;
  }
}

export async function setStorageValue(key, value){
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    throw error;
  }
}