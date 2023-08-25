import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import { MealCard } from "@components/MealCard";
import { MealCardHeader } from "@components/MealCardHeader";
import { SummaryStats } from "@components/SummaryStats";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MealsStorageListDTO } from "@storage/meals/MealStorageListDTO";
import { MealsStatsDTO } from "@storage/meals/MealsStatsDTO";
import { mealsGetAllByDate } from "@storage/meals/mealsGetAllByDate";
import { mealsStats } from "@storage/meals/mealsStats";
import { format } from "date-fns";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

import { Container, MealsList, NeMealTitle, NewMeal } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [mealsList, setMealsList] = useState<MealsStorageListDTO[]>([]);
  const [stats, setStats] = useState<MealsStatsDTO>({
    amountInDietMeals: 0,
    amountMeals: 0,
    amountOutDietMeals: 0,
    bestInDietMealsSequence: 0,
    percentageMelasInDiet: 0,
  });

  async function getMelasStats() {
    setIsLoading(true);
    try {
      setStats(await mealsStats());
    } catch (error) {
      console.log("error", error);
      Alert.alert("Ops", "Faio o carregamento.");
    } finally {
      setIsLoading(false);
    }
  }

  async function getMealsByDate() {
    setIsLoading(true);
    try {
      setMealsList(await mealsGetAllByDate());
    } catch (error) {
      console.error(error);
      Alert.alert("Ops", "Faio o carregamento.");
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMelasStats();
      getMealsByDate();
    }, []),
  );

  return (
    <Container>
      <Header />
      <SummaryStats
        type={stats.percentageMelasInDiet <= 35 ? "BAD" : "GOOD"}
        title={`${stats.percentageMelasInDiet.toFixed(2)}%`}
        subtitle="das refeições dentro da dieta"
        onPress={() => navigation.navigate("statistics")}
      />
      <NewMeal>
        <NeMealTitle>Refeições</NeMealTitle>
        <Button
          color="BASE"
          title="Nova refeição"
          type="ADD"
          onPress={() => navigation.navigate("addMeal")}
        />
      </NewMeal>
      {isLoading ? (
        <Loading />
      ) : (
        <MealsList
          sections={mealsList}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }: any) => (
            <MealCard
              title={item.meal}
              hour={format(new Date(item.date), "HH:mm")}
              isDiet={item.isInDiet}
              onPress={() =>
                navigation.navigate("mealDetails", { mealId: item.id })
              }
            />
          )}
          renderSectionHeader={({ section }: any) => (
            <MealCardHeader title={section.date} />
          )}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        />
      )}
    </Container>
  );
}
