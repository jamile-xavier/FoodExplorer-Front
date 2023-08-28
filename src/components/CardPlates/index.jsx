import { Container, Favorite, Side } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiPencilSimpleDuotone } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import PlateImg from "../../assets/Mask group-1.png";
import { Button } from "../Button";
import { Stepper } from "../Stepper";

export function CardPlates() {
  return (
    <Container>
      <Favorite>
        <a>
          <AiOutlineHeart size={40} />
        </a>
      </Favorite>
      <img src={PlateImg} />
      <a>
        Torradas de Parma <IoIosArrowForward />
      </a>
      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      <h4>R$ 25,97</h4>

      <Side>
        <Stepper />
        <Button title="incluir" />
      </Side>
    </Container>
  );
}
