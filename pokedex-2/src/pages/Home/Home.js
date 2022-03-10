import PokeCard from "./PokeCard";
import { CardContainer, InputContainer, BodyContent } from "./styled";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext, useState } from "react";
import { Input } from '@mantine/core';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const { states, loading } = useContext(GlobalStateContext)
  const [query, setQuery] = useState("")

  const updateQuery = (event) => {
    setQuery(event.target.value)
  }

  const navigate = useNavigate();

  const pokemonList =
    states.pokemonsHome &&
    states.pokemonsHome.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(query.toLowerCase())
    })
      .map((pokemon, index) => {
        return (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            onClickCard={() => goToPokemonDetail(navigate, pokemon.name)}
            index={index}
          />
        );
      });

  return (<BodyContent>
    <InputContainer>
      <Input size="md"
        icon={<SearchIcon />}
        placeholder="Buscar Pokemon"
        onChange={updateQuery}
        value={query}
      />
    </InputContainer>
    <CardContainer>
      {loading && <Loading />}
      {!loading && states.pokemonsHome && pokemonList}
    </CardContainer>
  </BodyContent>
  );
};

export default Home;
