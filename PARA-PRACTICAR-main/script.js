async function datoPokemon(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
}

async function createPokemonCard(pokemonName) {
    const pokemonData = await datoPokemon(pokemonName);
    const pokemonList = document.getElementById('pokemonList');

    const card = document.createElement('div');
    card.classList.add('bg-red', 'hover:bg-gray-500', 'rounded-lg', 'shadow-xl', 'shadow-green', 'p-4', 'cursor-pointer'); // Añadida la clase 'shadow-black'
    card.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonName} Image" class="mx-auto">
        <h2 class="text-center font-semibold mt-2 hover:text-white">${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
    `;

    pokemonList.appendChild(card);
}


async function displayPokemonList() {
    const pokemonNames = await fetch('https://pokeapi.co/api/v2/pokemon?limit=250')
        .then(response => response.json())
        .then(data => data.results.map(pokemon => pokemon.name));

    pokemonNames.sort(() => Math.random() - 0.5);

    for (const pokemonName of pokemonNames) {
        await createPokemonCard(pokemonName);
    }
}


document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

displayPokemonList();
