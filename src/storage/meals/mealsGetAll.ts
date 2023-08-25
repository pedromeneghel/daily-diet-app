import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";

import { MealStorageDTO } from "./MealStorageDTO";

export async function mealsGetAll(): Promise<MealStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
