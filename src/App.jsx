import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';


function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  // const handlePreviousClick = () => {
  //   if (pokemonIndex > 0) {
  //     setPokemonIndex(pokemonIndex - 1);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (pokemonIndex < pokemonList.length - 1) {
  //     setPokemonIndex(pokemonIndex + 1);
  //   }
  // };


  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  // const pokemon = pokemonList[pokemonIndex];

  return (

    <div>


      <PokemonCard
      pokemon = {pokemonList[pokemonIndex]}
      />

    <NavBar
    pokemonIndex={pokemonIndex}
    setPokemonIndex={setPokemonIndex}
    pokemonList={pokemonList}
    />

    </div>

  );
}

export default App;