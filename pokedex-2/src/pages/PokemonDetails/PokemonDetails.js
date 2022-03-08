import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";


const PokemonDetails = (props) => {
    const pokemon = useRequestData({}, `${BASE_URL}caterpie`)[0];

    console.log(pokemon)

const statList = pokemon && pokemon.stats.map((statPoke) => {
  return ( <ProgressBar  percent={statPoke.base_stat} statText={statPoke.stat.name} />)
}) 
return (
    <div>
        {pokemon && pokemon.name}
        <img src={pokemon.sprites && pokemon.sprites.front_default} />

    </div>
)
}


export default PokemonDetails