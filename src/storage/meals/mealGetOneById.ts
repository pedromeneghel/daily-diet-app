import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealOneById(mealId: string): Promise<MealStorageDTO | null> {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    if (!storage) {
      return null;
    }

    const parsedStorage: MealStorageDTO[] = JSON.parse(storage);
    const filteredMeal = parsedStorage.find((meal) => meal.id === mealId);

    return filteredMeal || null;
  } catch (error) {
    throw error;
  }
}