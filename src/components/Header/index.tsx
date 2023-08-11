import logoImage from '@assets/logo.png';
import {
  BackButton,
  BackIcon,
  Container,
  HeaderTypeStyleProps,
  Logo,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
  type?: HeaderTypeStyleProps;
};

export function Header({
  showBackButton = false,
  type = 'PRIMARY',
  title,
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container type={type}>
      {showBackButton ? (
        <>
          <BackButton onPress={() => navigation.navigate('home')}>
            <BackIcon />
          </BackButton>
          <Title>{title}</Title>
        </>
      ) : (
        <Logo source={logoImage} />
      )}
    </Container>
  );
}
