//styles
import {
  Container,
  Header,
  Search,
  Profile,
  Button,
  Nav,
  AddDish,
} from "./styles";

//icons
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

//components
import { Input } from "../Input";
import { Footer } from "../Footer";

// hooks and utils
import { USER_ROLE } from "../../utils/role";
import { useAuth } from "../../hooks/auth";

//api and others
import { useNavigate } from "react-router-dom";
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
      <Search>
        <Input
          icon={AiOutlineSearch}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </Search>
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
