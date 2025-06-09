// import app and BrowserWindow
const { shell, app, BrowserWindow } = require("electron");

// It represents our initial create window method.
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the index HTML file
  win.loadFile("index.html");
}

// Open  the first window, if the app is ready.
app.whenReady().then(() => {
  createWindow();

  // It can be happen, when the application is running the first time or
  // at a restart of the application.
  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Close the application if all windows are closed!
app.on("window-all-closed", () => {
  // On MacOS it is necessary to keep the app open.
  if (process.platform !== "darwin") {
    app.quit();
  }
});
