import { Container } from "./styles";
import FooterImg from "../../assets/Footer.svg";

export function Footer() {
  return (
    <Container>
      <img src={FooterImg} />
      <p>&copy; 2023 - Todos os direitos reservados</p>
    </Container>
  );
}
