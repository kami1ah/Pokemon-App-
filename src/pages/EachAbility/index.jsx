import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const EachAbility = () => {
    const {name} = useParams()
    const navigate = useNavigate()

    const [ability, setAbility] = useState({ name: '', generation: ''})

    const fetchAbility = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}`)
        const ability = await response.json()
        setAbility({
            name: ability.name,
            generation: ability.effect_entries.effect}
        )
    }

    useEffect(() => {
        fetchAbility()
    }, [name])

    return (
        <div>
            <button onClick={() => navigate('/ability')}>Back to Abilities</button>
            <h1>{ability.name}</h1>
            {/* <p>{ability.effect_entries.effect}</p> */}
        </div>
    )
}

export default EachAbility