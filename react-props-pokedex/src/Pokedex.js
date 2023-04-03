import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemons }) => {
  return (
    <div className="Pokedex">
      {pokemons.map((pokemon) => (
        <Pokecard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          baseExperience={pokemon.base_experience}
        />
      ))}
    </div>
  );
};
export default Pokedex;
