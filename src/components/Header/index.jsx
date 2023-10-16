import {
  Container,
  HeaderAdmin,
  HeaderCustomer,
  HeaderAdminDesktop,
  HeaderAdminMobile,
  HeaderCustomerDesktop,
  HeaderCustomerMobile,
} from "./styles";
import LogoAdm from "../../assets/LogoAdm.svg";
import Logo from "../../assets/Logo.svg";
import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { ButtonText } from "../ButtonText";
import { ButtonIcon } from "../ButtonIcon";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";

export function Header() {
  const { user } = useAuth();
  return (
    <Container>
      {[USER_ROLE.ADMIN, USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          {user.role === USER_ROLE.ADMIN && (
            <>
              <HeaderAdmin>
                <HeaderAdminMobile>
                  <a>
                    <AiOutlineMenu size={40} />
                  </a>
                  <img src={LogoAdm} />
                </HeaderAdminMobile>
                <HeaderAdminDesktop>
                  <img src={LogoAdm} />
                  <input placeholder="Busque por pratos ou ingredientes" />
                  <ButtonText title="Novo prato" />

                  <a>
                    <FiLogOut size={40} />
                  </a>
                </HeaderAdminDesktop>
              </HeaderAdmin>
            </>
          )}
          {user.role === USER_ROLE.CUSTOMER && (
            <>
              <HeaderCustomer>
                <HeaderCustomerMobile>
                  <a>
                    <AiOutlineMenu size={40} />
                  </a>
                  <img src={Logo} />

                  <ButtonIcon icon={PiReceiptLight} />
                </HeaderCustomerMobile>
                <HeaderCustomerDesktop>
                  <img src={Logo} />
                  <input placeholder="Busque por pratos ou ingredientes" />
                  <ButtonIcon icon={PiReceiptLight} title="Pedidos" qtde="0" />

                  <a>
                    <FiLogOut size={40} />
                  </a>
                </HeaderCustomerDesktop>
              </HeaderCustomer>
            </>
          )}
        </>
      )}
    </Container>
  );
}
