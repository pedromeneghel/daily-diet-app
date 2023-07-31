import { TouchableOpacityProps } from 'react-native';
import { AddIcon, ButtonWidthStyleProps, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: 'ADD' | 'NORMAL';
  width?: ButtonWidthStyleProps;
};

export function Button({
  title,
  width = 'FULL',
  type = 'NORMAL',
  ...rest
}: Props) {
  return (
    <Container width={width} {...rest}>
      {type === 'ADD' && <AddIcon />}

      <Title>{title}</Title>
    </Container>
  );
}
