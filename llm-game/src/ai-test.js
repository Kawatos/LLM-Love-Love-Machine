let contexto = "";
let historico = [];

function salvarContexto() {
  contexto = document.getElementById("contextInput").value;
  document.getElementById("status").innerText = "Contexto salvo!";
}

async function enviar() {
  const input = document.getElementById("userInput").value;

  historico.push(`Jogador: ${input}`);

  const prompt = montarPrompt(input);

  const resposta = await window.api.runLLM(prompt);

  historico.push(`IA: ${resposta}`);

  atualizarChat();
}

function montarPrompt(input) {
  return `
${contexto}

${historico.join("\n")}

IA:
`;
}

function atualizarChat() {
  document.getElementById("chatLog").value = historico.join("\n\n");
}