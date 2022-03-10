import React from 'react'
import PokedexEmpty from '../../assets/pokedex-empty.webp'
import { Container, ImgStyle } from './styled'
import Typography from "@mui/material/Typography";

const ImgPokedexEmpty = () => {
    return (
        <Container>
            <ImgStyle src={PokedexEmpty} alt='Imagem de Placeholder' />
            <Typography variant='h4' color='#5F5950'>Vá Pegar Todos</Typography>
        </Container>
    )
}

export default ImgPokedexEmpty