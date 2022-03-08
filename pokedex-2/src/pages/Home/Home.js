import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import PokeCard from './PokeCard'
import { CardContainer } from './styled'
import Loading from '../../components/Loading/Loading'


const Home = () => {

    const [data, loading] = useRequestData({}, BASE_URL)

    const pokemonList = data.results && data.results.map((pokemon) => {
        return <PokeCard name={pokemon.name} />
    })

    return (
        <CardContainer>
            {loading && <Loading />}
            {!loading && data && pokemonList}
        </CardContainer>
    )
}


export default Home