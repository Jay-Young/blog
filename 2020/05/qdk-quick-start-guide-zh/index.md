# QDK 快速开发指南中文版


`QDK` 是用于构建威联通 `QTS` 系统 `QPKG` 应用的一套开发工具. `QPKG` 应用不仅能让用户方便地安装和删除软件包，还能让应用开发者/维护者完全控制应用在 `NAS` 上的安装过程.

<!--more-->

`QDK` 项目地址:

- [https://github.com/qnap-dev/QDK](https://github.com/qnap-dev/QDK) , 直接安装在 `NAS` 上的 `QPKG`
- [https://github.com/qnap-dev/qdk2](https://github.com/qnap-dev/qdk2) , 用于普通 `Linux` 系统 ( 比如 `Debian` )

`QDK` 快速开发指南中文版, 基于 [QDK_Quick_Start_Guide_v4_eng.pdf](https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/docs/hugo/qdk-quick-start-guide-zh/QDK_Quick_Start_Guide_v4_eng.pdf) 结合最新版本 `QDK 2.3.10` 改动翻译.

## 什么是 QDK

- QDK 用于在 QNAP Turbo NAS 上构建 QPKG 文件/应用
- QDK 最初是对 QPKG SDK 的第一个正式版本的简单修改
- 许可协议 : GPL

## 下载 QDK

[https://download.qnap.com/QPKG/QDK/QDK_2.3.10.zip](https://download.qnap.com/QPKG/QDK/QDK_2.3.10.zip)

## 安装 QDK

直接通过 [ `App Center` ] 应用中心安装:

{{< figure src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/qdk-quick-start-guide-zh/QQ拼音截图20200517143450.png" >}}

{{< figure src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/qdk-quick-start-guide-zh/QQ拼音截图20200517143543.png" >}}

{{< figure src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/qdk-quick-start-guide-zh/QQ拼音截图20200517143624.png" >}}

## 创建 QPKG

### 生成开发环境

- `SSH` 连接到 `NAS`
- 用命令生成第一个 `QPKG` : `qbuild --create-env MyQPKG`
- 以 `MyQPKG` 命名的文件夹就创建好了

  ```bash
  $ cd MyQPKG/
  $ ls
  arm_64/  arm-x19/  arm-x31/
  arm-x41/  build_sign.csv  config/
  icons/  package_routines  qpkg.cfg
  shared/  x86/  x86_64/  x86_ce53xx/
  ```

{{< figure src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/qdk-quick-start-guide-zh/QQ拼音截图20200517152423.png" >}}

### 修改配置

- 编辑 `qpkg.cfg` 文件内容
  - `QPKG_NAME` : 应用名字
  - `QPKG_VER` : 应用版本
  - `QPKG_AUTHOR` : 应用作者

可以使用 `vi` 或者其他文本编辑器进行编辑

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/qdk-quick-start-guide-zh/QQ拼音截图20200517153124.png" title="edit qpkg.cfg" >}}

### 自定义 QPKG 安装命令

- `package_routines` 内容 :
  - `pkg_pre_install()` : 安装前执行的命令
  - `pkg_install()` : 安装中执行的命令
  - `pkg_post_install()` : 安装后执行的命令
  - `PKG_PRE_REMOVE` : 卸载前执行的命令
  - `PKG_MAIN_REMOVE` : 卸载中执行的命令
  - `PKG_POST_REMOVE` : 卸载后执行的命令
- `shared/MyQPKG.sh` 内容 :
  - `Start` : 当启动应用时执行的命令
  - `Stop` : 当停止应用时执行的命令

{{< image src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/qdk-quick-start-guide-zh/QQ拼音截图20200517154214.png" title="edit install scripts" >}}

### 添加文件到 QPKG

- 根据不同的功能分类将应用所需的文件复制到下面相应的目录 :
  - `shared/` : 不同架构平台共享的文件
  - `arm_64/ arm-x19/ arm-x31/ arm-x41/ x86/ x86_64/ x86_ce53xx/` : 对应架构平台私有的文件
  - `icons/` : 图标文件, 需要三个 `gif` 文件, 分别是:
    - `MyQPKG.gif` : 正常图标, 大小 `64 x 64 px`
    - `MyQPKG_80.gif` : 大图标, 大小 `80 x 80 px`
    - `MyQPKG_gray.gif` : 灰色图标, 用于在应用中心停止后显示的图标, 大小 `64 x 64 px`
  - `config/` : 自定义应用所需配置文件

### 生成 QPKG 文件

- 使用下面的命令生成 `QPKG` 文件 :

  ```bash
  $ qbuild
  Creating archive with data files...
  Creating archive with control files...
  Creating QPKG package...
  ```

- `QPKG` 文件生成在子目录 `build` 内 :

  ```bash
  $ cd build/
  $ ls
  MyQPKG_0.1.qpkg  MyQPKG_0.1.qpkg.md5
  ```

{{< figure src="https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/assets/images/hugo/qdk-quick-start-guide-zh/QQ拼音截图20200517160058.png" >}}

## 关于更多详细开发内容

[完整开发文档英文版](https://cdn.jsdelivr.net/gh/Jay-Young/jsDelivrCDN@master/docs/hugo/qdk-quick-start-guide-zh/QDK_2.0.pdf)

