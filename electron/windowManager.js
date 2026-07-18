const { loadWindowState, saveWindowState } = require("./windowState");
const { BrowserWindow, shell } = require("electron");
const path = require("path");
const config = require("./config");

function createMainWindow() {

    // Cargar tamaño y posición guardados
    const state = loadWindowState();

    const win = new BrowserWindow({

        width: state.width,
        height: state.height,
        x: state.x,
        y: state.y,

        icon: path.join(__dirname, "assets", "icon.ico"),

        minWidth: config.MIN_WIDTH,
        minHeight: config.MIN_HEIGHT,

        autoHideMenuBar: true,

        backgroundColor: config.BACKGROUND,

        title: config.APP_NAME,

        show: false,

        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }

    });

    win.loadURL(config.URL);

    win.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: "deny" };
    });

    win.on("close", () => {
        saveWindowState(win);
    });

    return win;
}

module.exports = {
    createMainWindow
};