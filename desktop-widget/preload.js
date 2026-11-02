const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('memoriumDesktop', {
  openWidget: (tankIndex) => ipcRenderer.invoke('memorium:open-widget', tankIndex),
  closeWidget: () => ipcRenderer.invoke('memorium:close-widget')
});
