import { Container, Foods } from "./styles";
import { NavBar } from "../../components/NavBar";
import { Banner } from "../../components/Banner";
import { CardPlates } from "../../components/CardPlates";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container>
      <NavBar />
      <Banner
        title="Sabores inigualáveis"
        description="Sinta o cuidado do preparo com ingredientes selecionados."
      />
      <h2>Refeições</h2>
      <Foods>
        <CardPlates />
        <CardPlates />
        <CardPlates />
      </Foods>
      <h2>Sobremesas</h2>
      <Foods>
        <CardPlates />
        <CardPlates />
        <CardPlates />
      </Foods>
      <h2>Bebidas</h2>
      <Foods>
        <CardPlates />
        <CardPlates />
        <CardPlates />
      </Foods>

      <Footer />
    </Container>
  );
}
