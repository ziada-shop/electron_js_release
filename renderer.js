const { ipcRenderer } = require('electron');

document.getElementById('updateButton').addEventListener('click', () => {
  ipcRenderer.send('check-for-update');  // Send a message to the main process to check for updates
});
