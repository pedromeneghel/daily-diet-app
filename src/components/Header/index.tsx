import logoImage from '@assets/logo.png';
import { BackButton, BackIcon, Container, Logo } from './styles';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  showBackButton?: boolean;
  color?: string;
};

export function Header({ showBackButton = false, color }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={() => navigation.navigate('home')}>
          <BackIcon />
        </BackButton>
      ) : (
        <Logo source={logoImage} />
      )}
    </Container>
  );
}
