import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BattleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px 1fr;
    width: 100vw;

    #middle-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    img {
        width: 20vw;
        min-width: 250px;
    }
`