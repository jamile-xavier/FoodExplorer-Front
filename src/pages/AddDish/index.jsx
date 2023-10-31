import { Container, Content, Text, Form, Buttons } from "./styles";
import { Ingredient } from "../../components/Ingredient";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MobileMenu } from "../../components/MobileMenu";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function AddDish() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDish() {
    if (!image) {
      return alert("Insira uma imagem para o prato.");
    }

    if (!title) {
      return alert("Digite um nome para o prato.");
    }

    if (!category) {
      return alert("Adicione uma categoria ao prato.");
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente ao prato.");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar. Clique em + para adicionar ou deixe o campo vazio."
      );
    }

    if (!price) {
      return alert("Informe o preço do prato.");
    }

    if (!description) {
      return alert("Informe uma descrição do prato.");
    }

    /*api.post("/dishes", {
      title,
      description,
      category,
      image,
      price,
    });
    alert("Prato cadastrado com sucesso");
    navigate("/");
  }*/
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    api.post("/dishes", formData);
    alert("Prato cadastrado com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <Text>
          <Link to="/">
            <AiOutlineArrowLeft /> voltar
          </Link>
          <h1>Novo prato</h1>
        </Text>
        <Form>
          <div className="image">
            <label htmlFor="image"> Imagem do prato </label>
            <Input
              placeholder="Selecione a imagem"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              id="image"
            />
          </div>
          <div className="name">
            <label htmlFor="name"> Nome </label>
            <Input
              placeholder="Ex.: Salada Ceasar"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              id="name"
            />
          </div>
          <div className="category">
            <label htmlFor="category"> Categoria </label>

            <select onChange={(e) => setCategory(e.target.value)} id="category">
              <option value="default">Selecione uma categoria</option>
              <option value="meals">Refeições</option>
              <option value="desserts">Sobremesas</option>
              <option value="drinks">Bebidas</option>
            </select>
          </div>
          <div className="ingredients">
            <label htmlFor="ingredients">Ingredientes</label>
            {ingredients.map((ingredient, index) => (
              <Ingredient
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))}
            <Ingredient
              isNew
              placeholder="Adicionar"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              onClick={handleAddIngredient}
              id="ingredients"
            />
          </div>
          <div className="price">
            <label htmlFor="price"> Preço </label>
            <Input
              placeholder="R$00,00"
              type="number"
              step="0.01"
              onChange={(e) => setPrice(e.target.value)}
              id="price"
            />
          </div>
          <div className="description">
            <label htmlFor="description"> Descrição </label>

            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
              id="description"
            />
          </div>
        </Form>
        <Buttons>
          <ButtonText title="Salvar alterações" onClick={handleNewDish} />
        </Buttons>
      </Content>
      <Footer />
    </Container>
  );
}
