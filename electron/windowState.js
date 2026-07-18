const fs = require("fs");
const path = require("path");
const { app } = require("electron");

const stateFile = path.join(app.getPath("userData"), "window-state.json");

function loadWindowState() {
  try {
    return JSON.parse(fs.readFileSync(stateFile, "utf8"));
  } catch {
    return {
      width: 1440,
      height: 900
    };
  }
}

function saveWindowState(win) {
  const bounds = win.getBounds();
  fs.writeFileSync(stateFile, JSON.stringify(bounds, null, 2));
}

module.exports = {
  loadWindowState,
  saveWindowState
};