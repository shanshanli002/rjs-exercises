import React from "react";
import Pokedex from "./Pokedex";
import pokemonData from "./PokemonData";
import "./App.css";
const App = () => {
    return (
        <div className="App">
        <h1 className="App-title">Pokedex</h1>
        <Pokedex pokemons={pokemonData}/>
        </div>
    );
}

export default App;