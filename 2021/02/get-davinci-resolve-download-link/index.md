# 脚本获取达芬奇软件下载链接


`DaVinci Resolve`（达芬奇）是一款在同一个软件工具中，将剪辑、调色、视觉特效、动态图形和音频后期制作融于一身的解决方案！它采用美观新颖的界面设计，易学易用，能让新手用户快速上手操作，还能提供专业人士需要的强大性能。有了 `DaVinci Resolve`，您无需学习使用多款软件工具，也不用在多款软件之间切换来完成不同的任务，从而以更快的速度制作出更优质的作品。这意味着您在制作全程都可以使用摄影机原始画质影像。只要一款软件，就相当于获得了属于您自己的后期制作工作室！学习和掌握 `DaVinci Resolve`，就能获得好莱坞专业人士所使用的同款制作工具！[^1]

<!--more-->

达芬奇软件有两个版本，免费的 `Davinci Resolve` 和付费的 `Davinci Resolve Studio`。但是不管哪个版本，在官网每次都需要输入姓名、邮件、电话、国家和城市这些个人信息才能下载。所以为了不那么麻烦，直接写个脚本模拟 `POST` 请求搞定它。

预览效果：

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jay-young.github.io/images/hugo/get-davinci-resolve-download-link/Snipaste_2021-02-19_22-49-02.png" alt="预览效果" caption="预览效果" title="预览效果" width=100% >}}

## 基本思路

通过浏览器手动下载，在开发者工具可以获取到两个关键 `POST` 请求链接。

获取 `downloadId` 的链接，以 `Windows` 平台的免费版本 `17.0` 为例：

`http://www.blackmagicdesign.com/api/support/latest-version/davinci-resolve/windows`

返回如下 `JSON` 格式数据：

```json
{
 "windows": {
  "releaseId": "c5a5295d23814624828cdac1ecd34f4a",
  "downloadId": "fd6f89e2ccb743d2a2d59ce5f9508fd8",
  "major": 17,
  "minor": 0,
  "releaseNum": 0,
  "build": 33,
  "beta": 9
 }
}
```

有了 `downloadId` 就可以构造直接获取下载链接的请求了：

```shell
curl -s "http://www.blackmagicdesign.com/api/register/cn/download/fd6f89e2ccb743d2a2d59ce5f9508fd8" \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74' \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -d '{"product":"null","country":"cn","firstname":"null","lastname":"null","email":"null@null.com","phone":"1","city":"null"}'
```

完整的 `POST` 请求中还有很多参数，通过测试可以减少到如上，只需要传递 `UA` 和 `Content-Type` 两个 `HEADER` 参数。

传递的内容也精简了，`product` 值必不可少，在免费版上测试少了就会出错。

`product` 其原本的值应该是平台名字，比如 `Windows`，但是请求链接里其实已经包含了需要下载的平台、版本信息，所以随便写一个，只要不为空就可以。

这个请求返回的值就直接是所需要的下载链接了，有过期时限，默认 3 小时后过期：

```markdown
http://sw.blackmagicdesign.com/DaVinciResolve/v17.0b9/DaVinci_Resolve_17.0b9_Windows.zip?Key-Pair-Id=APKAJTKA3ZJMJRQITVEA&Signature=NvqTW60iciBvxwpejiYBbbDge/yyjm0cpBVFsIIPaxhfeWh0rULGuApol5MFahsur9Ji1P410S9rKs6ZYgzzWPe6oWaTb2Tj0Hquhc1GnpJsv1Ri3P4bW19VRUwT4oXqYbYJRMXl4e5jggAkEVjePl42L2qcjnhnH0OwwU3UJyCwH/CUAdsB6rmkle9cXGAik6miDskrEkU2TdLnpFsuPZzGCm08XGmkMKNQXKYE/GpPjmrkPn6tolKwIR2Yrd+YSugieQBCY4ZLKjDz5YHLEgyGWlQn9hlLEpREEKVX+ZU0AHkPjwT6kY/4lIBsnGlnxkHKQj63orCpfSMqkuxRSA==&Expires=1613755627
```

