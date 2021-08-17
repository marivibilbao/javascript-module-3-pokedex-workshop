const renderPokemonCard = (res) => {
    const cardElement = document.createElement("div");
    const cardFragmentHtml = '<div class="card"><img src="" class="card-img-top" alt=""><div class="card-body"><p class="card-text"></p></div></div>';
    cardElement.innerHTML = cardFragmentHtml;
    document.querySelector(".card-container").appendChild(cardElement);
    document.querySelector(".card-text").innerHTML = res.name;
    document.querySelector(".card-img-top").src = res.sprites.back_default;
};

//Para borrar las tarjetas que se busquen anteriormente (limpiar el contenido)
const clearContent = () => {
    document.querySelector(".card-container").innerHTML="";
    document.querySelector(".alert-container").innerHTML="";
    document.querySelector(".list-group").innerHTML="";
};

const renderAlert = (alerText) => {
    const alertElement = document.createElement("div");
    const alertFragmentHtml = '<div class="alert alert-danger" role="alert"></div>';
    alertElement.innerHTML = alertFragmentHtml;
    document.querySelector(".alert-container").appendChild(alertElement);
    document.querySelector(".alert").innerHTML = alerText;
};

const getSinglePokemon = async (search) => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${search}`;
        const response = await fetch(url);
        const parsedRes = await response.json(); //Transformarlo en un objeto de javascript
        clearContent();
        renderPokemonCard(parsedRes);
    }catch(error){
        console.log(error);
        clearContent();
        renderAlert(`Something went wrong with your search: ${search}`);
    };
};

//Para que muestre todo los elementos en una lista
const renderPokemonList = (res) => {
    res.results.forEach((pokemon, i) =>{
        let listElement = document.createElement("li");
        listElement.classList.add(`pokemon-${i+1}`,"list-group-item");
        document.querySelector(".list-group").appendChild(listElement);
        listElement.innerHTML = `<button class ="btn btn-link">${pokemon.name}</button>`;
        document.querySelector(`.pokemon-${i+1}`).onclick =() => {
            getSinglePokemon(i+1)
        };
    });
};

const getAllPokemons = async() => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const response = await fetch(url);
        const parsedRes = await response.json();
        clearContent();
        renderPokemonList(parsedRes);
    }catch (error){
        console.log(error);
        clearContent();
        renderAlert("Something went wrong with your request");
    }
};

window.onload = () =>{
    document.querySelector("#search-button").addEventListener("click",
    () => {
        const searchTerm = document.querySelector(".form-control").value;
        searchTerm && getSinglePokemon(searchTerm);
    });
    document.querySelector("#fetch-all").addEventListener("click",
    () => {
        getAllPokemons();
    });
};