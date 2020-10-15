# 微软 Edge 内置冲浪小游戏的三个小秘技


正如谷歌浏览器内置的恐龙彩蛋游戏，微软的新版 Edge 浏览器也同样内置了一款小游戏——让我们网上冲浪吧。这个名字很有年代感，与“你是 GG 还是 MM”同属于上古时代的网络用语了。

<!--more-->

这个游戏的玩法就是玩家操作冲浪者挑战尽可能远的距离，同时要避开障碍和海怪，稍有不慎就会触礁或者被大章鱼抓住而失去一条命。

在 Github 上有人制作了提取版本 [^1]，这样就可以脱离 Edge 浏览器在其他浏览器上也能玩了。

以上面的项目为基础，我增加了一些主要语言的支持 [^2]，会根据浏览器的语言自动加载对应的语言。通过对中文语言 [strings.js](https://raw.githubusercontent.com/Jay-Young/SURF/master/strings.js) 的查看，发现这个游戏内置了 3 个 cheat code，分别是著名的科乐美“上上下下左右左右 BA”以及微软自创的“MICROSOFT”和“EDGE”。

```javascript
loadTimeData.data = {
......
 classicTitle: "让我们网上冲浪吧",
 classicUnit: "米",
 close: "关闭",
 codeEdge: "无限升级代码已激活! $1",
 codeKonami: "忍者猫代码已激活! $1",
 codeMicrosoft: "无限生命代码已激活! $1",
 codeScoring: "将不会保存你在这一局的分数。",
......
};
```

```javascript
// 下面的数字就是 keyCode
codes: [
 [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], // 上上下下左右左右BA，变身忍者猫
 [77, 73, 67, 82, 79, 83, 79, 70, 84], // MICROSOFT，开启无限生命
 [69, 68, 71, 69], // EDGE，开启无限升级
];
```

{{< video id="a" url="/videos/微软冲浪游戏秘技.mp4" sub="/videos/微软冲浪游戏秘技.vtt" color="#e2893c" >}}

[^1]: [https://github.com/jackbuehner/MicrosoftEdge-S.U.R.F.](https://github.com/jackbuehner/MicrosoftEdge-S.U.R.F.)
[^2]: [https://github.com/Jay-Young/SURF](https://github.com/Jay-Young/SURF)

