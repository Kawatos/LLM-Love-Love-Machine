const state = {
  scene: null,
  index: 0,
  data: null
};

async function init() {
  const res = await fetch('story.json');
  state.data = await res.json();

  loadGame();

  render();
}

function getCurrentFrame() {
  return state.data.scenes[state.scene][state.index];
}

function next() {
  state.index++;

  const scene = state.data.scenes[state.scene];

  if (state.index >= scene.length) {
    if (scene.next) {
      state.scene = scene.next;
      state.index = 0;
    } else {
      alert("Fim da demo");
      return;
    }
  }

  saveGame();
  render();
}

init();