## Linux Shell 脚本

只在威联通 `QNAP TS-453Bmini` 上测试通过。

```shell
#!/bin/sh
################ Version Info ##################
# File:        达芬奇下载链接
# Create Date: 2021/02/19 10:22:42
# Author:      Jay
# Webstie:     https://blog.233so.com/
# Version:     1.0
# Description: 获取达芬奇各版本下载链接
################################################

menu() {
  echo -e "\e[1;32m======================================\e[0m"
  echo -e "\e[1;35m  欢迎使用获取达芬奇下载链接脚本程序\e[0m"
  echo -e "\e[1;32m======================================\e[0m"
  echo -e "\e[1;32m1.Davinci Resolve\e[0m"
  echo -e "\e[1;32m2.Davicni Resolev Studio\e[0m"
  echo -e "\e[1;33m0.退出\e[0m"
  echo -e "\e[1;32m======================================\e[0m"
}

num() {
  read -p "请选择产品: " number
  case $number in
  1)
    export EDITION="davinci-resolve"
    export DISPLAY_NAME="Davinci Resolve"
    platform
    ;;
  2)
    export EDITION="davinci-resolve-studio"
    export DISPLAY_NAME="Davinci Resolve Studio"
    platform
    ;;
  0)
    exit 0
    ;;
  esac
}

platform() {
  echo -e "\e[1;32m======================================\e[0m"
  echo -e "\e[1;35m           选择程序运行平台\e[0m"
  echo -e "\e[1;32m======================================\e[0m"
  echo -e "\e[1;33m1.返回上级菜单\e[0m"
  echo -e "\e[1;32m2.Windows 版本\e[0m"
  echo -e "\e[1;32m3.Mac 版本\e[0m"
  echo -e "\e[1;32m4.Linux 版本\e[0m"
  echo -e "\e[1;33m0.退出\e[0m"
  echo -e "\e[1;32m=======================================\e[0m"
  read -p "请选择平台: " platform
  case $platform in
  1)
    main
    ;;
  2)
    export PLATFORM="Windows"
    version
    ;;
  3)
    export PLATFORM="Mac"
    version
    ;;
  4)
    export PLATFORM="Linux"
    version
    ;;
  0)
    exit 0
    ;;
  *)
    platform
    ;;
  esac
}

version() {
  echo -e "\e[1;32m======================================\e[0m"
  echo -e "\e[1;35m             选择程序版本\e[0m"
  echo -e "\e[1;32m======================================\e[0m"
  echo -e "\e[1;33m1.返回上级菜单\e[0m"
  echo -e "\e[1;32m2.16\e[0m"
  echo -e "\e[1;32m3.17\e[0m"
  echo -e "\e[1;33m0.退出\e[0m"
  echo -e "\e[1;32m=======================================\e[0m"
  read -p "请选择版本: " version
  case $version in
  1)
    platform
    ;;
  2)
    export VERSION="latest-stable-version"
    showUrl
    ;;
  3)
    export VERSION="latest-version"
    showUrl
    ;;
  0)
    exit 0
    ;;
  *)
    version
    ;;
  esac
}

get_json_value() {
  local json=$1
  local key=$2

  if [[ -z "$3" ]]; then
    local num=1
  else
    local num=$3
  fi

  local value=$(echo "${json}" | awk -F"[,:}]" '{for(i=1;i<=NF;i++){if($i~/'${key}'\042/){print $(i+1)}}}' | tr -d '"' | sed -n ${num}p)

  echo ${value}
}

showUrl() {
  downloadId=$(get_json_value $(curl -s "http://www.blackmagicdesign.com/api/support/$VERSION/$EDITION/$PLATFORM") downloadId)
  downloadUrl=$(curl -s "http://www.blackmagicdesign.com/api/register/cn/download/$downloadId" \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74' \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -d '{"product":"null","country":"cn","firstname":"null","lastname":"null","email":"null@null.com","phone":"1","city":"null"}')
  if [ $VERSION = "latest-stable-version" ]; then
    echo -e "\e[1;35m您选择的产品是 $DISPLAY_NAME $PLATFORM 16: \e[0m"
  elif [ $VERSION = "latest-version" ]; then
    echo -e "\e[1;35m您选择的产品是 $DISPLAY_NAME $PLATFORM 17: \e[0m"
  fi
  echo $downloadUrl
}

main() {
  while true; do
    menu
    num
  done
}
main
```

