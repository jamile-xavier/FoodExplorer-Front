import { Container, Text, Form, Buttons } from "./style";
import { Ingredient } from "../../components/Ingredient";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export function EditDish() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();
  const [data, setData] = useState(null);

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

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
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api.put(`/dishes/${params.id}`, formData);
    alert("Prato atualizado com sucesso!");
    navigate("/");
  }

  async function handleRemoveDish() {
    const isConfirm = confirm(
      "Deseja realmente excluir esse prato do cardápio?"
    );

    if (isConfirm) {
      await api.delete(`/dishes/${params.id}`);
      alert("Prato removido do cardápio com sucesso!");
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);

      const { title, description, category, price, ingredients, imageFile } =
        response.data;
      setTitle(title);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredients.map((ingredient) => ingredient.name));
      setImage(image);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />
      <Text>
        <Link to="/">
          <AiOutlineArrowLeft /> voltar
        </Link>
        <h2>Editar prato</h2>
      </Text>
      <Form>
        <label>
          Imagem do prato
          <Input
            placeholder="Selecione a imagem"
            type="file"
            onChange={handleChangeImage}
          />
        </label>
        <label>
          Nome
          <Input
            placeholder="Ex.: Salada Ceasar"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Categoria
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="default">Selecione uma categoria</option>
            <option value="meals">Refeições</option>
            <option value="desserts">Sobremesas</option>
            <option value="drinks">Bebidas</option>
          </select>
        </label>
        <div className="ingredients">
          {ingredients.map((ingredient, index) => (
            <Ingredient
              key={String(index)}
              value={ingredient}
              onClick={() => handleRemoveIngredient(ingredient)}
            />
          ))}
          <label>Ingredientes</label>
          <Ingredient
            isNew
            placeholder="Pão Naan"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            onClick={handleAddIngredient}
          />
        </div>
        <label>
          Preço
          <Input
            placeholder="R$00,00"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </Form>
      <label>
        Descrição
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <Buttons>
        <ButtonText title="Excluir prato" onClick={handleRemoveDish} />
        <ButtonText title="Salvar alterações" onClick={handleNewDish} />
      </Buttons>
      <Footer />
    </Container>
  );
}
