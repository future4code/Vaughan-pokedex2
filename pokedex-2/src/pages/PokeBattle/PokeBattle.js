import Typography from '@mui/material/Typography';
import PokeBattleCard from './PokeBattleCard';
import { PageContainer, BattleContainer } from './styled'

const PokeBattle = () => {
    return (
        <PageContainer>
            <Typography variant='h4' color='#5F5950' sx={{ margin: '25px 0' }} >Escolha os Pokemons</Typography>
            <BattleContainer>
                <PokeBattleCard />
                <div id='middle-container'>
                    <Typography variant='h5' color='#5F5950'><strong>VS</strong></Typography>
                    <Typography variant='h5' color='#5F5950'>Pokemon Vitorioso:</Typography>
                </div>
                <PokeBattleCard />
            </BattleContainer>
        </PageContainer>)
}

export default PokeBattle