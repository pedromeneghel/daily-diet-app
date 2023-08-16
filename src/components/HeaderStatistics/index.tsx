import { useNavigation } from '@react-navigation/native';
import {
  BackButton,
  BackIcon,
  Container,
  Title,
  Subtitle,
  Content,
  HeaderTypeStyleProps,
} from './styles';

type Props = {
  type?: HeaderTypeStyleProps;
};

export function HeaderStatistics({ type = 'GOOD' }: Props) {
  const navigation = useNavigation();

  return (
    <Container type={type}>
      <BackButton onPress={() => navigation.navigate('home')}>
        <BackIcon type={type} />
      </BackButton>
      <Content>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Content>
    </Container>
  );
}
