import { Header } from "../../components/Header";
import { Container, Tags, Side, Left, Right, PlateDescription } from "./style";
import { IoIosArrowBack } from "react-icons/io";
import { PiReceiptLight } from "react-icons/pi";
import PlateImg from "../../assets/banner.png";
import { Ingredient } from "../../components/Ingredients";
import { Stepper } from "../../components/Stepper";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export function DetailsDish() {
  return (
    <Container>
      <Header />
      <PlateDescription>
        <Left>
          <Link to="/">
            <IoIosArrowBack /> voltar
          </Link>
          <img src={PlateImg} />
        </Left>
        <Right>
          <h2>Salada Ravanello</h2>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <Tags>
            <Ingredient title="alface" />
            <Ingredient title="cebola" />
          </Tags>
          <Side>
            <Stepper />
            <ButtonIcon icon={PiReceiptLight} title="pedir.R$25,00" />
          </Side>
          <Link to="/editplate">Editar prato</Link>
        </Right>
      </PlateDescription>
      <Footer />
    </Container>
  );
}
