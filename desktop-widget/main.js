const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');

let mainWindow;
let widgetWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 850,
    minWidth: 760,
    minHeight: 600,
    backgroundColor: '#eef3f1',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.on('closed', () => { mainWindow = null; });
}

function createWidget(index) {
  if (widgetWindow && !widgetWindow.isDestroyed()) widgetWindow.close();
  widgetWindow = new BrowserWindow({
    width: 480, height: 390, minWidth: 260, minHeight: 190,
    frame: false, transparent: true, backgroundColor: '#00000000',
    hasShadow: false, resizable: true, movable: true,
    alwaysOnTop: true, skipTaskbar: true, autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  widgetWindow.setAlwaysOnTop(true, 'screen-saver');
  widgetWindow.loadFile(path.join(__dirname, 'index.html'), { query: { widget: '1', tank: String(index) } });
  widgetWindow.on('closed', () => { widgetWindow = null; });
  widgetWindow.webContents.on('context-menu', () => {
    const menu = Menu.buildFromTemplate([
      { label: 'Selalu di atas', type: 'checkbox', checked: true, click: item => widgetWindow && widgetWindow.setAlwaysOnTop(item.checked, 'screen-saver') },
      { type: 'separator' },
      { label: 'Tutup aquarium', click: () => widgetWindow && widgetWindow.close() }
    ]);
    menu.popup({ window: widgetWindow });
  });
}

ipcMain.handle('memorium:open-widget', (_event, index) => {
  createWidget(Number.isInteger(index) && index >= 0 ? index : 0);
  return true;
});
ipcMain.handle('memorium:close-widget', () => {
  if (widgetWindow && !widgetWindow.isDestroyed()) widgetWindow.close();
  return true;
});

app.whenReady().then(() => {
  createMainWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createMainWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
