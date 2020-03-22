# 浏览器小技巧：通过注册表为Chromium Edge安装扩展


新 [Microsoft Edge](https://www.microsoft.com/zh-cn/edge) 浏览器基于 Google 的开源项目 [Chromium](https://github.com/chromium/chromium) ，针对 Windows 10 进行优化。一个微软账号，跨平台同步，和 Chrome 扩展通用，官方扩展商店也越来越完善。

<!--more-->

{{< bilibili 83658715 >}}

## :(fa fa-comment-dots): 前言

如果你想绕过开发者模式直接部署本地 crx 文件，如果你是一个IT运维管理着几十台 PC 想要快速部署大量在线扩展，如果你也只是跟我一样闲得蛋疼，不妨接着往下看看如何在 Windows 上通过注册表来实现安装扩展。

{{< admonition info "说明" false >}}
本文基于 Windows 10 1909 专业版、Edge 80.0.361.57 正式版测试实现
{{< /admonition >}}

{{< admonition warning "警告" false >}}
修改注册表有风险，请提前做好注册表和浏览器数据备份。想要删除扩展需要删除相应的注册表键值，直接在浏览器中删除可能会发生奇奇怪怪的问题。
{{< /admonition >}}

## :(fa fa-edit): 手动修改注册表

### :(fa fa-desktop): 本地版

如果你拥有本地 crx 文件，苦于开发模式加载压缩包每次启动的提示，可以通过构造如下注册表值来实现。

1. 打开[https://robwu.nl/crxviewer](https://robwu.nl/crxviewer)这个网址，上传你的 crx 文件

{{< figure src="https://i.loli.net/2020/02/22/uvQZoR1SAzhPLXB.png" title="robwu网站" >}}

2. 在左边栏点击`manifest.json`，记录下`version`后面的版本号

{{< figure src="https://i.loli.net/2020/02/22/qUWBm7Xi5kQFCgK.png" title="manifest.json" >}}

3. 点击上方的`Show analysis`，记录下`Extension ID`后面那一串唯一ID

{{< figure src="https://i.loli.net/2020/02/22/qsklcopI4idROwt.png" title="Show analysis" >}}

4. 打开注册表，Edge 在`HKEY_CURRENT_USER\Software\Microsoft\Edge\Extensions`下面新建项，命名为第3步中记录的唯一ID

{{< figure src="https://i.loli.net/2020/02/22/fLK5OSnUv9pi3xr.png" title="regedit_edge" >}}

5. 在右边新建一个字符串`path`，将它的值修改为 crx 文件在你电脑上的绝对路径，比如`C:\Program Files (x86)\Internet Download Manager\IDMGCExt.crx`（IDM的扩展就是在安装软件的时候这样被自动安装上去的）

6. 继续新建一个字符串，命名为`version`，将它的值修改为第2步中的版本号，比如`6.36.5`

7. 等待扩展安装成功，然后手动启用下扩展。

### :(fa fa-server): 在线版

如果你想安装来自 [Edge 扩展商店](https://microsoftedge.microsoft.com/insider-addons) 或 [Chrome 扩展商店](https://chrome.google.com/webstore) 的扩展，也可以通过构造如下注册表值来实现。

1. 从官方商店直接搜索扩展，记录下网址。

2. 在`HKEY_CURRENT_USER\Software\Microsoft\Edge\Extensions`下新建项，命名为网址后缀类似`oogbnpmeihfgnccdnmmlgicknopghhma`这样的唯一ID

3. 右边新建两个字符串`path`和`update_url`，`path`的值是第1步的网址，而`update_url`的值，Edge 商店是`https://extensionwebstorebase.edgesv.net/v1/crx`，Chrome 商店是`http://clients2.google.com/service/update2/crx`

{{< figure src="https://i.loli.net/2020/02/22/AyzlIhwC3PrxQeK.png" title="regedit_online" >}}

4. 等待扩展安装成功，然后手动启用下扩展。在线版的扩展后续应该能够自动更新，这个要等待时间验证了。

## :(fa fa-file-code): 编写 reg 文件批量导入

```reg
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Microsoft\Edge\Extensions\llhcnbijpnechllogkacbcjmkcgjbjfi]
"path"="https://microsoftedge.microsoft.com/addons/detail/llhcnbijpnechllogkacbcjmkcgjbjfi"
"update_url"="https://extensionwebstorebase.edgesv.net/v1/crx"
[HKEY_CURRENT_USER\Software\Microsoft\Edge\Extensions\ngpampappnmepgilojfohadhhmbhlaek]
"path"="C:\Program Files (x86)\Internet Download Manager\IDMGCExt.crx"
"version"="6.36.5"
```

用任意文本编辑器保存为 reg 文件，然后导入注册表来实现扩展的批量部署安装。

## :(fa fa-feather-alt): 后记

折腾到此结束，再次强调删除扩展须删除相应的注册表键值，否则可能会发生意外。

部分内容引用自：[Google Chrome Dev](https://developer.chrome.com/apps/external_extensions#registry)

{{< admonition info "说明" false >}}
本文首发于[什么值得买平台](https://post.smzdm.com/p/a078kwg8/)
{{< /admonition >}}
