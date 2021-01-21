# 银河麒麟系统安装微力同步


基于飞腾平台预装银河麒麟 V10 桌面系统的国产电脑，目前和 Windows 平台的电脑并行使用，没有完全替换，所以有一定的文件同步需求。银河麒麟内置的麒麟传书好像没有 Windows 平台，也不兼容其他 ipmsg 的软件。想了想还是用微力同步来进行文件同步好了。然而官方提供的安装脚本似乎有点问题，简单改了改能够用了。

<!--more-->

下载安装脚本：`wget https://www.verysync.com/shell/verysync-linux-installer/go-installer.sh`

用麒麟系统自带的文本编辑器修改安装脚本`go-installer.sh`

第 4 行链接改成`https`，第 27 行删除`$WGET`后面的`-k -O-`参数，第 34 行删除`> $TARFILE`。

```bash
#!/bin/bash
VERSION=1.0
TARFILE=verysync-linux-installer-${VERSION}.tar
TARURL=https://www.verysync.com/shell/verysync-linux-installer/$TARFILE

CURL=`command -v curl  2>/dev/null`
WGET=`command -v wget  2>/dev/null`

#######color code########
RED="31m"      # Error message
GREEN="32m"    # Success message
YELLOW="33m"   # Warning message
BLUE="36m"     # Info message

colorEcho(){
    COLOR=$1
    echo -e "\033[${COLOR}${@:2}\033[0m"
}

if [[ "$CURL" == "" && "$WGET" == "" ]]; then
 colorEcho ${RED} "Did not find the wget or curl command"
 exit 1;
fi


if [[ "$CURL" == "" ]]; then
 CURL="$WGET"
else
 CURL="$CURL --connect-timeout 10 -k"
fi


colorEcho $GREEN "Downloading from $TARURL"
$CURL $TARURL
if [[ $? -ne 0 ]]; then
    colorEcho ${RED} "Failed to fetch $TARURL Please check your network or try again."
    exit 3
fi

colorEcho $GREEN "Extracting installer"

mkdir -p verysync-installer
cd verysync-installer && tar xf "../$TARFILE"
if [[ $? -ne 0 ]]; then
 colorEcho ${RED} "Failed to extract verysync-installer."
 exit 4
fi

colorEcho $GREEN "Processing ..."
./go-inst.sh $@
```

在安装脚本文件所在目录打开终端，分别输入如下命令进行安装

```bash
sudo chmod +x go-installer.sh
sudo ./go-installer.sh
```

此脚本会自动安装以下文件 [^1]：

- `/usr/bin/verysync/verysync`: 微力主程序
- `/usr/bin/verysync/start-stop-daemon`: `daemon`管理程序。自动运行脚本会在系统重启之后，自动运行 `verysync`。

[^1]: [http://www.verysync.com/manual/install/#linux](http://www.verysync.com/manual/install/#linux)

