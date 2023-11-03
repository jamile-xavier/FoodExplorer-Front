import { Container } from "./styles";

export function ButtonIcon({ title, icon: Icon, qtde }) {
  return (
    <Container type="button">
      {Icon && <Icon />}
      {title}
      {qtde}
    </Container>
  );
}
