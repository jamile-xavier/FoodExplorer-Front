import { Container, Main, Banner, Dishes } from "./styles";
import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";

import { useState, useEffect } from "react";

import bannerImage from "../../assets/banner.png";
import { MobileMenu } from "../../components/MobileMenu";
import { CardDishes } from "../../components/CardDishes";

import { api } from "../../services/api";
import { Section } from "../../components/Section";

import { Carousel } from "../../components/Carousel";
import { SwiperSlide } from "swiper/react";

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

  const paramsCarousel = {
    breakpoints: {
      425: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  };

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
          {dishes.filter((dish) => dish.category == "meals").length > 0 && (
            <>
              <Section title="Refeições" />
              <Carousel params={paramsCarousel}>
                {dishes
                  .filter((dish) => dish.category == "meals")
                  .map((dish) => (
                    <SwiperSlide key={String(dish.id)}>
                      <CardDishes data={dish} />
                    </SwiperSlide>
                  ))}
              </Carousel>
            </>
          )}

          {dishes.filter((dish) => dish.category == "desserts").length > 0 && (
            <>
              <Section title="Sobremesas" />
              <Carousel params={paramsCarousel}>
                {dishes
                  .filter((dish) => dish.category == "desserts")
                  .map((dish) => (
                    <SwiperSlide key={String(dish.id)}>
                      <CardDishes data={dish} />
                    </SwiperSlide>
                  ))}
              </Carousel>
            </>
          )}
          {dishes.filter((dish) => dish.category == "drinks").length > 0 && (
            <>
              <Section title="Bebidas" />
              <Carousel params={paramsCarousel}>
                {dishes
                  .filter((dish) => dish.category == "drinks")
                  .map((dish) => (
                    <SwiperSlide key={String(dish.id)}>
                      <CardDishes data={dish} />
                    </SwiperSlide>
                  ))}
              </Carousel>
            </>
          )}
        </Dishes>
      </Main>
      <Footer />
    </Container>
  );
}
