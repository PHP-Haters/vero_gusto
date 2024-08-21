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

function modificarQuantidadesSabores(){
    inputQuantidadeSabores.addEventListener("change", () => {
        let quantidade = capturaQuantidadeSabores();

        limpaQuantidadeSabores();

        for(var i = 0; i < quantidade; i++){
            pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices'></div>";
        }
    });
}