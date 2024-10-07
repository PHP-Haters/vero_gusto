const currentPage = window.location.href.split("/").pop(); // Breaks the URL into pieces and get the last element (current page) 
const pageLink = currentPage === "index.html" ? "#first-page" : "#second-page"; 
document.querySelector(pageLink).classList.add("current-page");

var inputQuantidadeSabores = document.getElementById("quantidade_sabores");

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
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices flipH'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices flipH flipV'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices flipV flipH'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div>";
    }
}

var pizzaContainer = document.getElementById("container-pizza");

function limpaQuantidadeSabores() {     
    while(pizzaContainer.firstChild) { 
        pizzaContainer.removeChild(pizzaContainer.firstChild); 
    } 
} 
