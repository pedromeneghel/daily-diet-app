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
  backButtonAction?: "HOME" | "BACK";
  title?: string;
  type?: HeaderTypeStyleProps;
};

export function Header({
  showBackButton = false,
  backButtonAction = "HOME",
  type = "BASE",
  title,
}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container type={type}>
      {showBackButton ? (
        <>
          <BackButton
            onPress={() =>
              backButtonAction === "HOME"
                ? navigation.navigate("home")
                : navigation.goBack()
            }
          >
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
