// main.js  引入模块
// app模块:控制应用的生命周期
// BrowserWindow模块: 创建浏览器窗口
const { app ,BrowserWindow} = require('electron');
//  path模块: node 的内置模块，用于拼接路径
const path = require('path');
// 1.初始化应用之后，会触发监听ready 事件
app.on('ready',function(){ny_createWindow(); createMenu();})
function createMenu(){
  const {app, Menu} = require('electron');
  const template = [
    {
      role: 'Reload'
    }
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'services', submenu: []},
        {type: 'separator'},
        {role: 'hide'},
        {role: 'hideothers'},
        {role: 'unhide'},
        {type: 'separator'},
        {role: 'quit'}
      ]
    });

    // Edit menu
    template[1].submenu.push(
        {type: 'separator'},
        {
          label: 'Speech',
          submenu: [
            {role: 'startspeaking'},
            {role: 'stopspeaking'}
          ]
        }
    );

    // Window menu
    template[3].submenu = [
      {role: 'close'},
      {role: 'minimize'},
      {role: 'zoom'},
      {type: 'separator'},
      {role: 'front'}
    ];
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.commandLine.appendSwitch('disable-site-isolation-trials')
let win;
// 创建窗口
function ny_createWindow(){
  // 1.1创建窗口
  win = new BrowserWindow({
    width:640,
    height:480,
    resizable:true, // 是否可改变宽高，默认true
    movable:true,   // 是否可拖拽，默认true
    webPreferences: {
      nodeIntegration: true, // 是否集成 Nodejs
      enableRemoteModule: true, // 是否允许渲染进程 调用主进程模块
    }
    // 1.为了在渲染进程中使用require()，还需要启用 nodeIntegration 。
    // 2.从v9版本开始，remote除非将 enableRemoteModule 设置为true，否则不允许在渲染进程中使用。
  });
  // 1.2 加载内容
  // win.loadURL('http://www.baidu.com')   // 远程
  // __dirname: 当前js文件所在的文件夹路径,绝对路径
  win.loadURL(path.join(__dirname, './index.html')) // 本地 相对路径
  // mac 系统：需要拼接 file 协议
  // path.join('file://',__dirname,'./index.html')
  // 1.3 调试工具
  win.webContents.openDevTools(); // webContents: 控制和渲染页面的
  // 1.4 关闭窗口， 关闭窗口前想做的事
  win.on('close',function(){
    win = null;  // 关闭窗口
    app.quit();  // 关闭应用
  })
  }