import { MealsStatsDTO } from "./MealsStatsDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealsStats(): Promise<MealsStatsDTO> {
  try {
    const storedMeals = await mealsGetAll();
    const amountMeals = storedMeals.length || 0;
    const amountInDietMeals =
      storedMeals.filter((meal) => meal.isInDiet).length || 0;
    const amountOutDietMeals =
      storedMeals.filter((meal) => !meal.isInDiet).length || 0;
    const percentageMelasInDiet = (amountInDietMeals / amountMeals) * 100 || 0;

    let maxSequence = [];
    let currentSequence = [];

    for (const meal of storedMeals) {
      if (meal.isInDiet) {
        currentSequence.push(meal);
      } else {
        if (currentSequence.length > maxSequence.length) {
          maxSequence = currentSequence;
        }
        currentSequence = [];
      }
    }

    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }

    const bestInDietMealsSequence = maxSequence.length;

    return {
      amountMeals,
      amountInDietMeals,
      amountOutDietMeals,
      bestInDietMealsSequence,
      percentageMelasInDiet,
    };
  } catch (error) {
    throw error;
  }
}
