import { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import { Container, ButtonBack, Form, Avatar } from "./styles";

//components
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

// hooks and utils
import { useAuth } from "../../hooks/auth";

//api and others
import avatarPlaceholder from "../../assets/avatarPlaceholder.jpg";
import { api } from "../../services/api";
import { AiOutlineRollback, AiOutlineCamera } from "react-icons/ai";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <ButtonBack onClick={handleBack}>
        <AiOutlineRollback />
      </ButtonBack>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <AiOutlineCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <label htmlFor="nome">
          <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <Input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="senha">
          <Input
            placeholder="Senha atual"
            type="password"
            onChange={(e) => setPasswordOld(e.target.value)}
          />
        </label>
        <label htmlFor="senha-nova">
          <Input
            placeholder="Nova senha"
            type="password"
            onChange={(e) => setPasswordNew(e.target.value)}
          />
        </label>
        <ButtonText title="Salvar" onClick={() => handleUpdate()} />
      </Form>
    </Container>
  );
}
