import { Container, Filters } from "./styles";
import { Input } from "../Input";
import { AiOutlineSearch } from "react-icons/ai";

export function Search({ icon: Icon, ...rest }) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        icon={AiOutlineSearch}
      />

      <Filters></Filters>
    </Container>
  );
}
