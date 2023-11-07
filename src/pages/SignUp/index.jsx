// Styles
import { Container, TextLogin, Form, Acc } from "./styles.js";

// Components
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Input } from "../../components/Input/index.jsx";

// API and others
import Logo from "../../assets/Logo.svg";
import { useState } from "react";
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <img src={Logo} />
      <Form>
        <TextLogin>
          <h1>Crie sua conta</h1>
        </TextLogin>
        <label htmlFor="nome">Nome</label>
        <Input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="nome"
        />

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

        <ButtonText title={"Criar conta"} onClick={handleSignUp} />

        <Acc to="/">Já tenho uma conta</Acc>
      </Form>
    </Container>
  );
}
