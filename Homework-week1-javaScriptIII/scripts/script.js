/* 1. Declaración de la parte superior de la web - Título */
const root = document.querySelector("#root"); //Declaramos al elemento que se encuentra en el HTML
const divContainer = document.createElement("div"); //Creamos elemento div container
divContainer.classList.add("container");
root.appendChild(divContainer); //Container hijo de div root

const divlogo = document.createElement("div"); //Creamos otro elemento div
divlogo.classList.add("logo-title"); //Agrego clase al elemento
divContainer.appendChild(divlogo);

const logoTitle = '<a href="https://fontmeme.com/es/fuente-pokemon/"><img src="https://fontmeme.com/permalink/210817/490e5659d2a7956931760d8353390978.png" alt="fuente-pokemon" border="0"></a>';
divlogo.innerHTML = logoTitle;

/* 9. Texto después del logo: */
const pElement = document.createElement("p");
pElement.classList.add("text-first");
divContainer.appendChild(pElement);
pElement.innerHTML = "Los Pokémon son las criaturas que habitan el mundo de los juegos de Pokémon. Pueden ser atrapados usando Pokebolas y son entrenados luchando con otros Pokemones. Cada Pokemon pertenece a una especie específica, para saber más datos sobre ellos puede ingresar el nombre o un número y te aparecerá una ficha con datos";

/* 2. Declaración de botones de búsqueda */
const divButtons = document.createElement("div"); //Creamos elemento "div" para botones
divButtons.classList.add("buttons"); //Clase del elemento "div"
divContainer.appendChild(divButtons);

//Primer y segundo botón:
divButtons.innerHTML = '<input id="text-search" type="text" placeholder="Escribe tu pokemon aquí"></input><button id="search-button" type="button" class="btn btn-warning">Buscar</button>'

//Tercer botón
const divButton = document.createElement("div"); //Creamos elemento "div" el tercer botón
divButton.classList.add("button"); //Clase del elemento "div"
divContainer.appendChild(divButton);

const buttonThree ='<button id="search-all-pokemon" class="btn btn-primary" type="button">Ver más pokemones</button>';
divButton.innerHTML = buttonThree;

//Declaramos "divCardElement" con elemento clase "div-card" se saca de la función para que pueda luego hacer la limpieza
const divCardElement = document.createElement("div"); //Creamos un elemento "div"
divCardElement.classList.add("div-card");
divContainer.appendChild(divCardElement);

/* 5. Función para mostrar la tarjeta de un pokemon */
function renderPokemonCard(pokemon) {
    /* No funciona ya que se debe crear fuera de la función */
    //const divCardElement = document.createElement("div"); //Creamos un elemento "div"
    //divCardElement.classList.add("div-card");
    const contentDivCard = '<div class="card border-dark mb-3" id= "card-pokemon" style="max-width: 740px;"><div class="row g-0"><div class="col-md-4"><img src="" class="img-fluid rounded-start" alt=""></div><div class="col-md-8"><div class="card-body"><h5 class="card-title"></h5><p class="card-text"><p class="card-text-2"><p class="card-text-3"><p class="card-text-4"></p></p></p></p></div></div></div></div>';
    divCardElement.innerHTML = contentDivCard;
    divContainer.appendChild(divCardElement);

    //Información que quiero que aparezca en el contenido de la tarjeta:
    document.querySelector(".card-title").innerHTML = pokemon.name.toUpperCase(0);
    document.querySelector(".img-fluid").src = pokemon.sprites.front_default; //El dato front_default se debe buscar en la API
    document.querySelector(".card-text").innerHTML = `<b>Peso:</b> ${pokemon.weight} hectograms`;
    document.querySelector(".card-text-2").innerHTML = `<b>Altura:</b> ${pokemon.height} decimetres`;
    document.querySelector(".card-text-3").innerHTML = `<b>Experiencia al derrotar éste Pokemon:</b> ${pokemon.base_experience}`;
    const {types} = pokemon; document.querySelector(".card-text-4").innerHTML = `<b>Tipo:</b> ${types[0].type.name}`;
};

/* 4. Función para mensaje de alerta */
function alertMessage () {
    window.alert("No existe ese Pokemon, intentalo de nuevo");
}

/* 7. Función para buscar la información del pokemón */
function searchPokemonApi() {
    const textSearchContentButton = document.querySelector("#text-search").value;
    getPokemonApi(textSearchContentButton);
};

/* 12. Función para visualizar varios pokemones */
/* Mi función daba este error antes ---> ERROR: Cannot set property 'onclick' of null */
const renderAllPokemonList = (formatJsonAll) => {
    //console.log(formatJsonAll);
    formatJsonAll.results.forEach((pokemon, index) => {
        /* No funciona y "ul" lo pase al HTML
        let ulElement = document.createElement('ul');
        ulElement.classList.add("ul-pokemon");
        */
        
        let listElement = document.createElement('li');
        listElement.classList.add(`pokemon-${index+1}`, "list-group-item");
        
        document.querySelector(".list-group").appendChild(listElement);
        listElement.innerHTML= `<button class="btn btn-link">${pokemon.name}</button>`;
        document.querySelector(`.pokemon-${index + 1}`).onclick = () => {
            getPokemonApi(index + 1);
        };
    });
};

/* 13. Función para limpiar el contenido después de las búsqiedas*/
function clearContent() {
    document.querySelector(".div-card").innerHTML = "";
    document.querySelector(".list-group").innerHTML = "";
};

/* 3. Función para hacer request de pokemones a la API: */
const getPokemonApi = async(pokemon) => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const formatJson = await fetch(url); //Formato json
        const formatObject = await formatJson.json(); //Formato objeto
        clearContent();
        renderPokemonCard(formatObject); //Llamamos a la función para que muestre las tarjetas del pokemon
    }catch (error){
        alertMessage(); //Si no existe que muestre ese mensaje de error
    };
};

/* 10. Función para hacer request de pokemones a la API (visualizar varios) */
const getAllPokemonApi = async () => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const formatJsonAll = await fetch(url);
        const formatObjectAll = await formatJsonAll.json();
        clearContent();
        renderAllPokemonList(formatObjectAll);
    }catch(error){
        console.log(error);
    };
};

/* 6. Evento de click */
const searchButton = document.querySelector("#search-button"); //Declaramos el botón de buscar
searchButton.addEventListener("click", () => {
    searchPokemonApi();
});

/* 8. Evento de botón enter */
document.querySelector("#text-search").addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        searchPokemonApi();
    };
}); 

/* 11. Evento de click para botón azúl de "ver varios pokemones" */
document.querySelector("#search-all-pokemon").addEventListener("click", () => {
    getAllPokemonApi();
});

