import { Container, Text } from "./styles";
import BannerImg from "../../assets/banner.png";

export function Banner({ title, description }) {
  return (
    <Container>
      <img src={BannerImg} />
      <Text>
        <h1>{title}</h1>
        <p>{description}</p>
      </Text>
    </Container>
  );
}
