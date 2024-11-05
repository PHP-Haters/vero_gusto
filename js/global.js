const currentPage = window.location.href.split("/").pop(); // Breaks the URL into pieces and get the last element (current page) 
const pageLink = currentPage === "index.html" ? "#first-page" : "#second-page"; 
document.querySelector(pageLink).classList.add("current-page");

var inputQuantidadeSabores = document.getElementById("quantidade_sabores");
var pizzaContainer = document.getElementById("container-pizza");

var pedacosDePizza = [];
function capturaQuantidadeSabores(){
    return parseFloat(inputQuantidadeSabores.value);
}

function limpaQuantidadeSabores() {     
    while(pizzaContainer.firstChild) { 
        pizzaContainer.removeChild(pizzaContainer.firstChild); 
    } 
} 

inputQuantidadeSabores.onchange = function() {
    let quantidade = parseInt(inputQuantidadeSabores.options[inputQuantidadeSabores.selectedIndex].value);
    
    limpaQuantidadeSabores();

    if(quantidade == 1){
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices'><img heigth=500 width=500 src='assets/images/montagem/pizza_um_sabor.png' alt=''></div>";
    }
    else if(quantidade == 2){
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices flipH'><img heigth=300 width=300 src='assets/images/montagem/pizza_um_sabor3.png' alt=''></div><div class='pizza-slices'><img heigth=300 width=300 src='assets/images/montagem/pizza_um_sabor3.png' alt=''></div>";
    }
    else{
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices '><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices flipH'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices flipH flipV'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices'><img heigth=150 width=150 src='assets/images/montagem/pizza_imagem_4_invertida.png' alt=''></div>";
    }
}


const tamanhoPizza = document.querySelector("#tamanho");
const quantidadeSabores = document.querySelector("#quantidade_sabores");
const bordaPizza = document.querySelector("#borda");
const saborBorda = document.querySelector("#saborBorda");
const cep = document.querySelector("#cepInput");
const rua = document.querySelector("#ruaInput");
const telefone = document.querySelector("#telefoneInput");
const bairro = document.querySelector("#bairroInput");
const complemento = document.querySelector("#complementoInput");
const usuario = document.querySelector("#nomeUsuarioInput");

const formBtn = document.querySelector("#formBtn");

formBtn.addEventListener("click", validarDados);

function validarDados(event){
    event.preventDefault();
    
    if (tamanhoPizza.value ||
        quantidadeSabores.value ||
        bordaPizza.value ||
        saborBorda.value ||
        cep.value ||
        rua.value ||
        telefone.value ||
        bairro.value ||
        complemento.value ||
        usuario.value) {
        mostrarPopUp();
    } else {
        window.alert("Ainda há campos vazios no formulário");
    }
}

function mostrarPopUp(){
    window.alert("Finge que isso aqui deu certo");
}