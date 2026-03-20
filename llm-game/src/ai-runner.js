const { exec } = require('child_process');
const path = require('path');
const { getContext } = require('./context-manager');

function buildPrompt(userInput) {
  const ctx = getContext();

  const historyText = ctx.history
    .map(h => `${h.role}: ${h.content}`)
    .join('\n');

  return `
${ctx.base}

${historyText}

Jogador: ${userInput}
Personagem:
`;
}

function runLLM(userInput) {
  return new Promise((resolve, reject) => {

    const prompt = buildPrompt(userInput);

    const llamaPath = path.join(__dirname, 'llama', 'llama-cli.exe');
    const modelPath = path.join(__dirname, 'models', 'model.gguf');

    const command = `"${llamaPath}" -m "${modelPath}" -p "${prompt.replace(/"/g, '\\"')}" -n 200 --temp 0.8`;

    exec(command, { maxBuffer: 1024 * 1024 }, (err, stdout) => {
      if (err) return reject(err);

      resolve(stdout.trim());
    });

  });
}

module.exports = { runLLM };