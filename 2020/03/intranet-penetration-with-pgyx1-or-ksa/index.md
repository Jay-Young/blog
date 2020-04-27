# 威联通：内网穿透服务之蒲公英 X1 和 KSA


[上一篇](https://blog.233so.com/2020/03/install-nps-on-qnap-nas/)博文介绍了 nps 内网穿透服务，虽然拥有 Web 配置界面，但对于新手来说可能还是略显不友好，毕竟也还需要拥有一台公网服务器。那么今天要介绍的两款产品或者说服务绝对算得上是开箱即用，老少皆宜。

<!--more-->

## 蒲公英 X1

蒲公英 X1 是贝锐科技公司旗下一款采用 Cloud VPN 技术的企业级智能组网路由器。没错，它是一台路由器。而贝锐科技旗下还拥有花生壳、向日葵等知名的产品。以前上大学的时候用过 2233.org 的二级域名 ddns 服务，印象中好像是这家公司的早期产品。

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/201808240935145249.jpg" title="蒲公英 X1 外观" >}}

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/201905061953093581.png" title="接口图示" >}}

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/201905061953189315.png" title="接口说明" >}}

{{< admonition info "蒲公英 X1 简要参数" false >}}

- 尺寸：70 毫米 X 70 毫米 X 18 毫米
- 处理器（CPU）：MT7628A
- 内存（RAM）： 64MB
- 闪存（FLASH）：16MB
- 接口：Micro USB 电源接口 × 1，100 Mbps 网口 × 1，USB-A × 1
- 无线网络标准：2.4GHz 300Mbps：IEEE 802.11 b/g/n
  {{< /admonition >}}

日常价格 ￥ 108，一般活动价格 ￥ 98，我是 ￥ 78 拿下的。看参数想要拿它做主路由我觉得还是算了吧，反正我看上的也只是它的旁路组网功能，即不改变现有的家庭网络结构直接通过组网实现专属内网穿透隧道。

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/LW7xN1Evem2ZGMh.png" title="指示灯说明" >}}

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/ah5qIjkzwOyPo6Q.png" title="旁路组网" >}}

1. 电源线插电，通过网线直接将 X1 LAN 口与主路由 LAN 口连接（DHCP 功能需开启），
2. 打开 [https://pgybox.oray.com/](https://pgybox.oray.com/)，通过 SN 码登录（可在路由器背面查看），默认密码是 admin
3. 进入蒲公英管理平台，路由器首次使用需进行初始化，输入对应信息点击提交
4. 注册 oray 账号，在智能组网栏将 X1 绑定到账号下面
5. 点击“我要组网”，跳转至蒲公英官网管理页面，点击“立即创建网络”
6. 填写网络名称，选择网络类型；然后添加网络成员（目前只有一台 X1），点击完成
7. 在已经创建好了的蒲公英 VPN 网络中，点击“旁路设置”
8. 进入旁路路由设置页面，点击“添加旁路路由”
9. 选择 X1 为旁路路由，目标地址填写主路由所在网段，比如 192.168.1.0/24，表示网段是 192.168.1.0,子网掩码为:255.255.255.0，若子网掩码的位数不是 24 位，请根据实际情况填写
10. PC 或手机端安装相应的蒲公英客户端，通过 oray 账号登录轻松组网，在外面通过 4G/5G 移动网络或者公司网络就可以直接访问内网的资源了。
11. 如果你运气还不错的话，两边的 NAT 类型还算给力的话，有可能打通 p2p 点对点隧道，无需通过蒲公英的公网服务器转发数据，实现高速访问。

{{< admonition note "" false >}}

- 为了提高 P2P 连通率，建议开启主路由的 UPNP 功能
- X1 提供终身免费的标准版转发服务，带宽是 2M，如果需要更高的转发带宽可以花钱购买，每个客户端需要额外费用
  {{< /admonition >}}

更多内容参考[官方文档](http://service.oray.com/question/4288.html)

## KSA

KAS 是安全社区[看雪论坛](https://ksa.kanxue.com/)开发的一款内网穿透软件，目前提供 Windows，MacOS 和 Linux (x86, x64, arm64,mipsel)的客户端。KSA 的服务端和客户端集成在一个可执行文件之中，真正做到了无需配置，点击就用。

### Windows

双击运行可执行文件 ksa_win.exe，左半部分 KSA 服务端已经默认生成好 KSA ID 和密码，记住这个 KSA ID 和密码即可。点击**启动服务**开始运行服务端：

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/01.png" title="Windows 客户端" >}}

### MacOS

与 Windows 类似，左侧是服务端，右侧是客户端，右侧的“远程接入到 KSA 服务端”中输入 KSA ID 和密码，点击“接入服务端”即可。接入成功后如下图所示：

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/02.png" title="MacOS 客户端" >}}

### Linux

解压之后，使用 sudo chmod +x ksa\*命令，给 ksa 软件添加可执行权限，然后启动即可。

```bash
chmod +x ksa*
./ksa_x64
```

服务端即会开启并运行，KSA ID 和 PSK 都会出现。也可以查看同目录下的 ksa.log 文件，启动日志已经写入到该文件中。

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/722081_R3BAW5WHHK2HU2W.png" title="Linux 服务端运行" >}}

Linux 客户端需要先配置 `ksa.conf` 文件。

首先请确保没有任何 ksa 进程在执行，有则先关闭。以 x64 版本为例，`killall -9 ksa_x64` 杀死进程。

将被访问设备服务端生成的 KSA ID 和 PSK 对应填到 [uid] 和 [psk] 后面并取消注释 # 号，使其生效。最终效果如下图：

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/722081_DXKCHPVK42VZBPY.png" title="Linux 配置文件" >}}

配置完成之后，运行 `./ksa_x64` 来启动即可。

连接成功之后服务端所在的局域网的 IP（我们假设为 192.168.1.\*），在客户端机器上都可以直接访问了，比如内网网络邻居也可以打开：

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/intranet-penetration-with-pgyx1-or-ksa/722081_XMY2BMBQZ2XEUVV.png" title="成功访问内网" >}}

{{< admonition note "" false >}}

- 此产品尚处于内测阶段，请勿在生产环境中部署，由此带来的一切后果，看雪不予承担。
- KSA ID 和密码仅作为客户端与服务端连接时互相校验的用途，看雪服务器并不保存 KSA ID 和密码。
- 初次使用时 Windows 平台会弹出安装驱动，请允许安装驱动。
- MacOS 平台可能会要求输入管理员密码。
- 远程接入分为 p2p 直连和 NAT 中转两种模式。
- KSA 会优先选择 p2p 直连的模式，在该模式下服务端与客户端直接连接，速度快，不限量。
- 在 p2p 尝试失败的情况下，KSA 会启用 NAT 中转模式，在该模式下服务端与客户端之间的连接会经过看雪服务器中转，所有流量使用 AES-256-CFB 模式全局加密，看雪服务器不会保存流量、也无法解密。
- 在 NAT 中转模式，由于看雪服务器资源有限，会进行一定的限速限量措施，内测阶段会根据流量进行动态调整，恕不另行告知。
  {{< /admonition >}}

## 后记

总的来说，这两款产品对于新手来说是非常友好的，算不上折腾。如果注重稳定有移动端需求，提供商业服务的蒲公英 X1 是比较适合的。如果需求 Linux 和 MacOS 的使用，那么 KSA 是比较合适的。这里本人是比较期待 KSA 后续能够开源中转服务器上的服务端。

部分内容引用：[https://ksa.kanxue.com/index-down.htm](https://ksa.kanxue.com/index-down.htm/)

