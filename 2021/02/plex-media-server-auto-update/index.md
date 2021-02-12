# 自动更新威联通上的 Plex Media Server


在威联通上的 `Plex Media Server` 虽然会提示新版本升级，但是无法自动下载并安装。`Plex` 本身更新算是比较频繁的，这就比较难受了。于是想了想能不能通过计划任务来实现自动下载安装更新。

<!--more-->

作为面向搜索引擎编程的门外汉，想了一个最简单的思路，那就是先获取本地和服务器端的版本号，进行比较以后如果本地比服务器小，那么就下载下来安装。

## 获取本地版本号

先找到 `Plex Media Server` 安装目录

用 `/sbin/getcfg PlexMediaServer Install_Path -f /etc/config/qpkg.conf` 来就可以获取

一般是在 `/share/CACHEDEV1_DATA/.qpkg/PlexMediaServer/`。

`Plex` 的主程序就是 `Plex Media Server` 这个文件。

用常用的查询版本命令 `"Plex Media Server" --version` 去试试果然可以获取本地版本号。

```markdown
版本号由 v + 版本号 + hash 值前几位构成
v1.21.3.4021-5a0a3e4b2
```

查询出来的版本号不能直接拿来用，目前来看，`Plex` 的版本号数字位数是固定的，由四部分组成，所以我只需要从 `2` 位开始到 `12` 位的内容。

所以用一行命令来截取字符串，`${字符串变量:1:11}`，这样我们就得到了能够用来比较大小的新版本号 `1.21.3.4021`。

## 获取服务器端版本号

根据 `Plex` 本身的更新提示可以获取到新版本的下载链接，好在是固定的。

`https://plex.tv/downloads/latest/5?channel=16&build=linux-x86_64&distro=qnap`

说句题外话，群晖的更新链接估计就是 `https://plex.tv/downloads/latest/5?channel=16&build=linux-x86_64&distro=synology`。

这个下载链接会重定向到新的链接，格式如下：

`https://downloads.plex.tv/plex-media-server-new/1.21.3.4021-5a0a3e4b2/qnap/PlexMediaServer-1.21.3.4021-5a0a3e4b2-x86_64.qpkg`

那么我只要获取到这个链接，就可以提取到需要的版本号了。如果下载下来直接获取文件名肯定是最简单的了，但是每次要下载也太浪费了。好在 `curl` 可以获取 `HEAD` 请求信息 [^1]，可以尝试看看文件名是否直接保存在里面了。

利用 `curl -s -I "https://plex.tv/downloads/latest/5?channel=16&build=linux-x86_64&distro=qnap"` 命令返回到信息如下：

```markdown
HTTP/1.1 302 Found
Date: Fri, 12 Feb 2021 14:02:37 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
Location: https://downloads.plex.tv/plex-media-server-new/1.21.3.4021-5a0a3e4b2/qnap/PlexMediaServer-1.21.3.4021-5a0a3e4b2-x86_64.qpkg
Cache-Control: no-cache
Set-Cookie: \_my-plex_session_32=YzRJS1VnV2xhNktjbmNWQUFWZzhPMnBvQUpiTmhPQmRBZitnN3V6TG12OUE4MTNWSzNFbFJGQ3k0ZXRtNVUwdWN1UHFkZVk4SG1PUU9DVEk0clp5cUZ5bDFlbGptK0tKWVg0ellqbk0yM1dCRjBQQnlXVnViWFVWWXJGbDJZZ1p4N1YxSzR3bGp5UWwrbjM3clFQMkQ5TnBkdG4vVmQxZHhiOWN3TkpFYi9zPS0tMVlBRjd4aUM4RzBjd2xNVFNIR3ZyZz09--d412bbc6bc4aa676d1c03b9f22b49e5a5b7df4ad; path=/; HttpOnly; secure
X-Request-Id: c3078f6d-b09a-4f34-a419-7e7d72a6086e
X-Runtime: 0.015837
Strict-Transport-Security: max-age=0
Referrer-Policy: origin-when-cross-origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Frame-Options: sameorigin
```

