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
    window.alert("Finge que isso aqui deu certo");
}
