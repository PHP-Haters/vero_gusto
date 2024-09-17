const currentPage = window.location.href.split("/").pop(); // Breaks the URL into pieces and get the last element (current page) 
const pageLink = currentPage === "index.html" ? "#first-page" : "#second-page"; 
document.querySelector(pageLink).classList.add("current-page");

var inputQuantidadeSabores = document.getElementById("quantidade_sabores");
var pizzaContainer = document.getElementById("container-pizza");

function capturaQuantidadeSabores(){
    return parseFloat(inputQuantidadeSabores.value);
}

function limpaQuantidadeSabores() {     
    while(pizzaContainer.firstChild) { 
        pizzaContainer.removeChild(pizzaContainer.firstChild); 
    } 
} 

inputQuantidadeSabores.addEventListener("change", () => {
    let quantidade = capturaQuantidadeSabores();
    limpaQuantidadeSabores();

    for(var i = 0; i < quantidade; i++){
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices'></div>";
    }
});