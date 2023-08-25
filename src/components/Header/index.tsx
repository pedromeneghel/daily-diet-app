import logoImage from "@assets/logo.png";
import profileImage from "@assets/profile.png";
import { useNavigation } from "@react-navigation/native";

import {
  BackButton,
  BackIcon,
  Container,
  DefaultContent,
  HeaderTypeStyleProps,
  Logo,
  Profile,
  Title,
} from "./styles";

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
  type?: HeaderTypeStyleProps;
};

export function Header({
  showBackButton = false,
  type = "PRIMARY",
  title,
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container type={type}>
      {showBackButton ? (
        <>
          <BackButton onPress={() => navigation.navigate("home")}>
            <BackIcon />
          </BackButton>
          <Title>{title}</Title>
        </>
      ) : (
        <DefaultContent>
          <Logo source={logoImage} />
          <Profile source={profileImage} />
        </DefaultContent>
      )}
    </Container>
  );
}
