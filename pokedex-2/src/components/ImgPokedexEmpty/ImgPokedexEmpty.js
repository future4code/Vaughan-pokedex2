import React from 'react'
import DetectivePikachu from '../../assets/pikachu-search.webp'
import DetectiveGif from '../../assets/detective-pikachu.gif'
import {Container, IframeStyle} from './styled'

const ImgPokedexEmpty = () => {
    return (
    <Container>
        {/* VAZIO
        <img src={DetectivePikachu} alt='Página vazia' /> */}
        <IframeStyle src={DetectiveGif} align="middle" >
          
        </IframeStyle>
    </Container>
    )
}

export default ImgPokedexEmpty