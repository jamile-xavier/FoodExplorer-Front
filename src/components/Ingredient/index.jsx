import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export function Ingredient({ isNew, value, onClick, ...rest }) {
  return (
    <Container isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <AiOutlinePlus /> : <AiOutlineClose />}
      </button>
    </Container>
  );
}
