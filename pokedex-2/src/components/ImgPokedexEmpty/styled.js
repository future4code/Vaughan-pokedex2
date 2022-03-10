import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ImgStyle = styled.img`
height: 70vh;
max-width: 60vw;
border-radius: 1rem;
margin-bottom: 1rem;

@media (max-width: 400px){
    max-width: 96%;
}
`