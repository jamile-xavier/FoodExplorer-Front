//styles
import { Container, Form, TextLogin } from "./styles.js";

// Components
import Logo from "../../assets/Logo.svg";
import { Input } from "../../components/Input/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

// API and others
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  //useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // inicializating context
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <img src={Logo} />
      <Form>
        <TextLogin>
          <h1>Faça login</h1>
        </TextLogin>
        <label>
          Email
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha
          <Input
            placeholder="No mínimo 6 caracteres"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <ButtonText title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
