function PokemonCard ({pokemon}) {

    
    return (

    <div>

        <img src={pokemon.imgSrc}/>
        <figcaption>{pokemon.name}</figcaption>

    </div>
    ) 
    
} ;

export default PokemonCard;