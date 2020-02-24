/*Exercício 01*/

//cria um elemento do tipo <a>
var buttonElement = document.createElement('button');
buttonElement.style.margin = "10px";

//Seta o atributo passado e seu valor
buttonElement.setAttribute('title', 'Novo quadrado vermelho');

//Especifica uma String como o valor
var textElement = document.createTextNode('Adicionar');

// adiciona textElement como um filho de buttonElement
buttonElement.appendChild(textElement);

// --> (HTML)

//guarda a referência da id app
var containerElement = document.querySelector('#app');

//container agora tem um filho button
containerElement.appendChild(buttonElement);

//guarda a referencia da div botoes
var containerBotoes = document.querySelector('#botoes');

// --> (CSS): alterando o display da div botoes para flex
containerBotoes.style.display = "flex";
containerBotoes.style.flexWrap = "wrap";



//ao clicar no botão, um novo elemento filho (divElement) é criado
buttonElement.onclick = function novoElemento() {

    var divElement;
    divElement = document.createElement('div');
    divElement.style.width = "100px";
    divElement.style.height = "100px";
    divElement.style.backgroundColor = "red";
    divElement.style.margin= "10px";

    divElement.onmouseover = function() {
        divElement.style.backgroundColor = getRandomColor();
      }
    
    containerBotoes.appendChild(divElement);
}

/*Exercício 02*/

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/*Exercício 03*/

var listElement = document.querySelector('#app-2 ul');
var inputElement = document.querySelector('#app-2 input');
var buttonElement = document.querySelector('#app-2 button');

var nomes = JSON.parse(localStorage.getItem('list_nomes')) || [];

function renderNomes() {

    listElement.innerHTML = '';

    for (retorno of nomes) {
        var nomesElement = document.createElement('li');
        var nomesText = document.createTextNode(retorno);

        var linkElement = document.createElement('a');
        /*linkElement.setAttribute('href', '#');   */

        var linkText = document.createTextNode('EXCLUIR');

        linkElement.style.textDecoration = "none";
        linkElement.style.color = "red";
        linkElement.style.marginLeft = "10px";
        linkElement.style.fontSize = "10px";
        linkElement.style.cursor = "pointer";
        
        linkElement.appendChild(linkText);

        var pos = nomes.indexOf(retorno);
        linkElement.setAttribute('onclick', 'deleteNomes('+ pos +')');

        nomesElement.appendChild(nomesText);
        nomesElement.appendChild(linkElement);

        listElement.appendChild(nomesElement);
    }
}

renderNomes();

/*Exercício 04*/
function addNomes() {
    var nomesText = inputElement.value;

    nomes.push(nomesText);

    inputElement.value = '';
    renderNomes();
    saveToStorage();
}

buttonElement.onclick = addNomes;

function deleteNomes(pos) {
    nomes.splice(pos, 1);
    renderNomes();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_nomes', JSON.stringify(nomes))
}