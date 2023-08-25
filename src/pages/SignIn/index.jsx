import { Container, Form } from "./styles.js";
import { Logo } from "../../components/Logo/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { Button } from "../../components/Button/index.jsx";

export function SignIn() {
  return (
    <Container>
      <Form>
        <Logo />
        <label>
          Email
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </label>
        <label>
          Senha
          <Input placeholder="No mínimo 6 caracteres" type="text" />
        </label>
        <Button title="Entrar" />

        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  );
}
