import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const pathParams = useParams()
    console.log("pathparams pokemon details",pathParams.id)
    const pokemon = useRequestData({}, `${BASE_URL}${pathParams.id}`)[0]

    const statList = pokemon.stats && pokemon.stats.map((statPoke) => {
        return (<ProgressBar percent={(statPoke.base_stat/255)* 100} statText={statPoke.stat.name} value={statPoke.base_stat} />)
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