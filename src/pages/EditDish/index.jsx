//styles
import { Container, Content, Text, Form, Image, Buttons } from "./styles";

//components
import { Ingredient } from "../../components/Ingredient";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MobileMenu } from "../../components/MobileMenu";
import { Header } from "../../components/Header";

//api and others
import { AiOutlineArrowLeft, AiOutlineCamera } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

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
    if (
      newIngredient &&
      !ingredients.includes(newIngredient.toLocaleLowerCase())
    ) {
      setIngredients((prevState) => [...prevState, newIngredient]);
    } else {
      alert("O campo está vazio ou o ingrediente já existe na lista!");
    }
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
    if (
      !title ||
      ingredients.length < 1 ||
      newIngredient ||
      !category ||
      !price ||
      !description
    ) {
      return alert(
        "Para salvar as alterações é necessário que todos os campos estejam preenchidos!"
      );
    }
    const formData = new FormData();
    formData.append("image", imageFile || data?.image);
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
      <Content>
        <Text>
          <Link to="/">
            <AiOutlineArrowLeft /> voltar
          </Link>
          <h2>Editar prato</h2>
        </Text>
        <Form>
          <Image>
            <img src={image ? image : imageURL} alt="Foto do prato" />
            <label htmlFor="image">
              <AiOutlineCamera />
              <Input
                placeholder="Selecione a imagem"
                type="file"
                onChange={handleChangeImage}
                id="image"
              />
            </label>
          </Image>
          <div className="name">
            <label htmlFor="name"> Nome </label>
            <Input
              placeholder="Ex.: Salada Ceasar"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="name"
            />
          </div>
          <div className="category">
            <label htmlFor="category"> Categoria </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
            >
              <option value="default">Selecione uma categoria</option>
              <option value="meals">Refeições</option>
              <option value="desserts">Sobremesas</option>
              <option value="drinks">Bebidas</option>
            </select>
          </div>
          <div className="ingredients">
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="ingredient">
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
          </div>
          <div className="price">
            <label htmlFor="price"> Preço </label>
            <Input
              placeholder="R$00,00"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
            />
          </div>
          <div className="description">
            <label htmlFor="description"> Descrição </label>

            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
            />
          </div>
        </Form>
        <Buttons>
          <ButtonText title="Excluir prato" onClick={handleRemoveDish} />
          <ButtonText title="Salvar alterações" onClick={handleEditDish} />
        </Buttons>
      </Content>
      <Footer />
    </Container>
  );
}
