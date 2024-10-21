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

function umSabor(quantidade) {
    for(var i = 0; i < quantidade; i++){
        pedacosDePizza[i].innerHTML =  pedacosDePizza[i].innerHTML + "<img src='assets/images/montagem/pizza_um_sabor.png' alt=''>";
    }
}
function doisSabores(quantidade) {
    for(var i = 0; i < quantidade; i++){
        console.log(pedacosDePizza[i]);
        pedacosDePizza[i].innerHTML = "<img src='assets/images/montagem/pizza_um_sabor3.png' alt=''>";
    }
}
function quatroSabores(quantidade) {
    for(var i = 0; i < quantidade; i++){
        console.log(pedacosDePizza[i]);
        pedacosDePizza[i].innerHTML = "<img src='assets/images/montagem/pizza_um_sabor4.png' alt=''>";
    }
}


inputQuantidadeSabores.addEventListener("change", () => {
    
    let quantidade = capturaQuantidadeSabores();
    limpaQuantidadeSabores();
    for(var i = 0; i < quantidade; i++){
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div id='"+i+"Pedaco' class='pizza-slices'></div>";
        pedacosDePizza[i] = document.getElementById(i+"Pedaco");
    }
    if(quantidade == 2) {
        doisSabores(quantidade);
    } 
    else if(quantidade == 4) {
        quatroSabores(quantidade);
    }
    else {
        umSabor(quantidade);
    }
});