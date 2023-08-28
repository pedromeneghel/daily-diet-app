import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";

import { MealStorageDTO } from "./MealStorageDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealUpdate(newMeal: MealStorageDTO): Promise<void> {
  try {
    const storedMeals = await mealsGetAll();
    const filteredMeals = storedMeals.filter((meal) => meal.id !== newMeal.id);

    const orderedMeals = [...filteredMeals, newMeal].sort(compareDates);
    const storage = JSON.stringify(orderedMeals);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

function compareDates(a: MealStorageDTO, b: MealStorageDTO) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}
