import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { AddMeal } from '@screens/AddMeal';
import { GetMeal } from '@screens/GetMeal';
import { FeedbackAddMeal } from '@screens/FeedbackAddMeal';
import { Statistics } from '@screens/Statistics';
import { MealDetails } from '@screens/MealDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="addMeal" component={AddMeal} />
      <Screen name="getMeal" component={GetMeal} />
      <Screen name="feedbackAddMeal" component={FeedbackAddMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="mealDetails" component={MealDetails} />
    </Navigator>
  );
}
