# 借助 Hyper-V 虚拟机升级 Windows To Go 系统


Windows To Go<sup>[[1]](https://docs.microsoft.com/zh-cn/windows/deployment/planning/windows-to-go-overview)</sup>是 Windows 10 企业版和 Windows 10 教育版中的一项功能，支持创建可从电脑上 USB 连接的外部驱动器启动的 Windows To Go 工作区。事实上 Windows 10 专业版也是可以用的，但是默认所有版本都是没有办法常规升级大版本的。

<!--more-->

## 前言

之前升级过一次 Windows To Go 系统, 是从 1709 升级到 1803, 记得好像用的是 VMware Workstation 15 Player。现在 1803 早就过了服务终止日期<sup>[[2]](https://support.microsoft.com/zh-cn/help/13853/windows-lifecycle-fact-sheet)</sup>，这次试着用 Hyper-V 来升级下。

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_18-54-32.png" title="Windows 10 1803" >}}

## 启用 Hyper-V

打开控制面板 → 程序和功能 → 启用或关闭 Windows 功能，勾选 Hyper-V，等待加载完毕后重启电脑。

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-01_23-19-50.png" title="启用 Hyper-V" >}}

## 设置 WTG 优盘

WTG 优盘连接以后，打开磁盘管理，将优盘设置为脱机。

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_23-42-13.png" title="设置脱机" >}}

## 新建虚拟机

根据你的操作系统以及是否支持 UEFI 来选择建立一代还是二代虚拟机，具体资料可参考官方文档<sup>[[3]](https://docs.microsoft.com/zh-cn/windows-server/virtualization/hyper-v/plan/should-i-create-a-generation-1-or-2-virtual-machine-in-hyper-v)</sup>。

我手头的系统是在旧电脑（13 年的 Dell Optiplex）上使用的，不支持 UEFI，所以使用一代虚拟机。

一路默认下来，配置网络可以稍后新建，虚拟硬盘选择以后附加虚拟硬盘，完成建立。

## 设置虚拟机

虚拟机设置里添加一个 IDE 磁盘驱动器，挂载已经设置为脱机的 WTG 优盘。

虚拟交换机管理器里新建一个虚拟交换机，选择外部网络，选择实体机正常上网的网卡，勾选允许管理操作系统共享此网络适配器，然后再到设置的网络适配器里选择新建的虚拟机交换机。

完成设置后，我这边一开始启动报错，根据提示关闭设置里的检查点就可以了。

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_19-49-31.png" title="加载硬盘驱动器" >}}

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_19-50-05.png" title="新建虚拟交换机" >}}

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_19-50-24.png" title="设置网络适配器" >}}

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_19-49-54.png" title="关闭检查点" >}}

## 更新系统

登入系统后，进入正常自动更新的流程或者通过加载系统镜像来手动更新。

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_20-28-56.png" title="检查更新" >}}

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_20-31-12.png" title="安装更新" >}}

{{< image src="/images/hugo/windows-to-go-update/Snipaste_2020-06-02_23-37-56.png" title="Windows 10 1903" >}}

## 结论

使用过程中，很容易失去对虚拟机的连接，还碰到了多次蓝屏，包括更新过程中也遇到了蓝屏失败了一次，不知道是什么设置没做好，也懒得分析错误转储文件了。相对而言，还是 VM 上手简单些，不推荐 Hyper-V 来更新 Windows To Go 系统。

