import React from "react";
import PokemonCard from "./PokemonCard";
import pokemonDb from "../../../../assets/poke_api_db.json";

const PokemonList = () => {
  console.log(pokemonDb);
  return (
    <section id="contenedor-card">
      <h2>Mis pokemons</h2>
      {pokemonDb.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          url={pokemon.url}
          name={pokemon.name}
        />
      ))}
    </section>
  );
};

export default PokemonList;
