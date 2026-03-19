function saveGame() {
  localStorage.setItem("save", JSON.stringify({
    scene: state.scene,
    index: state.index
  }));
}

function loadGame() {
  const save = localStorage.getItem("save");

  if (save) {
    const data = JSON.parse(save);
    state.scene = data.scene;
    state.index = data.index;
  } else {
    state.scene = state.data.start;
    state.index = 0;
  }
}