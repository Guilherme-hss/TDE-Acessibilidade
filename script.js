// Script do site Acessibilidade no Dia a Dia

// ----- Alto contraste -----
function mudarContraste() {
  document.body.classList.toggle("contraste");

  // guarda a escolha para as outras páginas
  if (document.body.classList.contains("contraste")) {
    localStorage.setItem("contraste", "sim");
  } else {
    localStorage.setItem("contraste", "nao");
  }
}

// ----- Tamanho da fonte -----
var tamanhoFonte = 18;

function mudarFonte(valor) {
  tamanhoFonte = tamanhoFonte + valor * 2;

  if (tamanhoFonte < 14) {
    tamanhoFonte = 14;
  }
  if (tamanhoFonte > 30) {
    tamanhoFonte = 30;
  }

  document.body.style.fontSize = tamanhoFonte + "px";
  localStorage.setItem("fonte", tamanhoFonte);
}

// ----- Quando a página abre, aplica o que foi salvo -----
if (localStorage.getItem("contraste") == "sim") {
  document.body.classList.add("contraste");
}

if (localStorage.getItem("fonte")) {
  tamanhoFonte = Number(localStorage.getItem("fonte"));
  document.body.style.fontSize = tamanhoFonte + "px";
}

// ----- Validação do formulário de contato -----
function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var texto = document.getElementById("texto").value;
  var aviso = document.getElementById("mensagem-form");

  var erros = [];

  if (nome == "") {
    erros.push("Preencha o campo Nome.");
  }
  if (email == "" || email.indexOf("@") == -1) {
    erros.push("Preencha um E-mail válido.");
  }
  if (texto == "") {
    erros.push("Escreva uma Mensagem.");
  }

  if (erros.length > 0) {
    // mostra os erros em texto (o leitor de tela lê por causa do role="alert")
    aviso.className = "erro";
    aviso.innerHTML = erros.join("<br>");
    return false;
  }

  aviso.className = "sucesso";
  aviso.innerHTML = "Mensagem enviada com sucesso! Obrigado pelo contato.";
  document.getElementById("formulario").reset();
  return false; // site sem servidor: não envia de verdade
}
