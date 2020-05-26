# Windows Terminal 安装和配置手记


`Windows Terminal`（Windows 终端）<sup>[[1]](https://docs.microsoft.com/zh-cn/windows/terminal/)</sup> 是一个面向命令行工具和 shell（如命令提示符、`PowerShell` 和适用于 `Linux` 的 `Windows` 子系统 (`WSL`)）用户的新式终端应用程序。 它的主要功能包括多个选项卡、窗格、`Unicode` 和 `UTF-8` 字符支持、`GPU` 加速文本呈现引擎，还可以用于创建你自己的主题并自定义文本、颜色、背景和快捷键绑定。如今它迎来了 1.0 正式版，记录下安装和配置过程，以后也可以少翻阅点文档。

<!--more-->

项目地址: [https://github.com/Microsoft/Terminal](https://github.com/Microsoft/Terminal)

商店地址: [https://aka.ms/terminal](https://aka.ms/terminal)

{{< admonition note "" false >}}
Windows Terminal 要求 Windows 10 1903 (build 18362) 或者更高版本
{{< /admonition >}}

## 安装

安装方式有多种，推荐使用微软应用商店 (Microsoft Store) 安装，后续可以接收自动更新。

其他方式:

- [Github Release](https://github.com/microsoft/terminal/releases)，需要预先安装 [Desktop Bridge VC++ v14 Redistributable Package](https://www.microsoft.com/en-us/download/details.aspx?id=53175)，此方式安装不会接收自动更新
- 安装 [Chocolatey](https://chocolatey.org/) (非官方) 包管理器的用户可以通过 `choco install microsoft-windows-terminal` 和 `choco upgrade microsoft-windows-terminal` 来安装和更新

## 配置

`Windows Terminal` 设置以 `settings.json` 配置文件的形式来控制，通过设置选项或者快捷键 `CTRL + ,` 打开。

### 安装 Powerline 字体

使用 `Powerline` 配置样式前先安装 `Powerline` 字体，官方推荐 [Cascadia](https://github.com/microsoft/cascadia-code/releases) ，其中 `Cascadia Code PL` 或 `Cascadia Mono PL`，这两者包含 `Powerline` 字形。更多 `Powerline` 字体下载项目 [Powerline Fonts](https://github.com/powerline/fonts) ，运行 `install.ps1` 脚本安装。

修改 `settings.json` 应用字体，`profiles` 下 `defaults` 增加一行 `"fontFace": "Cascadia Mono PL"` (全局配置) 或者在 `list` 对应 `Shell` 配置里修改对不同 `Shell` 应用不同字体。

### 在 PowerShell 中设置 Powerline

先决条件:

- 安装适用于 `Windows` 的 [Git](https://git-scm.com/downloads)
- `Get-ExecutionPolicy` 查看是否设置为 `RemoteSigned` 或 `Unrestricted`, 管理员运行 `PowerShell`, 输入 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Confirm`

使用 `PowerShell`，安装 `Posh-Git` <sup>[[2]](https://github.com/dahlbyk/posh-git)</sup> 和 `Oh-My-Posh` <sup>[[3]](https://github.com/JanDeDobbeleer/oh-my-posh)</sup>：

```powershell
Install-Module posh-git -Scope CurrentUser
Install-Module oh-my-posh -Scope CurrentUser
```

### 自定义 PowerShell 提示符

使用 `notepad $PROFILE` 或所选的文本编辑器打开 `PowerShell` 配置文件。

在 `PowerShell` 配置文件中，将以下内容添加到文件的末尾：

```powershell
Import-Module posh-git
Import-Module oh-my-posh
Set-Theme Agnoster
```

现在，每个新实例启动时都会导入 `Posh-Git` 和 `Oh-My-Posh`，然后从 `Oh-My-Posh` 设置 `Agnoster` 主题。 `Oh-My-Posh` 附带了若干[内置主题](https://github.com/JanDeDobbeleer/oh-my-posh#themes)。

在本机上隐藏 `username@host` 的前缀格式，在 `$PROFILE` 配置文件中首行加入:

```powershell
$DefaultUser = 'yourUsernameHere'
```

预览效果:

{{< video id="a" url="https://player.cdn.downk.cc/playlist/5ec5f00fc2a9a83be5315ce9.m3u8" >}}

### 修改配色主题

要修改配色主题，只需要在全局配置或者对应 `Shell` 配置中加入 `colorScheme` 属性，并将配色方案的 `name` 作为值。

```json
"colorScheme": "COLOR SCHEME NAME"
```

`Windows Terminal` 自带了几款主题:

**Campbell**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/campbell-color-scheme.png" title="Campbell" >}}

**Campbell Powershell**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/campbell-powershell-color-scheme.png" title="Campbell Powershell" >}}

**Vintage**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/vintage-color-scheme.png" title="Vintage" >}}

**One Half Dark**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/one-half-dark-color-scheme.png" title="One Half Dark" >}}

**One Half Light**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/one-half-light-color-scheme.png" title="One Half Light" >}}

**Solarized Dark**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/solarized-dark-color-scheme.png" title="Solarized Dark" >}}

**Solarized Light**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/solarized-light-color-scheme.png" title="Solarized Light" >}}

**Tango Dark**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/tango-dark-color-scheme.png" title="Tango Dark" >}}

**Tango Light**

{{< image src="/images/hugo/windows-terminal-installation-and-settings/tango-light-color-scheme.png" title="Tango Light" >}}

更多配色主题参考 `iTerm2-Color-Schemes` 项目：<https://github.com/mbadolato/iTerm2-Color-Schemes>

将该项目 `windowsterminal` 文件夹下面对应主题的 `json` 文件内容完整复制到 `settings.json` 文件的 `schemes` 数组内，然后配置 `colorScheme` 为配色名字即可。

### 修改背景图片

```json
// 图片位置，可以是 .jpg、.png 或 .gif 文件
"backgroundImage": "C:/Users/Jay/Pictures/Saved Pictures/xxx.jpg",
// 图像拉伸模式，默认值： "uniformToFill"，还可以是"none"、"fill"、"uniform"
"backgroundImageStretchMode": "uniformToFill",
// 图像对齐方式，默认值： "center"，还可以是"left"、"top"、"right"、
// "bottom"、"topLeft"、"topRight"、"bottomLeft"、"bottomRight"
"backgroundImageAlignment": "center",
// 图像不透明度，默认值： 1.0（完全透明），接受： 0-1 的浮点值的数字
"backgroundImageOpacity" : 0.3
```

{{< image src="/images/hugo/windows-terminal-installation-and-settings/QQ拼音截图20200522220158.png" title="background" >}}

### 毛玻璃效果

```json
// 可选值：false（正常背景），true（毛玻璃效果）
"useAcrylic": true,
// 不透明度，默认值： 0.5，接受： 0-1 的浮点值的数字，数字越大不透明度越高
"acrylicOpacity": 0.5
```

{{< image src="/images/hugo/windows-terminal-installation-and-settings/屏幕截图(5).png" title="acrylic" >}}

