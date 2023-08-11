import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import { MealCard } from '@components/MealCard';
import { MealCardHeader } from '@components/MealCardHeader';
import { SummaryStats } from '@components/SummaryStats';
import { useState } from 'react';
import { Container, MealsList, NeMealTitle, NewMeal } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/Input';

type DailyMeal = {
  date: string;
  data: {
    name: string;
    description: string;
    date: string;
    isDiet: boolean;
  }[];
};

export function Home() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const meals: DailyMeal[] = [
    {
      date: '02.01.2023',
      data: [
        {
          date: '02.01.2023',
          name: 'Lanche',
          description: 'Pão com presunto e queijo',
          isDiet: false,
        },
        {
          date: '02.01.2023',
          name: 'Almoço',
          description: 'Arroz feijão e ovo',
          isDiet: true,
        },
        {
          date: '02.01.2023',
          name: 'Lanche 1',
          description: 'Pão com presunto e queijo',
          isDiet: false,
        },
        {
          date: '02.01.2023',
          name: 'Almoço 2',
          description: 'Arroz feijão e ovo',
          isDiet: true,
        },
        {
          date: '02.01.2023',
          name: 'Lanche 4',
          description: 'Pão com presunto e queijo',
          isDiet: false,
        },
        {
          date: '02.01.2023',
          name: 'Almoço 5',
          description: 'Arroz feijão e ovo',
          isDiet: true,
        },
      ],
    },
    {
      date: '01.01.2023',
      data: [
        {
          date: '01.01.2023',
          name: 'Lanche',
          description: 'Pão com presunto e queijo',
          isDiet: false,
        },
        {
          date: '01.01.2023',
          name: 'Almoço',
          description: 'Arroz feijão e ovo',
          isDiet: true,
        },
        {
          date: '01.01.2023',
          name: 'Lanche 1',
          description: 'Pão com presunto e queijo',
          isDiet: false,
        },
        {
          date: '01.01.2023',
          name: 'Almoço 1',
          description: 'Arroz feijão e ovo',
          isDiet: true,
        },
        {
          date: '01.01.2023',
          name: 'Lanche 11',
          description: 'Pão com presunto e queijo',
          isDiet: false,
        },
        {
          date: '01.01.2023',
          name: 'Almoço 11',
          description: 'Arroz feijão e ovo',
          isDiet: true,
        },
        {
          date: '01.01.2023',
          name: 'Lanche 10',
          description: 'Pão com presunto e queijo',
          isDiet: false,
        },
        {
          date: '01.01.2023',
          name: 'Almoço 10',
          description: 'Arroz feijão e ovo',
          isDiet: true,
        },
      ],
    },
  ];

  return (
    <Container>
      <Header />
      <SummaryStats title="90,86%" subtitle="das refeições dentro da dieta" />
      <NewMeal>
        <NeMealTitle>Refeições</NeMealTitle>
        <Button
          title="Nova refeição"
          type="ADD"
          onPress={() => navigation.navigate('addMeal')}
        />
      </NewMeal>
      {isLoading ? (
        <Loading />
      ) : (
        <MealsList
          sections={meals}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => (
            <MealCard title={item.name} hour="20:16" isDiet={false} />
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
