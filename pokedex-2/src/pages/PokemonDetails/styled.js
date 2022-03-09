import styled from "styled-components"

export const CardPokemonDetail = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
width: 100%;
margin-bottom: 2rem;  
`

export const TypeContainer = styled.div`
    display: flex ;
    justify-content: center;
`

export const CardStatsPoke = styled.div`
    background-color: white;
    border-radius: 2rem;
    padding: 2em;
    width: 70vw;
`

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 0;
    width: 50vw;
    column-gap: 1rem;
`