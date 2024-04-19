import React from "react";
import PokemonCard from "./PokemonCard";
// Obtener la lista de pokemons
import pokemonDb from "../../../../assets/poke_api_db.json";

const PokemonList = () => {
  console.log(pokemonDb);
  return (
    <section id="contenedor-card">
      <h2>Mis pokemons</h2>
      {/* El map sirve para recorrer la lista de los pokemons */}
      {pokemonDb.map((pokemon) => (
        // Le pasamos la info de cada pokemon al componente PokemonCard
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
