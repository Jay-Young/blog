# Windows 程序包管理器


使用 `Linux` 各大发行版的用户相信对包管理器 <sup>[[1]](https://en.wikipedia.org/wiki/Package_manager)</sup> 并不陌生， `Debian` 有 `apt`, `CentOS` 有 `yum`, 而 `Windows` 平台上第三方的包管理器有 `scoop` 和 `chocolatey`，现在微软推出了自己的 `Windows` 程序包管理器及其命令行工具 `winget` <sup>[[2]](https://github.com/microsoft/winget-cli)</sup> , 目前处于公共预览版阶段。

说起来, `scoop` 默认很多都是连接的 `GitHub`, 不科学上网速度实在是太慢了，而 `chocolatey` 默认软件源的版本更新可能不太及时。目前看微软的这个工具有些也是 `GitHub`, 希望后续官方能够支持更多常用软件，速度能够上来，能够有靠谱的国内镜像源就更好。

<!--more-->

## 安装

{{< admonition note "" false >}}
目前需要 `Windows 10 1709 (16299)` 或更新版本
{{< /admonition >}}

安装方式有三种:

- 微软应用商店（推荐）

  winget 内置于应用安装程序 <sup>[[3]](https://www.microsoft.com/zh-cn/p/app-installer/9nblggh4nns1)</sup> , 需要使用 Windows 10 预览版 <sup>[[4]](https://insider.windows.com/)</sup> 或加入预览通道 <sup>[[5]](http://aka.ms/winget-InsiderProgram)</sup>

- `Github Release`

  从 `Release` <sup>[[6]](https://github.com/microsoft/winget-cli/releases)</sup> 下载最新安装程序，缺点就是不会自动更新。如果安装报错，需要安装 `Desktop Bridge VC++ v14 Redistributable Package` <sup>[[7]](https://www.microsoft.com/en-us/download/details.aspx?id=53175)</sup> 和 `Microsoft.VCLibs.140.00.UWPDesktop package`

- 从源码编译

  满足以下条件，使用 `Visual Studio 2019` 自行编译最新源码后安装:

  - `Windows 10 1709 (16299)` 或更新版本
  - 开发者选项中打开开发人员模式 <sup>[[8]](https://docs.microsoft.com/zh-cn/windows/uwp/get-started/enable-your-device-for-development#developer-mode)</sup>
  - `Visual Studio 2019` <sup>[[9]](https://visualstudio.microsoft.com/downloads/)</sup>
  - `.NET` 桌面开发基础、 `C++` 桌面开发基础、 `UWP` 平台开发基础
  - `Microsoft Visual Studio Installer Projects` 插件 <sup>[[10]](https://marketplace.visualstudio.com/items?itemName=VisualStudioClient.MicrosoftVisualStudio2017InstallerProjects)</sup>

在我的笔记本和台式机上通过应用商店安装，笔记本上的自动加入了环境变量，而台式机上的并没有，此前的 `Windows Terminal` 也是这种情况，表现形式都是无法通过命令直接使用或者 `Win + R` 无法快捷打开。解决方式就是手动将 `%USERPROFILE%\AppData\Local\Microsoft\WindowsApps` 加入环境变量。

## 用法

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/windows-package-manager-guide/Snipaste_2020-05-25_16-39-27.png" title="winget" >}}

常用命令 <sup>[[11]](https://docs.microsoft.com/zh-cn/windows/package-manager/winget/hash)</sup> :

- `winget install <package name>` : 安装应用程序
- `winget show <package name>` : 显示应用程序详细信息
- `winget search <keyword>` : 根据关键词搜索所有匹配的应用
- `winget source` : 管理应用源
  - `winget source add <name> <source url>` : 添加应用源
  - `winget source list <source name>` : 显示源信息
  - `winget source update <source name>` : 更新源内容
  - `winget source remove <source name>` : 删除源
  - `winget source reset <source name>` : 删除所有第三方，重置到默认源

目前似乎还不能通过 `winget` 来卸载已经安装的应用。

官方源列表: <https://github.com/microsoft/winget-pkgs>

关于如何提交应用: <https://github.com/microsoft/winget-pkgs#submitting-a-package>

基本上就是构建如下格式的 `YAML` 文件, 以 `manifests\<publisher>\<package>\<version>.yaml` 路径给官方源提交一个 `PR`

```yaml
Id: string # publisher.package format
Publisher: string # the name of the publisher
Name: string # the name of the application
Version: string # version numbering format
License: string # the open source license or copyright
InstallerType: string # enumeration of supported installer types (exe, msi, msix)
Installers:
  - Arch: string # enumeration of supported architectures
    URL: string # path to download installation file
    Sha256: string # SHA256 calculated from installer
# ManifestVersion: 0.1.0
```

官方也提供了两个工具 `YamlCreate.ps1` <sup>[[12]](https://github.com/microsoft/winget-pkgs/blob/master/Tools/YamlCreate.ps1)</sup> 和 `Windows Package Manager YAML Generator` <sup>[[13]](https://www.microsoft.com/zh-cn/p/windows-package-manager-yaml-generator/9p3n60fs22k5)</sup> 来生成模板文件。

最后通过 `winget validate <manifest>` 和 `winget install -m <manifest>` 来测试是否有效，通过测试后就可以提交了。

## 引用来源

- <https://docs.microsoft.com/zh-cn/windows/package-manager/>
- <https://github.com/microsoft/winget-cli/>

