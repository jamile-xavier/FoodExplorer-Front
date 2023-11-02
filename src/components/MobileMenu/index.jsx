import { Container, Header, Profile, Button, Nav, AddDish } from "./styles";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Input } from "../Input";
import { Footer } from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { USER_ROLE } from "../../utils/role";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatarPlaceholder.jpg";

export function MobileMenu({ menuIsOpen, onCloseMenu }) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        {menuIsOpen && (
          <Button onClick={onCloseMenu}>
            <AiOutlineClose />
          </Button>
        )}
        <h3>Menu</h3>
      </Header>
      <label>
        <Input
          icon={AiOutlineSearch}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </label>
      {[USER_ROLE.ADMIN, USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          {user.role === USER_ROLE.ADMIN && (
            <>
              <Nav>
                <AddDish to="/addDish">Novo Prato</AddDish>
                <Profile to="/profile">
                  <img src={avatarURL} alt={user.name} />
                  <span>Bem vindo (a) </span>
                  <span>{user.name} </span>
                </Profile>
                <Button to="/" onClick={handleSignOut}>
                  Sair
                  <FiLogOut size={40} />
                </Button>
              </Nav>
              <Footer />
            </>
          )}
          {user.role === USER_ROLE.CUSTOMER && (
            <>
              <Nav>
                <Profile to="/profile">
                  <img src={avatarURL} alt={user.name} />
                  <span>Bem vindo (a) </span>
                  <span>{user.name} </span>
                </Profile>
                <Button to="/" onClick={handleSignOut}>
                  Sair
                  <FiLogOut size={40} />
                </Button>
              </Nav>

              <Footer />
            </>
          )}
        </>
      )}
    </Container>
  );
}
