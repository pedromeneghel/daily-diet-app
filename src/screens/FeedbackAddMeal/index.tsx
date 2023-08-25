import badImage from "@assets/bad.png";
import goodImage from "@assets/good.png";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Logo, Negrito, Subtitle, Title } from "./styles";

type RouteParams = {
  isInDiet: boolean;
};

export function FeedbackAddMeal() {
  const route = useRoute();
  const navigation = useNavigation();
  const { isInDiet } = route.params as RouteParams;

  return (
    <Container>
      {isInDiet ? (
        <>
          <Title color="GOOD">Continue assim!</Title>
          <Subtitle>
            Você continua <Negrito>dentro da dieta.</Negrito> Muito bem!
          </Subtitle>
          <Logo source={goodImage} />
        </>
      ) : (
        <>
          <Title color="BAD">Que pena!</Title>
          <Subtitle>
            Você <Negrito>saiu da dieta</Negrito> dessa vez, mas continue se
            esforçando e não desista!
          </Subtitle>
          <Logo source={badImage} />
        </>
      )}

      <Button
        color="BASE"
        type="NORMAL"
        title="Ir para página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </Container>
  );
}
