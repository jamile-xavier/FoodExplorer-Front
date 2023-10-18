import { Container, Main, Banner } from "./styles";
import { Header } from "../../components/Header";

import { CardDishes } from "../../components/CardDishes";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import bannerImage from "../../assets/banner.png";

export function Home() {
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
      <Header search={setSearch} />
      <Main>
        <section className="Banner">
          <Banner>
            <img src={bannerImage} alt="banner contendo vários macarons" />
            <div className="banner_title">
              <h1>Sabores inigualáveis</h1>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </Banner>
        </section>

        {dishes.filter((dish) => dish.category == "meals").length > 0 && (
          <section className="Dishes">
            {dishes
              .filter((dish) => dish.category == "meals")
              .map((dish) => (
                <CardDishes data={dish} />
              ))}
          </section>
        )}

        {dishes.filter((dish) => dish.category == "desserts").length > 0 && (
          <section className="desserts">
            {dishes
              .filter((dish) => dish.category == "desserts")
              .map((dish) => (
                <CardDishes data={dish} />
              ))}
          </section>
        )}

        {dishes.filter((dish) => dish.category == "drinks").length > 0 && (
          <section className="drinks">
            {dishes
              .filter((dish) => dish.category == "drinks")
              .map((dish) => (
                <CardDishes data={dish} />
              ))}
          </section>
        )}
      </Main>
      <Footer />
    </Container>
  );
}
