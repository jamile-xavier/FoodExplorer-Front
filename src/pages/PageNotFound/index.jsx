import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";

export function PageNotFound() {
  return (
    <Container>
      <img src={Logo} alt="Logo Food Explorer" />
      <h1>OPS....</h1>
      <p>Página não encontrada</p>
    </Container>
  );
}
