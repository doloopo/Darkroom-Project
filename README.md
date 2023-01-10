# Darkroom-Project 暗室计划

我觉得不如叫“寄生虫计划”？不自建服务器，用各种花式方法实现即时通讯（并加密！）的探索。包括：共享文档、Hack.chat 魔改等。目前的核心思路是利用 electron 可以通过修改配置来跨域操作其它网页的特点。

A project that had be better named Parasite Project that builds an IM, in various ways, without actually paying for a server. 

## Updates 更新日志

2020-12-20 探索失败，因为浏览器上无法跨域，完全无法。

2020-12-31 用 Electron 实现了跨域。关键在于，`app.commandLine.appendSwitch('disable-site-isolation-trials')`。

2023-01-09 Hack.chat is a best solution for modifying: It's free, well-structed and easy to add 3rd party tools. 

## TODO

[ ] Rewrite Translator. (The translateText() behaves strangely. It would return the origin text for the 1st, 3rd, 5th and etc time you use it, and the processed text for the 2nd, 4th and etc time. I don't know, but I'm totally shocked. )

[ ] Rewrite Pinger. (It won't wake the bot up currently. )

[ ] Cross-platform Builds. 