import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const AllPokemon = () => {
    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState([])
    // const [abilityImg, setImage] = useState({ images: {} })

    const fetchAllPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const allPokemonData = await response.json()
        setPokemon(allPokemonData.results)
    }

    useEffect(() => {
        fetchAllPokemon()
    }, [])


    return (
        <div>
            <h1>List of Pokemon</h1>
            <div>
                {pokemon.map((poks) => (
                    <p key={poks.name}>
                        <Link to={`/pokemon/${poks.name}`}>{poks.name}</Link>
                    </p>
                ))}
            </div>
        </div>
    )
    
}

export default AllPokemon