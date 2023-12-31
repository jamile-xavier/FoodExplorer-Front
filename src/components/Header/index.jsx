//styles
import { Container, Nav, Menu, Profile, Logout } from "./styles";

//images
import LogoAdm from "../../assets/LogoAdm.svg";
import Logo from "../../assets/Logo.svg";
import avatarPlaceholder from "../../assets/avatarPlaceholder.jpg";

//icons
import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

//components
import { ButtonText } from "../ButtonText";
import { ButtonIcon } from "../ButtonIcon";
import { Input } from "../Input";

//hooks and utils
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";

// api and others
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Header({ onOpenMenu, search }) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleAddDish() {
    navigate("/addDish");
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      {[USER_ROLE.ADMIN, USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          {user.role === USER_ROLE.ADMIN && (
            <>
              <Nav>
                <div className="header_mobile">
                  <Menu onClick={onOpenMenu}>
                    <AiOutlineMenu size={40} />
                  </Menu>
                  <img src={LogoAdm} />
                </div>

                <div className="header_desktop">
                  <img src={LogoAdm} />
                  <label>
                    <Input
                      icon={AiOutlineSearch}
                      placeholder="Busque por pratos ou ingredientes"
                      onChange={(e) => {
                        search(e.target.value);
                      }}
                    />
                  </label>
                  <ButtonText title="Novo Prato" onClick={handleAddDish} />
                  <Profile to="/profile">
                    <img src={avatarURL} alt={user.name} />
                    <span>Bem vindo (a) </span>
                    <span>{user.name} </span>
                  </Profile>
                  <Logout to="/" onClick={signOut}>
                    <FiLogOut size={40} />
                  </Logout>
                </div>
              </Nav>
            </>
          )}
          {user.role === USER_ROLE.CUSTOMER && (
            <>
              <Nav>
                <div className="header_mobile">
                  <Menu onClick={onOpenMenu}>
                    <AiOutlineMenu size={40} />
                  </Menu>
                  <img src={Logo} />
                  <ButtonIcon icon={PiReceiptLight} />
                </div>

                <div className="header_desktop">
                  <img src={Logo} />
                  <label>
                    <Input
                      icon={AiOutlineSearch}
                      placeholder="Busque por pratos ou ingredientes"
                      onChange={(e) => {
                        search(e.target.value);
                      }}
                    />
                  </label>
                  <ButtonIcon icon={PiReceiptLight} title="Pedidos " qtde="0" />
                  <Profile to="/profile">
                    <img src={avatarURL} alt={user.name} />
                    <span>Bem vindo (a) </span>
                    <span>{user.name} </span>
                  </Profile>

                  <Logout to="/" onClick={handleSignOut}>
                    <FiLogOut size={40} />
                  </Logout>
                </div>
              </Nav>
            </>
          )}
        </>
      )}
    </Container>
  );
}
