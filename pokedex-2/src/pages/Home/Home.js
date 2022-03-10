import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import PokeCard from "./PokeCard";
import { CardContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";

const Home = () => {
  const {states, sets, loading} = useContext(GlobalStateContext)
  console.log("STATES E SETS NA HOME", states, sets)

  const navigate = useNavigate();

  const pokemonList =
    states.pokemonsHome &&
    states.pokemonsHome.sort((poke) => {
      return poke.url //Tentar ordenar pelo Id da url
    }).map((pokemon, index) => {
      return (
        <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          onClickCard={() => goToPokemonDetail(navigate, pokemon.name)}
          index={index}
        />
      );
    });
  
  return (
    <CardContainer>
      {loading && <Loading />}
      {!loading && states.pokemonsHome && pokemonList}
    </CardContainer>
  );
};

export default Home;
