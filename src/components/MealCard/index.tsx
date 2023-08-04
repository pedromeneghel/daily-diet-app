import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Hour,
  Icon,
  MealIsDietStyleProps,
  Separator,
  Title,
} from './styles';

type Props = TouchableOpacityProps & {
  isDiet: MealIsDietStyleProps;
  title: string;
  hour: string;
};

export function MealCard({ isDiet, hour, title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Separator>|</Separator>
      <Title>{title}</Title>
      <Icon isDiet={isDiet} />
    </Container>
  );
}
