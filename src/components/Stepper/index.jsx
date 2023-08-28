import { Container } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function Stepper() {
  return (
    <Container>
      <a>
        <AiOutlineMinus />
      </a>
      <p>01</p>
      <a>
        <AiOutlinePlus />
      </a>
    </Container>
  );
}
