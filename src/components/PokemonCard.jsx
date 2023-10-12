function PokemonCard({pokemon}) {


    
    return (
    <figure>
        <img src={pokemon.imgSrc}/>
        <figcaption>{pokemon.name}</figcaption>
    </figure>) 

    // return(pokemon.imgSrc)
    
}

// const pokemonList = [
//     {
//       name: "bulbasaur",
//       imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//       name: "mew",
//       imgSrc :""    },
//   ];

export default PokemonCard;