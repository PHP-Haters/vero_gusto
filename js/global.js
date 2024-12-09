const currentPage = window.location.href.split("/").pop(); // Breaks the URL into pieces and get the last element (current page) 
const pageLink = currentPage === "index.html" ? "#first-page" : "#second-page";
document.querySelector(pageLink).classList.add("current-page");
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
let select = document.getElementById('sabor');
var inputQuantidadeSabores = document.getElementById("quantidade_sabores");
let quantidade = parseInt(inputQuantidadeSabores.options[inputQuantidadeSabores.selectedIndex].value);

var pizzaContainer = document.getElementById("container-pizza");

var pedacosDePizza = [];
function capturaQuantidadeSabores() {
    return parseFloat(inputQuantidadeSabores.value);
}

function limpaQuantidadeSabores() {
    while (pizzaContainer.firstChild) {
        pizzaContainer.removeChild(pizzaContainer.firstChild);
    }
}

inputQuantidadeSabores.onchange = function () {
    limpaQuantidadeSabores();

    if (quantidade == 1) {
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices open-modal-btn'><img heigth=500 width=500 src='assets/images/montagem/pizza_um_sabor.png' id='image1' alt=''></div>";
    }
    else if (quantidade == 2) {
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices open-modal-btn flipH'><img heigth=300 img='image1' width=300 src='assets/images/montagem/pizza_um_sabor3.png' alt=''></div><div class='pizza-slices open-modal-btn'><img id='image2' heigth=300 width=300 src='assets/images/montagem/pizza_um_sabor3.png' alt=''></div>";
    }
    else {
        pizzaContainer.innerHTML = pizzaContainer.innerHTML + "<div class='pizza-slices open-modal-btn '><img id='image1' heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices open-modal-btn flipH'><img id='image2' heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices open-modal-btn flipH flipV'><img id='image3' heigth=150 width=150 src='assets/images/montagem/pizza_um_sabor4.png' alt=''></div><div class='pizza-slices open-modal-btn'><img id='image4' heigth=150 width=150 src='assets/images/montagem/pizza_imagem_4_invertida.png' alt=''></div>";
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
    btn.addEventListener('click', (event) => {
        modal.classList.add('show'); // Exibe o modal
        var evento = event;
        select.addEventListener('change', function () {
            // btn.style.backgroundColor = ;
            switch (select.value) {
                case 'Calabresa':
                    if (quantidade == 1 || isNaN(quantidade)) {
                        const img = evento.currentTarget.querySelector('img');
                        if (img) {
                            console.log("Imagem clicada:", img.src); // Exibir o src da imagem no console
                        }
                    }
                    else if (quantidade == 2) {

                    }
                    else {

                    }
                    break;
                case '4 Queijos':
                    if (quantidade == 1 || isNaN(quantidade)) {

                    }
                    else if (quantidade == 2) {

                    }
                    else {

                    }
                    break;
                case 'Moda da casa':
                    if (quantidade == 1 || isNaN(quantidade)) {

                    }
                    else if (quantidade == 2) {

                    }
                    else {

                    }
                    break;
                case 'Marguerita':
                    if (quantidade == 1 || isNaN(quantidade)) {

                    }
                    else if (quantidade == 2) {

                    }
                    else {

                    }
                    break;
                default:
                    break;
            }
        });
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

const submitButton = document.querySelector("#submitButton");;

submitButton.addEventListener("click", validarDados);

function validarDados(event) {
    event.preventDefault();

    if (tamanhoPizza.value &&
        quantidadeSabores.value &&
        bordaPizza.value &&
        saborBorda.value &&
        cep.value &&
        rua.value &&
        telefone.value &&
        bairro.value &&
        complemento.value &&
        usuario.value) {

        var dadosForm = {
            tamanhoPizza: tamanhoPizza.value,
            quantidadeSabores: quantidadeSabores.value,
            bordaPizza: bordaPizza.value,
            saborBorda: saborBorda.value,
            cep: cep.value,
            rua: rua.value,
            telefone: telefone.value,
            bairro: bairro.value,
            complemento: complemento.value,
            usuario: usuario.value,
        }

        localStorage.setItem("dados_formulario", JSON.stringify(dadosForm));

        mostrarPopUp();
        window.location.href = 'index.html';

    } else {
        window.alert("Ainda há campos vazios no formulário");
    }
}
