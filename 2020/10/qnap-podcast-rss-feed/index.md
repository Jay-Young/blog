# 威联通：Podcast 播客那些事儿


在短视频内容为王的时代，以声音为专有传播媒介的播客似乎也在这几年受到了一些的关注。和博客一样作为 Web2.0 的传媒形态，却在中国很长一段时间里一直不温不火。

<!--more-->

一般来说，收听播客无外乎使用播客软件订阅播客生产者的订阅链接。假如某一天播客生产者因不可抗拒的力量导致自身服务器上的内容消失，那么我将这些内容下载到自己的 NAS 上是最保险的。但是，成千上百期的节目手动下载是比较捉急的，那么就需要写脚本了，而且脚本需要能够自动化下载后续更新的节目内容。下面以津津乐道播客节目为例，用比较粗暴的脚本简单实现。

## Download Station 订阅下载

威联通官方的 Download Station 是支持订阅链接的解析的，所以将津津乐道播客的订阅链接 `https://feeds.jjldbk.com/all.xml` 添加到 RSS 里面，然后选择需要下载的节目添加到下载任务，至于后续节目更新了也是需要手动来下载的。

{{< image src="/images/hugo/qnap-podcast-rss-feed/Snipaste_2020-10-20_00-03-12.webp"  alt="ds5" caption="ds5" title="ds5" width=100% >}}

## 脚本自动化

选择 `python` 的 `ElementTree` 来解析 `xml` 内容，找到所有节目的下载链接并存入 `url.txt`。

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from xml.etree import ElementTree as ET

tree = ET.parse('all.xml')
root = tree.getroot()
childs = list(root)

links = []

for elem in root[0].findall("item"):
  for vol in elem.findall("enclosure"):
    links.append(vol.get("url"))

fileObject = open('url.txt', 'w')
for url in links:
  fileObject.write(url)
  fileObject.write('\n')
fileObject.close()
```

编写下载脚本，利用 `wget` 来下载内容。

使用 `-i` 参数来实现批量下载，由上面解析 `xml` 的 `python` 程序 `main.py` 来生成保存链接的文件。

使用 `-N` 参数来防止加入计划任务时候重复下载，只有在服务器文件比本地文件新的时候才下载。

使用 `-c` 参数开启断点续传下载，因意外中断下载，可以在下次定时任务执行的时候继续下载之前的任务。

使用 `-b` 参数开启后台下载，不阻塞进程。

使用 `-o` 参数保存下载 log 文件，可以作为分析使用。

```sh
#!/bin/sh
url="https://feeds.jjldbk.com/all.xml"
logdir=log
links=url.txt
savedir=/share/Multimedia/播客/津津乐道
wget --no-check-certificate -N -c $url -o $logdir/feed.log
python3 main.py
wget --content-disposition -b -N -c -P $savedir -i $links -o $logdir/$(date +"%Y%m%d%H%M%S").log
```

接下来需要写一个删除日志的脚本，规定超过 30 天的日志文件就删除。

```sh
#!/bin/sh
logdir=log
find $logdir/ -mtime +30 -name "*.log" -exec rm -rf {} \;
```

最后赋予两个脚本文件可执行权限，并将其加入定时任务。参阅[威联通：定时任务](/2020/05/qnap-crontab)。

## Podcast Generator

Podcast Generator [^1] 是一个基于 Web 的播客系统，本身似乎支持 RSS Feed 来实现收听播客，但是我用了最新的 3.1 版本，修改了配置文件似乎也不太行，只能放弃了。不知道是 Podcast Generator 本身的问题，还是津津乐道播客的 RSS 链接不符合要求，更有可能是我自己不会配置导致的问题。

当然作为一个播客系统，Podcast Generator 可以将已经下载的播客节目索引以后直接在其提供的 Web 界面上收听。只要将 `config.php` 中的 `$upload_dir` 指向存储播客节目的目录，然后在管理界面通过 `FTP Auto Indexing` 来自动添加即可。

{{< image src="/images/hugo/qnap-podcast-rss-feed/Snipaste_2020-10-20_00-39-44.webp"  alt="Podcast Generator" caption="Podcast Generator" title="Podcast Generator" width=100% >}}

这个默认界面是丑了点，而且从功能性来讲也不好用，还不如使用 Plex 或者 Kodi 这种媒体服务器。如果只是想要在 NAS 上收听播客，Plex 本身也是支持订阅链接的，在 Plex 的设置——在线媒体资源界面启用 PODCASTS 功能。

[^1]: [https://github.com/PodcastGenerator/PodcastGenerator](https://github.com/PodcastGenerator/PodcastGenerator)

