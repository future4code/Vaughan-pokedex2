import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex'
import PokemonDetails from '../pages/PokemonDetails'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
    return (<BrowserRouter>
        <Routes>
            <Route exact path={"/"} element={<Home />} />

            <Route exact path={"/pokedex"} element={<Pokedex />} />

            <Route exact path={"/pokemon/:id"} element={<PokemonDetails />} />

            <Route exact path={"*"} element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>)
}

export default Router