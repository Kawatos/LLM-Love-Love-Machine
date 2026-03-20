const { app, BrowserWindow } = require('electron');
const path = require('path'); // ✅ FALTAVA ISSO

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js'),
      contextIsolation: true
    }
  });

  win.loadFile(path.join(__dirname, 'src/index.html'));
}

app.whenReady().then(createWindow);