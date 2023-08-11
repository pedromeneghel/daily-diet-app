import { TouchableOpacityProps } from 'react-native';
import {
  AddIcon,
  ButTonColorStyleProps,
  ButtonWidthStyleProps,
  Container,
  Title,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: 'ADD' | 'NORMAL';
  color: ButTonColorStyleProps;
  width?: ButtonWidthStyleProps;
};

export function Button({
  title,
  width = 'FULL',
  type = 'NORMAL',
  color = 'BASE',
  ...rest
}: Props) {
  return (
    <Container color={color} width={width} {...rest}>
      {type === 'ADD' && <AddIcon />}

      <Title>{title}</Title>
    </Container>
  );
}
