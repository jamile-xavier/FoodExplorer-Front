// Styles
import { Container, TextLogin, Form } from "./styles.js";

// Components
import Logo from "../../assets/Logo.svg";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Input } from "../../components/Input/index.jsx";

// API and others
import { useState } from "react";
import { api } from "../../services/api.js";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  //useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // inicializating navigate
  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    //acess API
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
        <label>
          Seu nome
          <Input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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

        <ButtonText title={"Criar conta"} onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
