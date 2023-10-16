import { Container, Foods } from "./styles";
import { Header } from "../../components/Header";

import { CardDishes } from "../../components/CardDishes";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container>
      <Header />
      <h2>Refeições</h2>
      <Foods>
        <CardDishes />
        <CardDishes />
        <CardDishes />
      </Foods>
      <h2>Sobremesas</h2>
      <Foods>
        <CardDishes />
        <CardDishes />
        <CardDishes />
      </Foods>
      <h2>Bebidas</h2>
      <Foods>
        <CardDishes />
        <CardDishes />
        <CardDishes />
      </Foods>

      <Footer />
    </Container>
  );
}
