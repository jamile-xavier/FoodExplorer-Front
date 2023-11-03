import { Container, EditDish, DetailsDish, Side } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiPencilSimpleDuotone } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonText } from "../ButtonText";
import { Stepper } from "../Stepper";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/role";
import dishImagePlaceholder from "../../assets/dishPlaceholder.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function CardDishes({ data, ...rest }) {
  const { user } = useAuth();

  const imageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : dishImagePlaceholder;

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN, USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          {user.role === USER_ROLE.ADMIN && (
            <>
              <EditDish to={`editDish/${data.id} `} className="EditDish">
                <PiPencilSimpleDuotone size={40} />
              </EditDish>
              <img src={imageURL} alt={data.title} />
              <DetailsDish to={`/detailsDish/${data.id}`}>
                <h3>
                  {data.title} <IoIosArrowForward />
                </h3>
              </DetailsDish>
              <p>{data.description}</p>
              <h2>R$ {data.price}</h2>
            </>
          )}
          {user.role === USER_ROLE.CUSTOMER && (
            <>
              <button className="FavoriteDish">
                <AiOutlineHeart size={40} />
              </button>
              <img src={imageURL} alt={data.title} />
              <Link to={`/detailsDish/${data.id}`}>
                <h3>
                  {data.title} <IoIosArrowForward />
                </h3>
              </Link>
              <p>{data.description}</p>
              <h2>R$ {data.price}</h2>

              <Side>
                <Stepper />
                <ButtonText title="incluir" />
              </Side>
            </>
          )}
        </>
      )}
    </Container>
  );
}
