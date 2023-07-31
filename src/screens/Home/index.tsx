import { Header } from '@components/Header';
import { Container, NeMealTitle, NewMeal } from './styles';
import { Button } from '@components/Button';
import { SummaryStats } from '@components/SummaryStats';

export function Home() {
  return (
    <Container>
      <Header />
      <SummaryStats title="90,86%" subtitle="das refeições dentro da dieta" />
      <NewMeal>
        <NeMealTitle>Refeições</NeMealTitle>
        <Button title="Nova refeição" type="ADD" />
      </NewMeal>
    </Container>
  );
}
