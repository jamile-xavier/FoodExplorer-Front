//styles
import { Container, Form, TextLogin, NewAcc } from "./styles.js";

// Components
import Logo from "../../assets/Logo.svg";
import { Input } from "../../components/Input/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

// hooks and utils
import { useAuth } from "../../hooks/auth";

// API and others
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />

        <label htmlFor="senha">Senha</label>
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="senha"
        />
        <ButtonText title="Entrar" onClick={handleSignIn} />

        <NewAcc to="/register">Criar uma conta</NewAcc>
      </Form>
    </Container>
  );
}
