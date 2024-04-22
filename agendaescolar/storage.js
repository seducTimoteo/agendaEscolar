// storage.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'calendarData';

export const saveData = async (data) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save data');
  }
};

export const getData = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data != null ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to fetch data');
    return null;
  }
};
