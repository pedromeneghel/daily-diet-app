import { HeaderStatistics } from "@components/HeaderStatistics";
import { useFocusEffect } from "@react-navigation/native";
import { MealsStatsDTO } from "@storage/meals/MealsStatsDTO";
import { mealsStats } from "@storage/meals/mealsStats";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

import {
  Container,
  Content,
  GeneralStats,
  MealsInDietContainer,
  MealsOutDietContainer,
  StatsIndicator,
  StatsText,
  Title,
  TwoColumnsContainer,
} from "./styles";

export function Statistics() {
  const [isLoading, setIsLoading] = useState(false);
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

  useFocusEffect(
    useCallback(() => {
      getMelasStats();
    }, []),
  );

  return (
    <Container>
      <HeaderStatistics percentageMealsInDiet={stats?.percentageMelasInDiet} />
      <Content>
        <Title>Estatísticas gerais</Title>

        <GeneralStats>
          <StatsIndicator>{stats?.bestInDietMealsSequence}</StatsIndicator>
          <StatsText>melhor sequência de pratos dentro da dieta</StatsText>
        </GeneralStats>

        <GeneralStats>
          <StatsIndicator>{stats?.amountMeals}</StatsIndicator>
          <StatsText>refeições registradas</StatsText>
        </GeneralStats>

        <TwoColumnsContainer>
          <MealsInDietContainer>
            <StatsIndicator>{stats?.amountInDietMeals}</StatsIndicator>
            <StatsText>refeições dentro da dieta</StatsText>
          </MealsInDietContainer>

          <MealsOutDietContainer>
            <StatsIndicator>{stats?.amountOutDietMeals}</StatsIndicator>
            <StatsText>refeições fora da dieta</StatsText>
          </MealsOutDietContainer>
        </TwoColumnsContainer>
      </Content>
    </Container>
  );
}
