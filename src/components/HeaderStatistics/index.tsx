import { useNavigation } from "@react-navigation/native";

import {
  BackButton,
  BackIcon,
  Container,
  Title,
  Subtitle,
  Content,
  HeaderTypeStyleProps,
} from "./styles";

type Props = {
  percentageMealsInDiet: number;
};

export function HeaderStatistics({ percentageMealsInDiet }: Props) {
  const navigation = useNavigation();
  const type =
    percentageMealsInDiet <= 35
      ? HeaderTypeStyleProps.bad
      : HeaderTypeStyleProps.good;

  return (
    <Container type={type}>
      <BackButton onPress={() => navigation.navigate("home")}>
        <BackIcon type={type} />
      </BackButton>
      <Content>
        <Title>{percentageMealsInDiet.toFixed(2)} %</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Content>
    </Container>
  );
}
