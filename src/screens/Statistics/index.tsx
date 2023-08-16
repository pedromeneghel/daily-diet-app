import { Text } from 'react-native';
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
} from './styles';
import { HeaderStatistics } from '@components/HeaderStatistics';

export function Statistics() {
  return (
    <Container>
      <HeaderStatistics />
      <Content>
        <Title>Estatísticas gerais</Title>

        <GeneralStats>
          <StatsIndicator>22</StatsIndicator>
          <StatsText>melhor sequência de pratos dentro da dieta</StatsText>
        </GeneralStats>

        <GeneralStats>
          <StatsIndicator>109</StatsIndicator>
          <StatsText>refeições registradas</StatsText>
        </GeneralStats>

        <TwoColumnsContainer>
          <MealsInDietContainer>
            <StatsIndicator>99</StatsIndicator>
            <StatsText>refeições dentro da dieta</StatsText>
          </MealsInDietContainer>

          <MealsOutDietContainer>
            <StatsIndicator>10</StatsIndicator>
            <StatsText>refeições fora da dieta</StatsText>
          </MealsOutDietContainer>
        </TwoColumnsContainer>
      </Content>
    </Container>
  );
}
