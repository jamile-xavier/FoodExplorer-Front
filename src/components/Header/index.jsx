import { Container, Nav, Profile, Logout } from "./styles";
import LogoAdm from "../../assets/LogoAdm.svg";
import Logo from "../../assets/Logo.svg";
import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight, PiUserCircleThin } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { ButtonText } from "../ButtonText";
import { ButtonIcon } from "../ButtonIcon";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatarPlaceholder.jpg";
import { api } from "../../services/api";

export function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleAddDish() {
    navigate("/addDish");
  }

  /* const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;*/

  return (
    <Container>
      {[USER_ROLE.ADMIN, USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          {user.role === USER_ROLE.ADMIN && (
            <>
              <Nav>
                <div className="header_mobile">
                  <a>
                    <AiOutlineMenu size={40} />
                  </a>
                  <img src={LogoAdm} />
                </div>

                <div className="header_desktop">
                  <img src={LogoAdm} />
                  <input placeholder="Busque por pratos ou ingredientes" />
                  <ButtonText title="Novo Prato" onClick={handleAddDish} />
                  <Profile to="/profile">
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
                  <a>
                    <AiOutlineMenu size={40} />
                  </a>
                  <img src={Logo} />
                  <ButtonIcon icon={PiReceiptLight} />
                </div>

                <div className="header_desktop">
                  <img src={Logo} />
                  <input placeholder="Busque por pratos ou ingredientes" />
                  <ButtonIcon icon={PiReceiptLight} title="Pedidos" qtde="0" />
                  <Profile to="/profile">
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
