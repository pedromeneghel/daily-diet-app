import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { AddMeal } from '@screens/AddMeal';
import { GetMeal } from '@screens/GetMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="addMeal" component={AddMeal} />

      <Screen name="getMeal" component={GetMeal} />
    </Navigator>
  );
}
