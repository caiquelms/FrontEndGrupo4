let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let modal = document.querySelector(".modal-body");
let modalFooter = document.querySelector(".modal-footer");
let total = 0.0;

console.log(carrinho);

carrinho.forEach((item) => {
  total += item.preco;
  modal.innerHTML += `
        <div class="item-carrinho">
        <p>${item.titulo}</p>
        <p>${item.preco}</p>
        </div>
    `;
});

modalFooter.innerHTML = `
    <div class="item-carrinho">
        <p>Total:</p>
        <p>${total}</p>
    </div>
    <button onclick="finalizarCompra()">Finalizar Compra</button>
    <button onclick="limparCarrinho()">Limpar Carrinho</button>
`;

function limparCarrinho() {
    carrinho = [];
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    modal.innerHTML = ""; 
    modalFooter.innerHTML = "";
    total = 0.0;
  }

function finalizarCompra() {
    alert("Compra realizada! :)")
    limparCarrinho()
}
const rootElement = document.documentElement;

const lightTheme = {
    '--cor1': '#e7e7f0',
    '--cor2': '#d4d5e2',
    '--cor4': '#191a24',
};

const darkTheme = {
    '--cor1': '#191a24',
    '--cor2': '#35374d',
    '--cor4': '#d4d5e2',
};

let isDarkTheme = true;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        changeTheme(darkTheme);
        console.log("Tema escuro ativado.");
    } else {
        changeTheme(lightTheme);
        console.log("Tema claro ativado.");
    }
}

function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value);
}

// Inicialmente, definir o tema escuro
changeTheme(darkTheme);