## Windows Batch 脚本

只在 `Windows 10 Pro 19041.804` 上测试通过，需要自行安装 [curl](https://curl.haxx.se/windows/)。

```batch
@echo off
chcp 65001
:menu
@echo off
setlocal EnableDelayedExpansion
cls
echo ======================================
echo   欢迎使用获取达芬奇下载链接脚本程序
echo ======================================
echo 1.Davinci Resolve
echo 2.Davicni Resolev Studio
echo 0.退出
echo ======================================
set /p edition=请选择产品：
if !edition! == 1 (
  set EDITION=davinci-resolve
  set EDITION_NAME=Davinci Resolve
  goto platform
)
if !edition! == 2 (
  set EDITION=davinci-resolve-studio
  set EDITION_NAME=Davinci Resolve Studio
  goto platform
)
if !edition! == 0 exit
set "edition="
goto menu
:platform
@echo off
setlocal EnableDelayedExpansion
cls
echo ======================================
echo            选择程序运行平台
echo ======================================
echo 1.返回上级菜单
echo 2.Windows 版本
echo 3.Mac 版本
echo 4.Linux 版本
echo 0.退出
echo ======================================
set /p platform=请选择平台：
if !platform! == 1 (
  goto menu
)
if !platform! == 2 (
  set PLATFORM=Windows
  goto version
)
if !platform! == 3 (
  set PLATFORM=Mac
  goto version
)
if !platform! == 4 (
  set PLATFORM=Linux
  goto version
)
if !platform! == 0 exit
set "platform="
goto platform
:version
@echo off
setlocal EnableDelayedExpansion
cls
echo ======================================
echo             选择程序版本
echo ======================================
echo 1.返回上级菜单
echo 2.16
echo 3.17
echo 0.退出
echo ======================================
set /p version=请选择版本：
if !version! == 1 (
  goto platform
)
if !version! == 2 (
  set VERSION=latest-stable-version
  set VERSION_NAME=16
  goto showUrl
)
if !version! == 3 (
  set VERSION=latest-version
  set VERSION_NAME=17
  goto showUrl
)
if !version! == 0 exit
set "version="
goto version
:showUrl
@echo off
setlocal EnableDelayedExpansion
cls
curl -s "http://www.blackmagicdesign.com/api/support/%VERSION%/%EDITION%/%PLATFORM%" > downloadId.json
set "downloadIdFile=downloadId.json"
set "psCmd="add-type -As System.Web.Extensions;$JSON = new-object Web.Script.Serialization.JavaScriptSerializer;$JSON.DeserializeObject($input).%PLATFORM%.downloadId""
for /f %%I in ('^<"%downloadIdFile%" powershell -noprofile %psCmd%') do set "downloadId=%%I"
echo 您选择的产品是 %EDITION_NAME% %PLATFORM% %VERSION_NAME%:  > url.txt
curl -s "http://www.blackmagicdesign.com/api/register/cn/download/%downloadId%" -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74" -H "Content-Type: application/json;charset=UTF-8" -d "{\"product\":\"null\",\"country\":\"cn\",\"firstname\":\"null\",\"lastname\":\"null\",\"email\":\"null@null.com\",\"phone\":\"1\",\"city\":\"null\"}" >> url.txt
start notepad url.txt
goto menu
```

当然还有 `Python`、`Node.js` 什么的都可以实现，也可以写个 `HTML` 网页在浏览器中用 `JavaScript` 去获取。

[^1]: [达芬奇官网](https://www.blackmagicdesign.com/cn/products/davinciresolve/)

