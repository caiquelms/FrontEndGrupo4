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
