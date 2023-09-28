//Inicializa a variável mensagens com os dados do localStorage
let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

function salvaDados() {
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const mensagem = document.querySelector("#mensagem");

  //Verifica se os campos estão vazios
  if (email.value === "" || mensagem.value === "" || nome.value === "") {
    alert("Preencha todos os campos!");
    return;
  } else {
    const formulario = {
      nome: nome.value,
      email: email.value,
      mensagem: mensagem.value,
    };

    mensagens.push(formulario);

    // Armazena o array atualizado no localStorage
    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    // Limpa os campos do formulário
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }
}

console.log(mensagens);
