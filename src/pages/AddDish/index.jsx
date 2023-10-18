import { Container, Text, Form, Buttons } from "./style";
import { Ingredient } from "../../components/Ingredients";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { IoIosArrowBack } from "react-icons/io";
import { Header } from "../../components/Header";

export function AddDish() {
  return (
    <Container>
      <Header />
      <Text>
        <a>
          <IoIosArrowBack /> voltar
        </a>
        <h2>Adicionar prato</h2>
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
        <ButtonText title="Salvar alterações" />
      </Buttons>
      <Footer />
    </Container>
  );
}
