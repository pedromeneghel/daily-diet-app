import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}