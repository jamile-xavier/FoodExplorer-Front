import { NavBar } from "../../components/NavBar";
import { Container, Text, Form, Buttons } from "./style";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export function EditPlate() {
  return (
    <Container>
      <NavBar />
      <Text>
        <Link to="/plate">
          <IoIosArrowBack /> voltar
        </Link>
        <h2>Editar prato</h2>
      </Text>
      <Form>
        <label>
          Imagem do prato
          <Input placeholder="Selecione a imagem" type="file" />
        </label>
        <label>
          Nome
          <Input placeholder="Ex.: Salada Ceasar" type="text" />
        </label>
        <label>
          Categoria
          <select>
            <option value="refeicao">Refeições</option>
            <option value="sobremesas">Sobremesas</option>
            <option value="bebidas">Bebidas</option>
          </select>
        </label>
        <label>
          Ingredientes
          <Input placeholder="Pão Naan" type="text" />
        </label>
        <label>
          Preço
          <Input placeholder="R$00,00" type="text" />
        </label>
      </Form>
      <label>
        Descrição
        <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
      </label>
      <Buttons>
        <Button title="Excluir prato" />
        <Button title="Salvar alterações" />
      </Buttons>
      <Footer />
    </Container>
  );
}
