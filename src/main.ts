// import app and BrowserWindow
const { app, BrowserWindow } = require("electron");

// It represents our initial create window method.
function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      //preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Remove menu bar
  // win.setMenu(null);

  // Load the index HTML file
  win.loadFile("dist/index.html");
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
