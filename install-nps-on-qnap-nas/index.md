# 威联通：内网穿透解决方案之自建NPS服务


nps 是一款轻量级、高性能、功能强大的内网穿透代理服务器。目前支持 tcp、udp 流量转发，可支持任何 tcp、udp 上层协议（访问内网网站、本地支付接口调试、ssh 访问、远程桌面，内网 dns 解析等等……），此外还支持内网 http 代理、内网 socks5 代理、p2p 等，并带有功能强大的 web 管理端。

<!--more-->

## :(fa fa-comment-dots): 前言

内网穿透解决方案有不少，开源的比如 nps、frp、lanproxy、ngrok 和 zerotier 等，现成的商业服务有贝锐科技提供的花生壳、蒲公英之类的产品。个人现在同时部署的有三款产品，nps、ksa（看雪论坛的服务）和蒲公英 X1。今天要介绍的是这款 nps，自带 web 管理界面，支持 p2p 连接，支持数据压缩传输。

{{< admonition info "说明" false >}}
本文基于以下软硬件系统测试，不能完全保证其他系统的兼容性。

- QNAP TS-453Bmini 2+8G 内存
- QTS 4.4.1.1216
- nps 0.26.5
- Windows 10 1909 64 位 专业版和家庭版
  {{< /admonition >}}

### :(fa fa-info-circle): 背景

1. 做微信公众号开发、小程序开发等----> 域名代理模式
2. 想在外网通过 ssh 连接内网的机器，做云服务器到内网服务器端口的映射，----> tcp 代理模式
3. 在非内网环境下使用内网 dns，或者需要通过 udp 访问内网机器等----> udp 代理模式
4. 在外网使用 HTTP 代理访问内网站点----> http 代理模式
5. 搭建一个内网穿透 ss，在外网如同使用内网 vpn 一样访问内网资源或者设备----> socks5 代理模式

### :(fa fa-star-half-alt): 特点

- 协议支持全面，兼容几乎所有常用协议，例如 tcp、udp、http(s)、socks5、p2p、http 代理...
- 全平台兼容(linux、windows、macos、群辉等)，支持一键安装为系统服务
- 控制全面，同时支持服务端和客户端控制
- https 集成，支持将后端代理和 web 服务转成 https，同时支持多证书
- 操作简单，只需简单的配置即可在 web ui 上完成其余操作
- 展示信息全面，流量、系统信息、即时带宽、客户端版本等
- 扩展功能强大，该有的都有了（缓存、压缩、加密、流量限制、带宽限制、端口复用等等）
- 域名解析具备自定义 header、404 页面配置、host 修改、站点保护、URL 路由、泛解析等功能
- 服务端支持多用户和用户注册功能

## :(fa fa-terminal): 安装

nps 分为服务端和客户端。服务端安装需要一台公有云服务器，比如白嫖的腾讯云、阿里云的学生主机。客户端使用分为两部分：被访问端和访问端，比如内网的 TS 453Bmini 即被访问端，在外使用的笔记本或者单位的台式机即访问端。

