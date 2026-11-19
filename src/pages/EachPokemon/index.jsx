import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const EachPokemon = () => {
    const {name} = useParams()
    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({name: '', img: ''})

    const fetchAbility = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemon = await response.json()
        setPokemon({
            name: pokemon.name,
            img: pokemon.sprites.other['official-artwork'].front_default

        }
        )
    }

    useEffect(() => {
        fetchAbility()
    }, [name])

    return (
        <div className='pokemonImage'>
            <button onClick={() => navigate('/pokemon')}>Back to list of pokemon</button>
            <h1>{pokemon.name}</h1>
            <img className='image' src={pokemon.img} alt={pokemon.name} />
            {/* <p>{ability.effect_entries.effect}</p> */}
        </div>
    )
}

export default EachPokemon