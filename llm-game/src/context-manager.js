const fs = require('fs');
const path = require('path');

const contextPath = path.join(__dirname, 'data', 'context.json');

function getContext() {
  if (!fs.existsSync(contextPath)) {
    return {
      base: "",
      history: []
    };
  }

  return JSON.parse(fs.readFileSync(contextPath));
}

function saveContext(data) {
  fs.writeFileSync(contextPath, JSON.stringify(data, null, 2));
}

function updateBaseContext(text) {
  const ctx = getContext();
  ctx.base = text;
  saveContext(ctx);
}

function addToHistory(role, content) {
  const ctx = getContext();
  ctx.history.push({ role, content });

  // limitar histórico (IMPORTANTÍSSIMO)
  if (ctx.history.length > 20) {
    ctx.history.shift();
  }

  saveContext(ctx);
}

module.exports = {
  getContext,
  updateBaseContext,
  addToHistory
};