// Janela de desktop do Eclipse Survivors (Electron).
// O jogo inteiro vive em index.html; aqui só criamos a janela nativa.
const { app, BrowserWindow, Menu } = require("electron");

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    useContentSize: true,
    autoHideMenuBar: true,
    backgroundColor: "#080c18",
    title: "Eclipse Survivors",
  });
  win.loadFile("index.html");
});

app.on("window-all-closed", () => app.quit());
