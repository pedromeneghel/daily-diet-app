import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { v4 as randomUUID } from 'uuid';
import { MealStorageDTO } from './MealStorageDTO';
import { mealsGetAll } from './mealsGetAll';

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll();

    if (storedMeals.includes(newMeal.meal)) {
      throw new AppError('Já existe uma turma cadastrado com esse nome.');
    }

    const mealToCreate: MealStorageDTO = {
      ...newMeal,
      id: randomUUID()
    }

    const storage = JSON.stringify([...storedMeals, mealToCreate])

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
