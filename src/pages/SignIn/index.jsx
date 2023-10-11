import { Container, TextLogin, Form } from "./styles.js";
import Logo from "../../assets/Logo.svg";
import { Input } from "../../components/Input/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <img src={Logo} />
      <Form>
        <TextLogin>
          <h1>Faça login</h1>
        </TextLogin>
        <label>
          Email
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
        </label>
        <label>
          Senha
          <Input placeholder="No mínimo 6 caracteres" type="text" />
        </label>
        <Button title="Entrar" />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
