import React, {useState} from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'
const Home = () => {

    const [pokemonName, setPokemonName] = useState('')
    const { data, error, isLoading ,refetch } = useGetPokemonByNameQuery(pokemonName, {skip: pokemonName === ''})

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPokemonName(e.currentTarget.elements.pokemonName.value)
    }

  return (
    <div>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label>
                <input type="text" name="pokemonName" />
                <button type="submit">sub</button>
            </label>
        </form>

        <button onClick={refetch}>REFETCH</button>
    </div>
  )
}

export default Home