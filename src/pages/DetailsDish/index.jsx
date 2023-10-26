import { Header } from "../../components/Header";
import {
  Container,
  Content,
  IngredientsTags,
  Side,
  Left,
  Right,
  PlateDescription,
} from "./style";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { PiReceiptLight } from "react-icons/pi";
import { Ingredient } from "../../components/Ingredient";
import { IngredientTag } from "../../components/IngredientTag";
import { Stepper } from "../../components/Stepper";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { MobileMenu } from "../../components/MobileMenu";

export function DetailsDish() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const params = useParams();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  function handleEditDish() {
    navigate("/editDish/:id");
  }
  useEffect(() => {
    async function fetchDishDetail() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDishDetail();
  }, []);
  return (
    <Container>
      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      {data && (
        <Content>
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
                        {data.ingredients.map((ingredient) => (
                          <IngredientTag
                            key={String(ingredient.id)}
                            title={ingredient.name}
                          />
                        ))}
                      </IngredientsTags>

                      <ButtonText
                        title="Editar prato"
                        onClick={handleEditDish}
                      />
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
                        {data.ingredients.map((ingredient) => (
                          <IngredientTag
                            key={String(ingredient.id)}
                            title={ingredient.name}
                          />
                        ))}
                      </IngredientsTags>
                      <Stepper />
                      <ButtonIcon title={`incluir . R$ ${data.price}`} />
                    </Right>
                  </PlateDescription>
                </>
              )}
            </>
          )}
        </Content>
      )}
      <Footer />
    </Container>
  );
}
