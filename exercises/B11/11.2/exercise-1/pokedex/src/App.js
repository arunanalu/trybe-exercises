import './App.css';
import Pokedex from './Pokedex';
import pokemons from './Data';

function App() {
  return (
    <div>
      <h1 className="title">Pokedex</h1>
      <Pokedex pokemons={ pokemons } />
    </div>
  );
}

export default App;
