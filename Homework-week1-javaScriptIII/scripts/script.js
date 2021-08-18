/* 1. Declaración de la parte superior de la web - Título */
const root = document.querySelector("#root"); //Declaramos al elemento que se encuentra en el HTML
const divContainer = document.createElement("container"); //Creamos elemento container
root.appendChild(divContainer); //Container hijo de div root

const divlogo = document.createElement("div"); //Creamos otro elemento div
divlogo.classList.add("logo-title"); //Agrego clase al elemento
divContainer.appendChild(divlogo);

const logoTitle = '<a href="https://fontmeme.com/es/fuente-pokemon/"><img src="https://fontmeme.com/permalink/210817/490e5659d2a7956931760d8353390978.png" alt="fuente-pokemon" border="0"></a>';
divlogo.innerHTML = logoTitle;

/* 2. Declaración de botones de búsqueda */
const divButtons = document.createElement("div"); //Creamos elemento "div" para botones
divButtons.classList.add("buttons"); //Clase del elemento "div"
divContainer.appendChild(divButtons);


//Primer y segundo botón:
divButtons.innerHTML = '<input id="text-search" type="text" placeholder="Escribe tu pokemon aquí"></input><button id="search-button" type="button" class="btn btn-warning">Buscar</button>'

/* No funcionó como lo estaba haciendo por separado
//Primer botón área de búsqueda
const buttonOne = '<input id="text-search" type="text" placeholder="Escribe tu pokemon aquí"></input>';
divButtons.innerHTML = buttonOne;
//Segúndo botón
const buttonTwo = '<button id="search-button" type="button" class="btn btn-warning">Buscar</button>';
*/

//Tercer botón
const divButton = document.createElement("div"); //Creamos elemento "div" el tercer botón
divButton.classList.add("button"); //Clase del elemento "div"
divContainer.appendChild(divButton);

const buttonThree ='<button id="search-all-pokemon" class="btn btn-primary" type="button">Ver más pokemones</button>';
divButton.innerHTML = buttonThree;

/* 6. Eventos de click*/
function events() {

};

/* 5. Función para mostrar la tarjeta de un pokemon */
function renderPokemonCard(pokemon) {
    const divCardElement = document.createElement("div"); //Creamos un elemento "div"
    const contentDivCard = '<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-md-4"><img src="" class="img-fluid rounded-start" alt=""></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text"></p></div></div></div></div>';
    divCardElement.innerHTML = contentDivCard;
    divContainer.appendChild(divCardElement);
    //Información que quiero que aparezca en el contenido de la tarjeta:
    document.querySelector(".card-title").innerHTML = pokemon.name;
    document.querySelector(".img-fluid").src = pokemon.sprites;
    document.querySelector(".card-text").innerHTML = pokemon.skills
};

/* 4. Función para mensaje de alerta */
function alertMessage () {
    window.alert("No existe ese Pokemon, intentalo de nuevo");
};

/* 3. Función para hacer request de pokemones a la API: */
const getAllPokemonApi = async() => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const formatJson = await fetch(url); //Formato json
        const formatObject = await formatJson.json(); //Formato objeto
        renderPokemonCard(formatObject); //Llamamos a la función para que muestre las tarjetas del pokemon
    }catch (error){
        alertMessage(); //Si no existe que muestre ese mensaje de error
    };
};






