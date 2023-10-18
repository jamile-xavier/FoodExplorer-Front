import { Container } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export function Stepper() {
  const [quantity, setQuantity] = useState(1);

  function handleAddItem() {
    if (quantity >= 10) {
      return alert("O limite máximo do mesmo item são 10 unidades.");
    }
    setQuantity(quantity + 1);
  }

  function handleRemoveItem() {
    setQuantity(quantity - 1);

    if (quantity == 0) {
      alert("Todos os items foram removidos!");
      setQuantity(0);
    }
  }

  return (
    <Container>
      <button onClick={handleRemoveItem}>
        <AiOutlineMinus />
      </button>
      <span>{quantity}</span>
      <button onClick={handleAddItem}>
        <AiOutlinePlus />
      </button>
    </Container>
  );
}
