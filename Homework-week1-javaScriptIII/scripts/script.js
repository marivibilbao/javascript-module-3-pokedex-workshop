/* Declaración de la parte superior de la web - Título */
const root = document.querySelector("#root"); //Declaramos al elemento que se encuentra en el HTML
const divContainer = document.createElement("container"); //Creamos elemento container
root.appendChild(divContainer); //Container hijo de div root

const divlogo = document.createElement("div"); //Creamos otro elemento div
divlogo.classList.add("logo-title"); //Agrego clase al elemento
divContainer.appendChild(divlogo);

const logoTitle = '<a href="https://fontmeme.com/es/fuente-pokemon/"><img src="https://fontmeme.com/permalink/210817/490e5659d2a7956931760d8353390978.png" alt="fuente-pokemon" border="0"></a>';
divlogo.innerHTML = logoTitle;

/* Declaración de botones de búsqueda */
const divButtons = document.createElement("div"); //Creamos elemento "div" para botones
divButtons.classList.add("buttons"); //Clase del elemento "div"
divContainer.appendChild(divButtons);

//Primer botón área de búsqueda
const buttonOne = '<input id="text-search" type="text" placeholder="Escribe tu pokemon aquí"></input>';
divButtons.innerHTML = buttonOne;

//Segúndo botón
const buttonTwo = '<button id="search-button" type="button" class="btn btn-warning">Buscar</button>'; //Segundo botón

//Tercer botón
const divButton = document.createElement("div"); //Creamos elemento "div" el tercer botón
divButton.classList.add("button"); //Clase del elemento "div"
divContainer.appendChild(divButton);

const buttonThree ='<button id="search-all-pokemon" class="btn btn-primary" type="button">Ver más pokemones</button>';
divButton.innerHTML = buttonThree;



