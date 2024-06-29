// import {useState} from "react";
import '../style/index.css'
import {PokemonCards} from "../componets";
function App() {
    // const [pokemon, setPokemon] = useState({})
    //
    // const getPokemon =  async () => {
    //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    //     const data = await response.json()
    //     console.log(data)
    //     setPokemon(data)
    // }

  return (
    <>
        {/*<button onClick={getPokemon}>Start</button>*/}
        <div className='wrapper'>
            <PokemonCards/>
        </div>
    </>
  )
}

export default App
