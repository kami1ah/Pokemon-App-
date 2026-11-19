import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Ability = () => {
    const navigate = useNavigate()

    const [ability, setAbility] = useState([])
    // const [abilityImg, setImage] = useState({ images: {} })

    const fetchAbilities = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/`)
        const abilityData = await response.json()
        setAbility(abilityData.results)
    }

    useEffect(() => {
        fetchAbilities()
    }, [])


    return (
        <div>
            <h1>Pokemon Abilities</h1>
            <div>
                {ability.map((poks) => (
                    <p key={poks.name}>
                        <Link to={`/ability/${poks.name}`}>{poks.name}</Link>
                    </p>
                ))}
            </div>
        </div>
    )
    
}

export default Ability