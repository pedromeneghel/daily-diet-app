import { Button } from "@components/Button";
import { Header } from "@components/Header";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealOneById } from "@storage/meals/mealGetOneById";
import { mealRemoveById } from "@storage/meals/mealRemoveById";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

import {
  ButtonsArea,
  Container,
  Content,
  DateLabel,
  DateTime,
  Description,
  Meal,
  MealDetailsArea,
} from "./styles";

type RouteParams = {
  mealId: string;
};

export function MealDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params as RouteParams;
  const [isLoading, setIsLoading] = useState(false);
  const [meal, setMeal] = useState<MealStorageDTO | null>(null);

  async function getMealById() {
    setIsLoading(true);
    try {
      setMeal(await mealOneById(mealId));
    } catch (error) {
      Alert.alert("Ops", "Faio o carregamento.");
    } finally {
      setIsLoading(false);
    }
  }

  async function mealRemove(mealId: string) {
    try {
      await mealRemoveById(mealId);
      navigation.navigate("home");
    } catch (error) {
      Alert.alert("Excluir refeição", "Não foi possível excluir a refeição.");
    }
  }

  async function handleRemoveMeal(mealId: string) {
    Alert.alert("Excluir refeição", "Deseja realmente excluir essa refeição?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => mealRemove(mealId) },
    ]);
  }

  useFocusEffect(
    useCallback(() => {
      getMealById();
    }, []),
  );

  return (
    <Container>
      <Header type="SECONDARY" title="Refeição" showBackButton />
      {meal && (
        <Content>
          <MealDetailsArea>
            <Meal>{meal.meal}</Meal>
            <Description>{meal.description}</Description>
            <DateLabel>Data e hora</DateLabel>
            <DateTime>
              {meal.date} à {meal.hour}
            </DateTime>
          </MealDetailsArea>
          <ButtonsArea>
            <Button
              color="BASE"
              title="Editar refeição"
              onPress={() => navigation.navigate("editMeal", { mealId })}
            />
            <Button
              color="BASE"
              title="Excluir refeição"
              onPress={() => handleRemoveMeal(meal.id)}
            />
          </ButtonsArea>
        </Content>
      )}
    </Container>
  );
}
