import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Ability = () => {

    const [ability, setAbility] = useState([])
    // const [abilityImg, setImage] = useState({ images: {} })

    const fetchAbility = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/`)
        const abilityData = await response.json()
        setAbility(abilityData.results)
    }

    useEffect(() => {
        fetchAbility()
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