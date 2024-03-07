const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", async () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        try {
            let pokemonData;
            if (searchTerm) {
                pokemonData = await fetchData(searchTerm);
            }
            if (pokemonData.error) {
                alert("Pokémon not found");
            } else {
                updateCard(pokemonData);
                addPokemonImage(pokemonData.sprites.front_default);
            }
        } catch (err) {
            console.log("Error fetching Pokémon data:", err);
            alert('Error fetching Pokémon data. Please try again.');
        }
    } else {
        alert("Please enter a Pokémon name or ID.");
    }
});

const fetchData = async (searchTerm) => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return { error: true };
    }
};

const updateCard = (pokemonData) => {
    document.getElementById("pokemon-name").textContent = capitalizeFirstLetter(pokemonData.name);
    document.getElementById("pokemon-id").textContent = `#${pokemonData.id}`;

    document.getElementById("weight").textContent = `Weight: ${pokemonData.weight}`;
    document.getElementById("height").textContent = `Height: ${pokemonData.height}`;

    const typesElement = document.getElementById('types');
    typesElement.innerHTML = '';
    pokemonData.types.forEach(type => {
        const typeSpan = document.createElement('span');
        typeSpan.textContent = capitalizeFirstLetter(type.type.name);
        typesElement.appendChild(typeSpan);
    });

    document.getElementById('hp').textContent = pokemonData.stats[0].base_stat;
    document.getElementById('attack').textContent = pokemonData.stats[1].base_stat;
    document.getElementById('defense').textContent = pokemonData.stats[2].base_stat;
    document.getElementById('special-attack').textContent = pokemonData.stats[3].base_stat;
    document.getElementById('special-defense').textContent = pokemonData.stats[4].base_stat;
    document.getElementById('speed').textContent = pokemonData.stats[5].base_stat;
};

const addPokemonImage = (imageUrl) => {
    const imageContainer = document.querySelector('.image');
    const pokemonImage = document.createElement('img');
    pokemonImage.id = 'sprite';
    pokemonImage.src = imageUrl;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(pokemonImage);
};

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
