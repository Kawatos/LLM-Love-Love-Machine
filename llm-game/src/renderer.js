function render() {
  const frame = getCurrentFrame();

  document.getElementById("text").innerText = frame.text;

  document.getElementById("background").style.backgroundImage =
    `url(${frame.background || ''})`;
}

