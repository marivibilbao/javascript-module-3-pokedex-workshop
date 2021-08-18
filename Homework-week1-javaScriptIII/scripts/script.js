/* Declaro variables*/
const root = document.querySelector("#root"); //Declaramos al elemento que se encuentra en el HTML
const divContainer = document.createElement("container"); //Creamos elemento container
root.appendChild(divContainer); //Container hijo de div root

const divlogo = document.createElement("div"); //Creamos otro elemento div
divlogo.classList.add("logo-title"); //Agrego clase al elemento
divContainer.appendChild(divlogo);

const logoTitle = '<a href="https://fontmeme.com/es/fuente-pokemon/"><img src="https://fontmeme.com/permalink/210817/490e5659d2a7956931760d8353390978.png" alt="fuente-pokemon" border="0"></a>';
divlogo.innerHTML = logoTitle;


/**/




