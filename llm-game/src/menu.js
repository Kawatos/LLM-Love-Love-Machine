function novoJogo() {
  localStorage.removeItem("save");
  window.location.href = "game.html";
}

function continuar() {
  const save = localStorage.getItem("save");
  if (save) {
    window.location.href = "game.html";
  } else {
    alert("Nenhum save encontrado");
  }
}
function abrirAITest() {
  window.location.href = "ai-test.html";
}

async function enviarMensagem() {
  const input = document.getElementById("input").value;

  await window.api.addToHistory("Jogador", input);

  const resposta = await window.api.runLLM(input);

  await window.api.addToHistory("Personagem", resposta);

  atualizarUI(input, resposta);
}

function abrirAITest() {
  window.location.href = "ai-test.html";
}