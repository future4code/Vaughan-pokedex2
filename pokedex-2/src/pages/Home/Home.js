import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PokeCard from "./PokeCard";
import { CardContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";

const Home = () => {
  const [data, loading] = useRequestData({}, BASE_URL);
  const navigate = useNavigate();

  const pokemonList =
    data.results &&
    data.results.map((pokemon) => {
      return (
        <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          onClickCard={() => goToPokemonDetail(navigate, pokemon.name)}
        />
      );
    });
  console.log(data);
  return (
    <CardContainer>
      {loading && <Loading />}
      {!loading && data && pokemonList}
    </CardContainer>
  );
};

export default Home;
