import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {CardPokemonDetail} from './styled'


const PokemonDetails = () => {
  const pathParams = useParams();
  console.log("pathparams pokemon details", pathParams.id);
  const pokemon = useRequestData({}, `${BASE_URL}${pathParams.id}`)[0];

  const statList =
    pokemon.stats &&
    pokemon.stats.map((statPoke) => {
      return (
        <div>
          <ProgressBar
            statText={statPoke.stat.name}
            value={(statPoke.base_stat / 255) * 100}
            label={statPoke.base_stat}
          />
        </div>
      );
    });
  return (
    <CardPokemonDetail>
      <h1>{pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img
        src={
          pokemon.sprites &&
          pokemon.sprites.other["official-artwork"].front_default
        }
        alt="Pokemons imagens"
      />
      {statList}
    </CardPokemonDetail>
  );
};

export default PokemonDetails;
