const { app, BrowserWindow } = require("electron");
const path = require("path");
const { createMainWindow } = require("./windowManager");

let splash;
let mainWindow;

function createSplash() {
  splash = new BrowserWindow({
    width: 500,
    height: 300,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    center: true,
    backgroundColor: "#0F172A",
    show: true,
  });

  splash.loadFile(path.join(__dirname, "splash.html"));
}

app.whenReady().then(() => {
  createSplash();

  mainWindow = createMainWindow();

  // La página cargó correctamente
  mainWindow.webContents.on("did-finish-load", () => {
    console.log("✅ Página cargada correctamente");

    if (splash && !splash.isDestroyed()) {
      splash.close();
    }

    mainWindow.show();
  });

  // Hubo un error al cargar
  mainWindow.webContents.on(
    "did-fail-load",
    (event, errorCode, errorDescription, validatedURL) => {
      console.error("❌ Error al cargar la página");
      console.error("Código:", errorCode);
      console.error("Descripción:", errorDescription);
      console.error("URL:", validatedURL);
    }
  );

  // Se cerró inesperadamente el proceso de renderizado
  mainWindow.webContents.on("render-process-gone", (event, details) => {
    console.error("❌ Renderer detenido:", details);
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});