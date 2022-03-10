import React, { useState, useEffect } from 'react'
import GlobalStateContext from './GlobalStateContext'
import useRequestData from "../hooks/useRequestData"
import {BASE_URL} from "../constants/urls"

const GlobalState = (props) => {
   const [pokedex, setPokedex] = useState([])
   const [pokemonsHome, setPokemonsHome] = useState([])

   const [data, loading] = useRequestData({}, BASE_URL);
   
   useEffect(()=> {
    setPokemonsHome(data.results)
   }, [data])

   const states = { pokedex, pokemonsHome }
   const sets = { setPokedex, setPokemonsHome }
    return (
        <GlobalStateContext.Provider value={{states, sets, loading}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState