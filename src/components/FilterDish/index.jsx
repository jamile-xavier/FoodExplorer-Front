import { Container } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { CardDishes } from "../CardDishes";

export function FilterDish() {
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
      <section className="menu">
        <h2>Refeições</h2>

        {dishes.filter((dish) => dish.category == "meals").length > 0 && (
          <div className="dishes">
            {dishes
              .filter((dish) => dish.category == "meals")
              .map((dish) => (
                <CardDishes data={dish} />
              ))}
          </div>
        )}

        <h2>Sobremesas</h2>
        {dishes.filter((dish) => dish.category == "desserts").length > 0 && (
          <div className="desserts">
            {dishes
              .filter((dish) => dish.category == "desserts")
              .map((dish) => (
                <CardDishes data={dish} />
              ))}
          </div>
        )}
        <h2>Bebidas</h2>
        {dishes.filter((dish) => dish.category == "drinks").length > 0 && (
          <div className="drinks">
            {dishes
              .filter((dish) => dish.category == "drinks")
              .map((dish) => (
                <CardDishes data={dish} />
              ))}
          </div>
        )}
      </section>
    </Container>
  );
}
