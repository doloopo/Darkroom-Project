# Darkroom-Project
一种加密聊天室的思路。名字起得比较玄乎，但貌似并不怎么 dark。
An idea of encrypted chat rooms. It's not so dark as it's called.

## 原理 Principle
你知道共享协作文档吗？它们一般支持网页版。你还能发现，如果你用 javascript 修改文档内容，更改是会成功同步上去的。利用这个原理可以轻松地做出聊天室。
Do you know shared documents (like Office Online or Google Docs)? We can edit the document online together. You can also find that if you edit it with javascript, the changes will be synchronized. We can make an chat room easily by this.

但是，如果你将其投之于实践，会发现仅凭 js 是实不现的，因为浏览器会阻止你跨域。
However, if you just do like that with only js, you will finally fail. The browser will prevent you from crossing origin.

