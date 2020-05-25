# 免费申请 Let's Encrypt 泛域名证书


`Let's Encrypt` 是一家免费、开放、自动化的证书颁发机构（CA），为公众的利益而运行。它是一项由 `Internet Security Research Group`（ISRG）提供的服务。<sup>[[1]](https://letsencrypt.org/zh-cn/)</sup>

<!--more-->

## 前言

今天收到腾讯云的邮件，提醒我部署在 `RT-AC87U` 上的证书快要到期了。这个证书是免费申请的亚洲诚信一年，受限于“同一主域最多只能申请 20 张亚洲诚信品牌免费型 DV 版 SSL 证书”的约束条件，再加上不能泛域名签发，考虑将路由器和 `NAS` 上的证书都切换到 `Let's Encrypt` 的泛域名证书了。

看了下文档 <sup>[[2]](https://letsencrypt.org/zh-cn/docs/client-options/)</sup>，发现自动申请并到期续签不是太难。`Let's Encrypt` 提供了多种方式，官方推荐的是 `Certbot` 客户端 <sup>[[3]](https://certbot.eff.org/)</sup>，试了下在 `NAS` 上不太好使，个人推荐兼容 `bash`, `dash` 和 `sh` 多种 `shell` 环境的 `acme.sh` 脚本 <sup>[[4]](https://github.com/Neilpang/acme.sh/)</sup>。

## 安装脚本工具

`SSH` 连接到 `NAS` 上，安装 `acme.sh` 有两种方式 :

- 在线安装 :

  ```bash
  curl https://get.acme.sh | sh
  ```

  或者

  ```bash
  wget -O - https://get.acme.sh | sh
  ```

- 离线安装 :

  ```bash
  git clone https://github.com/acmesh-official/acme.sh.git
  cd ./acme.sh
  ./acme.sh --install
  ```

默认安装到用户目录 `~/.acme.sh/`

同时自动创建了一个 `cron` 任务，每天定时自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书。

## 申请安装证书

由于没有公网 IP，只能使用 `DNS API` 验证的方式来自动申请证书，以 `Cloudflare` 域名解析服务为例。

切换到安装目录，复制子目录 `dnsapi` 下面的 `dns_cf.sh` 到安装根目录 :

```bash
cd ~/.acme.sh
cp dnsapi/dns_cf.sh dns_cf.sh
```

修改 `dns_cf.sh`，去掉 `CF_Key` 和 `CF_Email` 的注释，并用 `Cloudflare` 个人资料的 `API` 令牌 页面上的 `Global API Key` 和 账号绑定的邮件地址替换相应的值。

```bash
CF_Key="eV******b5pwX36Va9nt******1Pm8QqQ9S7e"
CF_Email="example@gmail.com"
```

申请并安装泛域名证书 :

```bash
acme.sh --issue --dns dns_cf \
-d 233so.com -d "*.233so.com" \
--install-cert -d 233so.com \
--cert-file /etc/stunnel/backup.cert \
--key-file /etc/stunnel/backup.key \
--reloadcmd "/share/Scripts/reloadcmd.sh" \
--log /share/Private/cert/logs/acme.sh.log
```

威联通默认的证书存储位置是 `/etc/stunnel/`，其中 `stunnel.pem` 是证书和私钥二合一的证书，`backup.cert` 和 `backup.key` 是原始证书和私钥的备份，所以需要写一个脚本 `reloadcmd.sh` 来合并证书，日志位置可以指定，不指定默认保存在 `~/.acme.sh/acme.sh.log` :

```bash
#!/bin/sh
/etc/init.d/Qthttpd.sh stop
/etc/init.d/stunnel.sh stop
cat /etc/stunnel/backup.cert \
/etc/stunnel/backup.key > \
/etc/stunnel/stunnel.pem
/etc/init.d/stunnel.sh start
/etc/init.d/Qthttpd.sh start
```

证书安装的各种配置会保存在 `233so.com.conf`，证书都会保存在域名目录（根据官方说明，不排除脚本后续更新后目录结构会发生变化），同时 `CF_Key` 和 `CF_Email` 会自动保存在 `~/.acme.sh/account.conf` 供脚本下次自动使用。

更多域名解析服务商设置: <https://github.com/acmesh-official/acme.sh/wiki/dnsapi>

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/apply-let's-encrypt-ca/QQ拼音截图20200524214006.png" title="cert" >}}

## 引用来源

- <https://github.com/acmesh-official/acme.sh>
- <https://github.com/Yannik/qnap-letsencrypt>
- <https://forum.qnap.com/viewtopic.php?t=149687>

