
const PokeApi = {}

function convertPokeApiDetailToPokemon(pokemonsDetail) {
    const pokemon = new Pokemon ()
    pokemon.number = pokemonsDetail.id
    pokemon.name = pokemonsDetail.name
    
    const types = pokemonsDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.image = pokemonsDetail.sprites.other['official-artwork'].front_default

    return pokemon
}


PokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}


PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results) //.then pode ser encadeado e um then sempre recebe a resposta do anterior
        .then((pokemons) => pokemons.map(PokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error))
}
