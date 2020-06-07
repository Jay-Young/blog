# 解决华硕路由器 CPU 核心占用 100% 问题的崎岖之路


今天手机正愉快地刷着 B 站，突然发现视频卡顿，于是到电脑上打开网页测试发现 DNS 解析有问题了，解析时好时坏，就像乌龟一样。

跑到路由器里一看 CPU 其中一个核心居然吃满了，看了日志发现大量相同的记录：

```log
dnsmasq[253]: Maximum number of concurrent DNS queries reached (max: 150)
```

查看路由器流量分析，QNAP NAS 的 DNS 请求流量居然有好几个 GB，SSH 连上路由器，`top` 命令查看 `ksoftirqd/0` 和 `kworker` 占用极高，也难怪一个核心吃满，队列阻塞得一塌糊涂了。

为了验证是 NAS 的问题，把网线拔了，果然路由器的核心占用马上就降下来了。

问题是确定 NAS 引起的了，于是开始全网搜索解决方案，虽然找到了一些同样症状的帖子，但是基本也没什么用。

尝试了停用 NAS 所有应用、将 NAS 从 DHCP 改为固定、重启 NAS、重置路由器、指定内网 DNS 等各种骚操作依旧不行。

然后在各种外网论坛里翻阅，终于决定从 NAS 的 dnsmasq 服务入手。

找到 `/etc/dnsmasq.conf` `/etc/resolv.conf` `/etc/resolv.dnsmasq` 三个配置文件，看到 `127.0.1.1` 就觉得很奇怪，虽然查了资料说是正常的配置，但还是顺手把它改成其他的 DNS `223.5.5.5`，然后奇迹就出现了，路由器 CPU 核心的占用马上降下来了。

附上最终折腾的解决方案：

```conf
# /etc/dnsmasq.conf 找到下面内容所在行注释掉
#listen-address

# /etc/resolv.conf 把 127.0.1.1 改成 223.5.5.5
nameserver 223.5.5.5

# /etc/resolv.dnsmasq 把 127.0.1.1 改成 223.5.5.5
nameserver 223.5.5.5
```

