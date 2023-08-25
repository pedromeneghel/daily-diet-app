import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddMeal } from "@screens/AddMeal";
import { EditMeal } from "@screens/EditMeal";
import { FeedbackAddMeal } from "@screens/FeedbackAddMeal";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="addMeal" component={AddMeal} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="feedbackAddMeal" component={FeedbackAddMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="mealDetails" component={MealDetails} />
    </Navigator>
  );
}
