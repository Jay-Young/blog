# 威联通：VNC连接Linux客户端曲线救国使用百度网盘


目前威联通 NAS 上面没有官方的百度网盘程序，第三方的 baidupcs-go-web 也似乎处于不可用的状态，目前能够勉强能用的曲线救国的方法是使用百度官方的 Linux 客户端，然后通过远程桌面连接的方式来使用。得益于 docker 镜像，目前不需要通过安装 Linux 虚拟机这种笨重的方式来实现，这里介绍两个 docker 镜像。

<!--more-->

鉴于国内网络环境不太友好，推荐使用 Registry 国内镜像服务器来加速。

{{< image src="/images/hugo/qnap-baidunetdisk-vnc/Snipaste_2020-07-23_16-58-38.png" title="Registry 镜像加速" >}}

## johnshine/baidunetdisk-crossover-vnc

项目地址: [https://github.com/john-shine/Docker-CodeWeavers_CrossOver-VNC](https://github.com/john-shine/Docker-CodeWeavers_CrossOver-VNC)

镜像地址: [https://hub.docker.com/r/johnshine/baidunetdisk-crossover-vnc](https://hub.docker.com/r/johnshine/baidunetdisk-crossover-vnc)

高级设置示例：

- 环境变量新增`vnc_password`，用于设置密码
- 网络 5901 为 vnc 客户端连接端口，6080 为 web 端口，根据实际选择主机端口转发
- 挂载共享文件夹，挂载路径为`/home/baidu/baidunetdiskdownload`，本机共享文件夹选择自己想要储存在 NAS 的位置即可

{{< image src="/images/hugo/qnap-baidunetdisk-vnc/Snipaste_2020-07-23_12-12-41.png" title="设置环境变量" >}}
{{< image src="/images/hugo/qnap-baidunetdisk-vnc/Snipaste_2020-07-23_11-56-04.png" title="设置网络端口" >}}
{{< image src="/images/hugo/qnap-baidunetdisk-vnc/Snipaste_2020-07-23_11-56-45.png" title="挂载共享文件夹" >}}
{{< image src="/images/hugo/qnap-baidunetdisk-vnc/Snipaste_2020-07-23_12-35-48.png" title="切换中文输入法" >}}

- 文字显示对中文、英文之外的支持比较差，比如韩文、日文。键盘支持中文输入法。
- 在容器内~/baidunetdiskdownload/目录下添加.reset 文件夹，重置百度云客户端设置
- 在容器内~/baidunetdiskdownload/目录下添加.vnc/passwd.txt 文件，设置 vnc 密码

## johngong/baidunetdisk

项目地址: [https://github.com/gshang2017/docker](https://github.com/gshang2017/docker)

镜像地址: [https://hub.docker.com/r/johngong/baidunetdisk](https://hub.docker.com/r/johngong/baidunetdisk)

高级设置示例:

- 环境变量新增`VNC_PASSWORD`，用于设置密码
- 网络 5900 为 vnc 客户端连接端口，5800 为 web 端口，根据实际选择主机端口转发
- 挂载共享文件夹，挂载路径为下载目录`/config/baidunetdiskdownload`和设置目录`/config`，本机共享文件夹选择自己想要储存在 NAS 的位置即可
- 剪贴板无法使用中文，似乎也没有中文输入法，但是对中英文以外的语言显示支持的还算不错。

{{< image src="/images/hugo/qnap-baidunetdisk-vnc/Snipaste_2020-07-24_23-30-14.png" title="Linux客户端" >}}

百度的官方 Linux 客户端似乎对会员也是有限速的，第一个 docker 镜像似乎最大只能到 3M/S 左右了，后一个镜像倒是没有限速，可能跟客户端版本有关系。

