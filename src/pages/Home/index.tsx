import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";

export function Home() {
  const { data } = useQueryPokemonPage();
  console.log(data);

  return (
    <Container>
      <h1>Home</h1>
      <p>{data}</p>
    </Container>
  );
}
