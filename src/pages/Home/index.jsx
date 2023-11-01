import { Container, Main, Banner, Dishes } from "./styles";
import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";

import { useState, useEffect } from "react";

import bannerImage from "../../assets/banner.png";
import { MobileMenu } from "../../components/MobileMenu";
import { CardDishes } from "../../components/CardDishes";

import { api } from "../../services/api";
import { Section } from "../../components/Section";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} search={setSearch} />
      <Main>
        <Banner>
          <img src={bannerImage} alt="banner contendo vários macarons" />
          <div className="banner_title">
            <h1>Sabores inigualáveis</h1>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </Banner>
        <Dishes>
          <Section title="Refeições" />
          {dishes.filter((dish) => dish.category == "meals").length > 0 && (
            <div className="dishes">
              {dishes
                .filter((dish) => dish.category == "meals")
                .map((dish) => (
                  <CardDishes data={dish} />
                ))}
            </div>
          )}

          <Section title="Sobremesas" />
          {dishes.filter((dish) => dish.category == "desserts").length > 0 && (
            <div className="desserts">
              {dishes
                .filter((dish) => dish.category == "desserts")
                .map((dish) => (
                  <CardDishes data={dish} />
                ))}
            </div>
          )}
          <Section title="Bebidas" />
          {dishes.filter((dish) => dish.category == "drinks").length > 0 && (
            <div className="drinks">
              {dishes
                .filter((dish) => dish.category == "drinks")
                .map((dish) => (
                  <CardDishes data={dish} />
                ))}
            </div>
          )}
        </Dishes>
      </Main>
      <Footer />
    </Container>
  );
}
