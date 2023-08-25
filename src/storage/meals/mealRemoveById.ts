import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";

import { mealsGetAll } from "./mealsGetAll";

export async function mealRemoveById(mealId: string): Promise<void> {
  try {
    const storedMeals = await mealsGetAll();
    const filteredMeals = storedMeals.filter((meal) => meal.id !== mealId);
    const storage = JSON.stringify([...filteredMeals]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
