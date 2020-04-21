# 威联通：“私人定制”在线代码编辑器


[code-server](https://github.com/cdr/code-server/) 是基于微软 [Visual Studio Code](https://github.com/Microsoft/vscode/) 项目打造的远程编辑器，可以运行在服务器，客户端通过浏览器访问即可使用。

<!--more-->

{{< admonition note "更新" false >}}
目前 code-server 已经发布 3.0 Pre-release，版本改动比较大，可以期待正式版。
{{< /admonition >}}

## :(fa fa-comment-dots): 前言

{{< admonition info "说明" false >}}
本文基于以下软硬件系统测试，不能完全保证其他系统的兼容性。
- QNAP TS-453Bmini 2+8G 内存
- QTS 4.4.1.1216
- code-server 1.41.1 with chinese-language-pack 1.41.0
{{< /admonition >}}

基于 docker 的 code-server 安装教程有很多，比如这一篇[群晖的安装](https://post.smzdm.com/p/aekz3q4q/)。打包好的镜像也有很多，官方的 [codercom/code-server](https://hub.docker.com/r/codercom/code-server/)，第三方的比如 [linuxserver/code-server](https://hub.docker.com/r/linuxserver/code-server/) 和 [xiumu/code-server-zh-cn](https://hub.docker.com/r/xiumu/code-server-zh-cn/)。另外你也可以自己打包，容器的好处确实很多，即开即用，但是我的原则就是~~能上实机就上实机，能瞎折腾就瞎折腾~~。

废话不多说，直接开始！

## :(fa fa-terminal): 安装

{{< admonition warning "警告" false >}}
任何基于实机的操作都有可能造成 QTS 系统无法挽回的错误，除非你很明确知道这条命令要做什么。
{{< /admonition >}}

### :(fa fa-download): 下载并安装中文语言包

从 [code-server](https://github.com/cdr/code-server/releases/) 项目的 Release 页面根据你的机型选择 linux-arm64 或者 linux-x86_64 下载下来，解压到 NAS 上，注意 code-server 这个文件就是我们所需的已经编译好的程序文件。

SSH 连接到 NAS 系统，切换到 code-server 所在目录。[如何开启 SSH](https://jingyan.baidu.com/article/4d58d541fe487eddd4e9c0f6.html/)

首先我们先安装中文语言包插件，从 [vscode官方市场](https://marketplace.visualstudio.com/) 下载适配的中文语言包。目前 code-server 最新的版本是 1.41.1，我测试了 1.41.0 版本的中文语言包能够正常使用，通过浏览器抓包（F12）得到下载地址，替换相应的版本号即可构造需要版本的地址。

```
https://marketplace.visualstudio.com/_apis/public/gallery/publishers/MS-CEINTL/vsextensions/vscode-language-pack-zh-hans/<version>/vspackage
```

{{< figure src="https://i.loli.net/2020/02/27/wkrBYj5EfAZ6DoU.png" title="Chinese-Language-Pack" >}}

插件安装命令

```bash
./code-server --install-extension <your-language-pack-path>
```

插件卸载命令

```bash
./code-server --uninstall-extension <extension-id>
# extesion-id在/<your-user-path>/.local/share/code-server/extensions目录下面查看
```

{{< admonition note "注意" false >}}
更多 code-server 命令请使用帮助命令查看 `code-server -h`
{{< /admonition >}}

### :(fa fa-file-code): 脚本启动 codes-erver

由于 SSH 直接启动 code-server，断开 SSH 以后会关闭，而且也需要避免重启和系统升级带来的问题，所以需要写个 shell 脚本加入计划任务和开机启动。

启用默认级别日志，不启用 ssl 证书，不启用密码认证，默认使用 8080 端口，如果与其他服务有冲突请使用`--port <port-number>`自行修改。有需要可以使用`--cert <your-cert-path>`和`--cert-key <your-cert-key-path>`选项启用 ssl 证书（腾讯云有免费一年的 TrustAsia 证书），使用`--auth password`选项，同时设置系统环境变量`export PASSWORD="your-own-password"`来设置密码认证。

```bash
#!/bin/sh
# 本脚本用于管理code-server的启动、停止、重启
# 请提前安装好code-server版本对应的中文语言包，vscode官方插件市场（https://marketplace.visualstudio.com/）：
# code-server --install-extension <your-language-pack-path> 安装插件
# code-server -v 查看版本
# code-server -log <level> 设置日志输出级别，默认info，一共有'critical', 'error','warn', 'info', 'debug', 'trace', 'off'7个级别
# 日志存储位置：<your-user-path>/.local/code-server/logs，建议定时清理
# 更多code-server命令请使用帮助 code-server -h
#
case "$1" in
  start)
    sudo /<your-code-server-path>/code-server --locale zh-cn --auth none &>/dev/null
    ;;

  stop)
    sudo killall -9 code-server &>/dev/null
    ;;

  restart)
    $0 stop
    $0 start
    ;;

  *)
    echo "Usage: $0 {start|stop|restart}"
    exit 1
esac

exit 0
```

本来想通过修改 daemon_mgr.conf 守护进程配置文件加入后台，发现重启 NAS 后会丢失用户修改的内容，还是只能通过计划任务和开机启动脚本来实现稳定运行。

QTS 的计划任务配置文件在 /etc/config/crontab，可以按照自己的需求设置定时重启任务

```bash
0 0 * * * /<your-shell-script-path>/<you-shell-script> restart &>/dev/null
```

crontab 命令编写可以参考[此处](https://www.runoob.com/linux/linux-comm-crontab.html/)

QTS 自带也有 autorun.sh 开机脚本管理，虽然重启 NAS 不会丢失，但是 QTS 系统升级后会丢失，所以推荐安装[第三方商店](https://www.qnapclub.eu/en/qpkg/232/)里的 BashIT 来管理。想要做到完美可以用 QDK 打包成 qpkg 安装。

```bash
daemon_mgr code-server start "/<your-shell-script-path>/<you-shell-script> start" &>/dev/null
```

重启 NAS 后，管理脚本会自动运行 code-server，浏览器打开`http://<your-nas-ip>:8080/`即可使用。

{{< figure src="https://i.loli.net/2020/02/28/G3PyStwl6h7TVdq.png" title="code-server-online-in-browser" >}}

## :(fa fa-feather-alt): 后记

如果你的 Windows 上安装了 vscode，那么可以把 %userprofile%/.vscode/ 下面的 extensions 目录直接复制到`/<your-user-path>/.local/share/code-server/`下面覆盖相应的插件目录，如果插件能够兼容，启动 code-server 后就能直接使用了。（不推荐使用，避免隐形的不兼容问题）

{{< admonition info "查看 log 来定位问题" false >}}
/\<your-user-path\>/.local/share/code-server/logs
{{< /admonition >}}

{{< admonition info "搜索 issues 来解决问题" false >}}
https://github.com/cdr/code-server/issues
{{< /admonition >}}

本文只是介绍编辑器的安装，不是集成开发环境的 IDE 的部署，所以能不能兼容大多数开发环境就不清楚了。

威联通在B站有个比较惨的官方号，没事可以关注，也许能获得有用的信息，[传送门](https://space.bilibili.com/351726918/)。

