import './App.css';
import pokemons from './data'
import PokemonCard from './PokemonCard'

function App() {
  return (
    <>
      <h1 id="title">Pokedex</h1>
      <div className="card-container">
      {pokemons.map((pokemon) => {
      return (
      <PokemonCard pokemon={pokemon}/>
      )
    })}
      </div>
    </>
  );
}

export default App;
