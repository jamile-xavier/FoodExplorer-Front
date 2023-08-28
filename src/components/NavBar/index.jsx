import {
  Container,
  NavDesktop,
  NavDesktopAdm,
  NavMobile,
  NavMobileAdm,
} from "./styles";
import LogoAdm from "../../assets/LogoAdm.svg";
import Logo from "../../assets/Logo.svg";
import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";

export function NavBar() {
  return (
    <Container>
      <NavDesktop>
        <img src={LogoAdm} />
        <input placeholder="Busque por pratos ou ingredientes" />
        <Button title="Novo prato" />
        <a>
          <FiLogOut size={40} />
        </a>
      </NavDesktop>
      <NavDesktopAdm>
        <img src={Logo} />
        <input placeholder="Busque por pratos ou ingredientes" />
        <ButtonIcon icon={PiReceiptLight} title="Pedidos" qtde="0" />

        <a>
          <FiLogOut size={40} />
        </a>
      </NavDesktopAdm>
      <NavMobile>
        <a>
          <AiOutlineMenu size={40} />
        </a>
        <img src={Logo} />

        <ButtonIcon icon={PiReceiptLight} />
      </NavMobile>
      <NavMobileAdm>
        <a>
          <AiOutlineMenu size={40} />
        </a>
        <img src={LogoAdm} />
      </NavMobileAdm>
    </Container>
  );
}
