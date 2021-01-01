# Darkroom-Project 暗室计划
这是一种实现加密聊天室的思路。依赖于 Electron。

## 更新日志
12-20 探索失败，因为浏览器上无法跨域，完全无法。

12-31 用 Electron 实现了跨域。关键在于，`app.commandLine.appendSwitch('disable-site-isolation-trials')`。
