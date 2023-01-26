# Darkroom-Project

 It may be better named Parasite Project. The Project aims to build an IM without paying for a server, in a whatsoever way. It focuses on taking advantage of Electron, in which the cross-origin policy can be disabled, so that certain changes on other websites, such as Shared Documents or another IM platform, could be made. 

## Update Log

[2020-12-20] Attempt #1: Modify Shimo Shared Document webpage in browser to 'communitcate' in real time. Failed. 

[2020-12-31] Attempt #2: Do the same as in #1, but with Electron. Using the feature `app.commandLine.appendSwitch('disable-site-isolation-trials')`. 

[2023-01-09] Hack.chat is a great solution for modifying: It's free, well-structed, and 3rd party tools can be easily applied. 

## ~~TODO~~

~~[ ] Rewrite Translator. (The translateText() behaves strangely. It would return the origin text for the 1st, 3rd, 5th and etc time you use it, and the processed text for the 2nd, 4th and etc time. I don't know, but I'm totally shocked. )~~

~~[ ] Fix message (del) format. ~~

~~[ ] Rewrite Pinger. (It won't wake the bot up currently. )~~

~~[ ] Cross-platform Builds. ~~

## DEVELOPMENT SUSPENDED

The development is suspended until a better solution emerges. 