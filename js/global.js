const currentPage = window.location.href.split("/").pop(); // Breaks the URL into pieces and get the last element (current page) 
const pageLink = currentPage === "index.html" ? "#first-page" : "#second-page"; 
document.querySelector(pageLink).classList.add("current-page");
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

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
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices open-modal-btn'><img heigth=500 width=500 src='assets/images/montagem/pizza_um_sabor.png' alt=''></div>";
    }
    else if(quantidade == 2){
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices open-modal-btn flipH'><img heigth=300 width=300 src='assets/images/montagem/pizza_um_sabor3.png' alt=''></div><div class='pizza-slices open-modal-btn'><img heigth=300 width=300 src='assets/images/montagem/pizza_um_sabor3.png' alt=''></div>";
    }
    else{
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices open-modal-btn '><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices open-modal-btn flipH'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices open-modal-btn flipH flipV'><img heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices open-modal-btn'><img heigth=150 width=150 src='assets/images/montagem/pizza_imagem_4_invertida.png' alt=''></div>";
    }

    var newBotao = document.querySelectorAll('.open-modal-btn'); // Seleciona todos os botões com a classe

    // Adiciona o evento de clique para cada botão
    newBotao.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.classList.add('show'); // Exibe o modal
        });
    });

    closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show'); // Oculta o modal
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
    });
}

const openModalBtns = document.querySelectorAll('.open-modal-btn'); // Seleciona todos os botões com a classe

// Adiciona o evento de clique para cada botão
openModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('show'); // Exibe o modal
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show'); // Oculta o modal
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
  }
});