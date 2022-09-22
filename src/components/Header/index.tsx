import { Container, Logo, BackButton, BackIcon } from "./styles";
import { logoImg } from "@assets/logo.png";
import { Text } from "react-native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
      <Text style={{ color: "white" }}>Logo</Text>
    </Container>
  );
}
