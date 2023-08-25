import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { format } from "date-fns";

import { MealStorageDTO } from "./MealStorageDTO";
import { MealsStorageListDTO } from "./MealStorageListDTO";

export async function mealsGetAllByDate(): Promise<MealsStorageListDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    if (!storage) {
      return [];
    }

    const parsedStorage: MealStorageDTO[] = JSON.parse(storage);
    const storagedDates = parsedStorage.map((meal) =>
      format(new Date(meal.date), "dd.MM.yyyy"),
    );
    const filteredStoragedDates = [...new Set(storagedDates.reverse())];
    const mealList: MealsStorageListDTO[] = [];

    for (const date of filteredStoragedDates) {
      const meals = parsedStorage.filter(
        (meal) => format(new Date(meal.date), "dd.MM.yyyy") === date,
      );

      mealList.push({
        date,
        data: [...meals],
      });
    }

    return mealList;
  } catch (error) {
    throw error;
  }
}