很明显，思路是对的，最终的链接保存在 `Location` 里。使用 `grep` 命令把这一行单独拿出来，再用 `cut` 命令根据空格符把前面的 `Location` 部分切掉，拿到链接。

接着再用两次 `cut` 命令，分别根据 `/` 和 `-` 切割拿到最终需要的版本号。

完整的命令如下：

```shell
URL=$(curl -s -I "https://plex.tv/downloads/latest/5?channel=16&build=linux-x86_64&distro=qnap" | grep '^Location' | cut -f2 -d ' ' | sed 's/\r//g')
Latest_Version=$(echo $URL | cut -d "/" -f5 | cut -d "-" -f1)
```

其中第一行命令中结尾的 `sed 's/\r//g'` 是因为通过搜索引擎查到的资料显示直接获取的链接字符串末尾换行符是 `CRLF` 的，可能会有影响，所以转换成 `LF` 了。

## 实现自动更新

直接上代码，写的比较一般，没有考虑更多的普适性，安装成功或失败会在 `Web` 管理界面消息提示。

关于 `log_tool` 这个命令的用法可以参考我的另一篇博文 [威联通：log_tool 命令](/2020/05/qnap-logtool/)。

```shell
update() {
  curl -O $URL
  if [ $? ]; then
    sh *.qpkg
    if [ $? ]; then
      log_tool -t 0 -N "PMSUpdator" -G "update" -a "PlexMediaServer has been updated to $Latest_Version!"
    else
      log_tool -t 1 -N "PMSUpdator" -G "update" -a "PlexMediaServer update failed, please install the latest version $Latest_Version manually!"
    fi
    rm -f *.qpkg
  else
    update
  fi
}

if [ $Installed_Version \< $Latest_Version ]; then
  update
fi
```

`downloads.plex.tv` 这个域名是套了 `Cloudflare` 的 `CDN` 的，国内某些网络下访问可能会有干扰，导致下载失败。

如果你有 `socks5` 代理，可以尝试代理下载 `curl --socks5 127.0.0.1:1080`

此外你也可以修改 `NAS` 的 `hosts`，虽然 `CF` 的 `CDN` 都是 `anycast` 的，但是选择对特定运营商友好的 `ip` 可以提高速度，移动可以选择香港，电信可以选择和百度合作的。

## 加入定时任务

完整的脚本代码如下：

```shell
#!/bin/sh
CONF=/etc/config/qpkg.conf
PlexMediaServer_ROOT=$(/sbin/getcfg PlexMediaServer Install_Path -f ${CONF})
Full_Installed_Version=$("$PlexMediaServer_ROOT/Plex Media Server" --version)
Installed_Version=${Full_Installed_Version:1:11}
URL=$(curl -s -I "https://plex.tv/downloads/latest/5?channel=16&build=linux-x86_64&distro=qnap" | grep '^Location' | cut -f2 -d ' ' | sed 's/\r//g')
Latest_Version=$(echo $URL | cut -d "/" -f5 | cut -d "-" -f1)

update() {
  curl -O $URL
  if [ $? ]; then
    sh *.qpkg
    if [ $? ]; then
      log_tool -t 0 -N "PMSUpdator" -G "update" -a "PlexMediaServer has been updated to $Latest_Version!"
    else
      log_tool -t 1 -N "PMSUpdator" -G "update" -a "PlexMediaServer update failed, please install the latest version $Latest_Version manually!"
    fi
    rm -f *.qpkg
  else
    update
  fi
}

if [ $Installed_Version \< $Latest_Version ]; then
  update
fi
```

然后加入定时任务 `crontab`

```shell
echo "0 1 * * * $QPKG_ROOT/update.sh" >> /etc/config/crontab
crontab /etc/config/crontab && /etc/init.d/crond.sh restart
```

[^1]: [curl 的用法指南](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

