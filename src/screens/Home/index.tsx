import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import { MealCard } from '@components/MealCard';
import { MealCardHeader } from '@components/MealCardHeader';
import { SummaryStats } from '@components/SummaryStats';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { mealsGetAllByDate } from '@storage/meals/mealsGetAllByDate';
import { useCallback, useState } from 'react';
import { Container, MealsList, NeMealTitle, NewMeal } from './styles';
import { MealsStorageListDTO } from '@storage/meals/MealStorageListDTO';
import { Alert } from 'react-native';

export function Home() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [mealsList, setMealsList] = useState<MealsStorageListDTO>([]);

  async function getMealsByDate() {
    setIsLoading(true);
    try {
      setMealsList(await mealsGetAllByDate());
    } catch (error) {
      Alert.alert('Ops', 'Faio o carregamento.');
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMealsByDate();
    }, []),
  );

  return (
    <Container>
      <Header />
      <SummaryStats
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        onPress={() => navigation.navigate('statistics')}
      />
      <NewMeal>
        <NeMealTitle>Refeições</NeMealTitle>
        <Button
          color="BASE"
          title="Nova refeição"
          type="ADD"
          onPress={() => navigation.navigate('addMeal')}
        />
      </NewMeal>
      {isLoading ? (
        <Loading />
      ) : (
        <MealsList
          sections={mealsList}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => (
            <MealCard
              title={item.meal}
              hour={item.hour}
              isDiet={item.isInDiet}
            />
          )}
          renderSectionHeader={({ section }) => (
            <MealCardHeader title={section.date} />
          )}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
