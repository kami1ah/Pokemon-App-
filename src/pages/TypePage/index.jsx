import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Type = () => {

    const [type, setType] = useState([])
    // const [abilityImg, setImage] = useState({ images: {} })

    const fetchTypes = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/type/`)
        const typeData = await response.json()
        setType(typeData.results)
    }

    useEffect(() => {
        fetchTypes()
    }, [])


    return (
        <div>
            <h1>Types of Pokemon</h1>
            <div>
                {type.map((poky) => (
                    <p key={poky.id}>
                        <Link to={`/type/${poky.id}`}>{poky.name}</Link>
                    </p>
                ))}
            </div>
        </div>
    )
    
}

export default Type