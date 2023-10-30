import { Container, Main, Banner, FixedContent } from "./styles";
import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";

import bannerImage from "../../assets/banner.png";
import { MobileMenu } from "../../components/MobileMenu";

import { FilterDish } from "../../components/FilterDish";
import { api } from "../../services/api";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Main>
        <section className="banner">
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
        <section className="dishes">
          <FilterDish />
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
