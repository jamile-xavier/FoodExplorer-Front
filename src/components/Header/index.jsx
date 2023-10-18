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
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
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
                  <a>
                    <AiOutlineMenu size={40} />
                  </a>
                  <img src={LogoAdm} />
                  <Profile to="/profile">
                    <img src={avatarURL} alt={user.name} />
                  </Profile>
                </div>

                <div className="header_desktop">
                  <img src={LogoAdm} />
                  <input placeholder="Busque por pratos ou ingredientes" />
                  <Link to="/addDish">
                    <p>Novo Prato</p>
                  </Link>
                  <Profile to="/profile">
                    <img src={avatarURL} alt={user.name} />
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
                  <Profile to="/profile">
                    <img src={avatarURL} alt={user.name} />
                  </Profile>
                </div>

                <div className="header_desktop">
                  <img src={Logo} />
                  <input placeholder="Busque por pratos ou ingredientes" />
                  <ButtonIcon icon={PiReceiptLight} title="Pedidos" qtde="0" />
                  <Profile to="/profile">
                    <img src={avatarURL} alt={user.name} />
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
