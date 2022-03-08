import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";


const PokemonDetails = () => {
    const pokemon = useRequestData({}, `${BASE_URL}caterpie`)[0]

    const statList = pokemon.stats && pokemon.stats.map((statPoke) => {
        return (<ProgressBar percent={statPoke.base_stat} statText={statPoke.stat.name} />)
    })
    return (
        <div>
            {pokemon && pokemon.name}
            <img src={pokemon.sprites && pokemon.sprites.front_default} />
            {statList}
        </div>
    )
}


export default PokemonDetails