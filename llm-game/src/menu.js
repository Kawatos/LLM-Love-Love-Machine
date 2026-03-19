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