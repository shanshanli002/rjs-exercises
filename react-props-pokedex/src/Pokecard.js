import React from "react";
import './Pokecard.css';

const Pokecard = ({id, name, type, baseExperience}) => {
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-name">{name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon"/>
        <p>Type: {type} </p>
        <p>EXP: {baseExperience} </p>
      </div>
    );
}


export default Pokecard;