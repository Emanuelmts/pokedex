
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const limit = 10
let offset = 0
const maxRecords = 151


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.image}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemomItens(offset, limit) {
    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemomItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemomItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {
        loadPokemomItens(offset, limit)
    }

    

})

//PokeApi.getPokemons().then((pokemons = []) => {
//    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
//}) // lógica do For e transformação da lista em uma li HTML (com .map) com concatenação (.join) sem separador