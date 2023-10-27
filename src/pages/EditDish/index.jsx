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
import { MobileMenu } from "../../components/MobileMenu";

export function EditDish() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState(null);

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

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

      const { title, description, category, price, ingredients } =
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

  async function handleEditDish() {
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

      const { title, description, category, price, ingredients } =
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
      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Text>
        <Link to="/">
          <AiOutlineArrowLeft /> voltar
        </Link>
        <h2>Editar prato</h2>
      </Text>
      <Form>
        <img src={image ? image : imageURL} alt="Foto do prato" />
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
          <label>Ingredientes</label>
          {ingredients.map((ingredient, index) => (
            <Ingredient
              key={String(index)}
              value={ingredient}
              onClick={() => handleRemoveIngredient(ingredient)}
            />
          ))}
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
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </Form>
      <label>
        Descrição
        <Textarea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <Buttons>
        <ButtonText title="Excluir prato" onClick={handleRemoveDish} />
        <ButtonText title="Salvar alterações" onClick={handleEditDish} />
      </Buttons>
      <Footer />
    </Container>
  );
}
