import { Container } from "./styles";

export function Input({ value, ...rest }) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
}
