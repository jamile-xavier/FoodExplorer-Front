import { Container, Header, Button, Search, Nav } from "./styles";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Input } from "../Input";
import { Footer } from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { USER_ROLE } from "../../utils/role";
import { useAuth } from "../../hooks/auth";

export function MobileMenu({ menuIsOpen, onCloseMenu }) {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

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
          placeholder="Busque por pratos ou ingredientes"
          type="search"
          icon={AiOutlineSearch}
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
                <Link to="/addDish">Novo Prato</Link>
                <Link to="/profile">Perfil</Link>
              </Nav>
              <Button to="/" onClick={handleSignOut}>
                Sair
                <FiLogOut size={40} />
              </Button>
              <Footer />
            </>
          )}
          {user.role === USER_ROLE.CUSTOMER && (
            <>
              <Nav>
                <Link to="/profile">Perfil</Link>
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
