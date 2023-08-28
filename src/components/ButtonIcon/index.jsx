import { Container } from "./styles";

export function ButtonIcon({ title, icon: Icon, qtde }) {
  return (
    <Container type="button">
      {Icon && <Icon size={40} />}
      {title}
      {qtde}
    </Container>
  );
}
