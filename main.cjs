const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Gastiador 💸',
    icon: path.join(__dirname, 'build', 'icons', process.platform === 'darwin' ? 'icon.icns' : 'icon.ico'),
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile('dist/index.html');
}

app.whenReady().then(() => {
  createWindow();
});
