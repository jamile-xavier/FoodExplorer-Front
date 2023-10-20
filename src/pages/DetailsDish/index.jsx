import { Header } from "../../components/Header";
import {
  Container,
  IngredientsTags,
  Side,
  Left,
  Right,
  PlateDescription,
} from "./style";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { PiReceiptLight } from "react-icons/pi";
import { IngredientTag } from "../../components/IngredientTag";
import { Stepper } from "../../components/Stepper";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";
import { api } from "../../services/api";

export function DetailsDish(data, ...rest) {
  const { user } = useAuth();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;
  return (
    <Container>
      <Header />

      {[USER_ROLE.ADMIN, USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          {user.role === USER_ROLE.ADMIN && (
            <>
              <PlateDescription>
                <Left>
                  <Link to="/">
                    <AiOutlineArrowLeft /> voltar
                  </Link>
                  <img src={imageURL} alt={data.title} />
                </Left>
                <Right>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <IngredientsTags>
                    <IngredientTag />
                  </IngredientsTags>
                  <Side>
                    <Stepper />
                    <ButtonIcon icon={PiReceiptLight} title="pedir.R$25,00" />
                  </Side>
                  <Link to={`editDish/${data.id} `} className="EditDish"></Link>
                </Right>
              </PlateDescription>
            </>
          )}
          {user.role === USER_ROLE.CUSTOMER && (
            <>
              <PlateDescription>
                <Left>
                  <Link to="/">
                    <AiOutlineArrowLeft /> voltar
                  </Link>
                  <img src={imageURL} alt={data.title} />
                </Left>
                <Right>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <IngredientsTags>
                    <IngredientTag />
                  </IngredientsTags>
                  <Side>
                    <Stepper />
                    <ButtonIcon icon={PiReceiptLight} title="pedir.R$25,00" />
                  </Side>
                  <Link to={`editDish/${data.id} `} className="EditDish"></Link>
                </Right>
              </PlateDescription>
            </>
          )}
        </>
      )}
      <Footer />
    </Container>
  );
}
