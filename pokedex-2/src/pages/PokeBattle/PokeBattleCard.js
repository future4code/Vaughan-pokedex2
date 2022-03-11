import { CardContainer } from './styled'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

const PokeBattleCard = () => {



    return (
        <CardContainer>
            <select>
                <option>pokemons</option>
            </select>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png' />
            <div>
                <ProgressBar statText={'pokemon'} />
                <ProgressBar />
                <ProgressBar />
                <ProgressBar />
                <ProgressBar />
            </div>
        </CardContainer>
    )
}

export default PokeBattleCard