项目地址：[https://github.com/ehang-io/nps](https://github.com/ehang-io/nps/)

[release](https://github.com/ehang-io/nps/releases/) 页面 TS 453Bmini 对应版本服务端和客户端。

{{< image src="https://i.loli.net/2020/03/24/hPjpzXRe7JOo6kc.png" title="客户端和服务端" >}}

### :(fa fa-server): 服务端

在云服务器上执行以下命令：

```bash
wget https://github.com/ehang-io/nps/releases/download/v0.26.5/linux_amd64_server.tar.gz
mkdir nps && tar -zxvf linux_amd64_server.tar.gz -C nps
cd nps && ./nps install
```

nps 已经成功安装到系统服务，可以使用 sudo nps start|stop|restart 来启动|停止|重启服务。

建议修改配置文件的 `web_password`、`web_username` 和 `auth_crypt_key`，即 web 界面管理密码、web 界面管理账号和 16 位 aes 加密密钥。

如果客户端需要使用 p2p 模式，可以将 `p2p_ip` 和 `p2p_port` 启用。

```bash
vi /etc/nps/conf/nps.conf
```

服务端配置文件说明：

| 名称                | 含义                                                                     |
| :------------------ | :----------------------------------------------------------------------- |
| web_port            | web 管理端口                                                             |
| web_password        | web 界面管理密码                                                         |
| web_username        | web 界面管理账号                                                         |
| web_base_url        | web 管理主路径,用于将 web 管理置于代理子路径后面                         |
| bridge_port         | 服务端客户端通信端口                                                     |
| https_proxy_port    | 域名代理 https 代理监听端口                                              |
| http_proxy_port     | 域名代理 http 代理监听端口                                               |
| auth_key            | web api 密钥                                                             |
| bridge_type         | 客户端与服务端连接方式 kcp 或 tcp                                        |
| public_vkey         | 客户端以配置文件模式启动时的密钥，设置为空表示关闭客户端配置文件连接模式 |
| ip_limit            | 是否限制 ip 访问，true 或 false 或忽略                                   |
| flow_store_interval | 服务端流量数据持久化间隔，单位分钟，忽略表示不持久化                     |
| log_level           | 日志输出级别                                                             |
| auth_crypt_key      | 获取服务端 authKey 时的 aes 加密密钥，16 位                              |
| p2p_ip              | 服务端 Ip，使用 p2p 模式必填                                             |
| p2p_port            | p2p 模式开启的 udp 端口                                                  |
| pprof_ip            | debug pprof 服务端 ip                                                    |
| pprof_port          | debug pprof 端口                                                         |

保存配置文件后重启 nps

```bash
nps restart
```

如果以后要升级，首先停止 nps，再升级。

```bash
nps stop
nps-update update
```

到此，服务端的安装和基本配置已经完成，接下去就是客户端的配置使用了。

{{< admonition note "" false >}}
阿里云等服务器可能需要额外在安全组配置中打开 nps 需要用到的端口，比如 TCP 8024/8080/8001/8003/8004，UDP 6000~6002。
{{< /admonition >}}

### :(fa fa-desktop): 客户端

#### :(fa fa-cloud): Web 配置

nps 支持配置文件和无配置文件使用，这里介绍无配置文件，所有配置在 web 端设置。

登录 web 界面（云服务器 ip:8080），默认用户名：admin，默认密码：123。如果之前安装服务端时有修改`web_password`和`web_username`，请自行修改。

{{< image src="https://i.loli.net/2020/03/27/YPyvrejJt8ZMqzf.png" title="web 管理界面" >}}

添加一个客户端，根据需求进行配置，无论访问端使用何种模式，这一步都是必须的设置。

{{< image src="https://i.loli.net/2020/03/27/ZLjniV9QubNKx7a.png" title="新增客户端" >}}

如果不需要客户端配置文件连接，可以按照如下设置：

{{< image src="https://i.loli.net/2020/03/27/h9zIYqfBiuOtkpd.png" title="客户端配置" >}}

<span id="client-command"></span>
新增保存后，点击客户端记录前面的 `+` 号，主要关注`客户端命令`这一行，稍后会用到。顺带可以看下配置是否正确，如果需要修改可以点击`选项`下面的`编辑`按钮。

{{< image src="https://i.loli.net/2020/03/27/2GPmYnecQEKM56L.png" title="客户端命令" >}}

接下来创建一个 p2p 连接，在刚创建的客户端`查看`下面点击`隧道`，新增一个 p2p 隧道。

{{< image src="https://i.loli.net/2020/03/27/EbyMK9vZIoBfXH8.png" title="p2p 隧道设置">}}

模式选择 p2p，目标填写被访问内网机器的 `IP:端口`（比如 192.168.50.100:8080），唯一标识密钥随便填。

{{< admonition note "" false >}}
如果新建多个 p2p 或私密代理隧道，唯一标识密钥不能重复。
{{< /admonition >}}

新增保存后，点击隧道记录前面的 `+` 号，同样关注`访问端命令`这一行。

到此，web 端配置结束，如果需要更多隧道模式，参考[官方文档](https://ehang-io.github.io/nps/#/example)。

#### :(fa fa-power-off): 访问使用

内网 TS 453Bmini 上将 npc 客户端安装到系统服务，[查看客户端命令](#client-command)：

```
wget https://github.com/ehang-io/nps/releases/download/v0.26.6/linux_amd64_client.tar.gz
mkdir npc && cd npc
./npc install -server=云服务器IP:8024 -vkey=客户端的密钥 -type=tcp
npc start
```

到 web 客户端界面查看`连接`一栏中客户端是否在线。

接下来配置访问端，以 Windows 版本客户端为例。

解压下载下来的压缩包 `windows_amd64_client.tar.gz`，在目录下管理员运行 `powershell` 或 `cmd` 执行以下命令将 npc 安装到系统服务：

```
./npc.exe install
```

编写批处理文件控制访问连接，或者直接在 `cmd` 中直接运行：

```bat
npc -server=云服务器IP:8024 -vkey=客户端的密钥 -type=tcp -password=隧道密钥 -target=内网机器IP:端口
```

{{< admonition note "" false >}}
如果出现 `connect to the target failed, maybe the nat type is not support p2p`错误说明客户端和访问端的 NAT 类型不支持 p2p 隧道连接。

如果出现 `new conn, P2P can not penetrate successfully, traffic will be transferred through the server`，说明 p2p 隧道没有成功建立，数据通过云服务器转发。
{{< /admonition >}}

如果能成功打通 p2p 隧道，就可以通过 `127.0.0.1:2000` 以 p2p 高速访问内网服务了。

{{< admonition tip "" false >}}
NAT 类型检测

```bash
npc nat -stun_addr=stun.stunprotocol.org:3478
```

如果 p2p 双方都是 Symmetric Nat，肯定不能成功，其他组合都有较大成功率。stun_addr 可以指定 stun 服务器地址。
{{< /admonition >}}

## :(fa fa-feather-alt): 后记

这款内网穿透工具的功能还是很丰富的，其他隧道模式可以参考[官方文档](https://ehang-io.github.io/nps/)研究下。

{{< admonition info "说明" false >}}
本文首发于[我的博客](https://blog.233so.com/install-nps-on-qnap-nas/)
{{< /admonition >}}

