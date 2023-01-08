const { app, BrowserWindow } = require('electron')

function createWindow() {
  const electron = require('electron')
  /*获取electron窗体的菜单栏*/
  const Menu = electron.Menu
  /*隐藏electron创听的菜单栏*/
  Menu.setApplicationMenu(null)
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
app.commandLine.appendSwitch('disable-site-isolation-trials');