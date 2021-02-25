# 安装 WSL2 80370102 错误解决办法


WSL 刚出来的时候开启过，后来就再也没用过了。最近不想在 QNAP 上直接测试脚本，免得出事，所以想搞下 WSL2。没想到按照官方的操作手册，最后启动 Ubuntu 发行版就是报错：`WslRegisterDistribution failed with error: 0x80370102`。

<!--more-->

按照官方的[排查指南](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#troubleshooting-installation)，`0x80370102` 这个错误代码就是说没有在 BIOS 内开启虚拟化。而事实上，我能够确定是肯定开启的。手上的 Matebook 默认开启虚拟化，进了 BIOS 查看也确实如此。不管是任务管理器的 CPU 信息，还是 `msinfo32` 的系统信息都显示虚拟化功能正常。

{{< image src="/images/hugo/fix-WslRegisterDistribution-failed-with-error-80370102/Snipaste_2021-02-25_18-42-09.webp" alt="CPU 信息" caption="CPU 信息" title="CPU 信息" width=100% >}}

那么是不是 WSL2 所需要的功能没有正确开启呢？在“程序与功能”的“启用或关闭 Windows 功能”菜单中确认 Hyper-V、Linux 子系统和虚拟机平台都已经勾选，不存在问题。

网上的方案大多数都是说叫你去开启 BIOS 的虚拟化，但是都不适用。正当我没办法的时候，去 WSL 的 Github 项目搜了这个错误代码，找到了唯一的结果，其中有一个[高票回复](https://github.com/microsoft/WSL/issues/4120#issuecomment-646807538)确实有用。

就是通过管理员运行下面这行代码启用 Hyper-V 服务，然后重启计算机，再进入已经安装的 WSL2 发行版就没有问题了。

`bcdedit /set hypervisorlaunchtype auto`

看到这行代码的时候，其实我已经大概明白是怎么回事了。之前用过网易的模拟器玩阴阳师，和 Hyper-V 服务有冲突，所以关闭了，估计这也是“启用或关闭 Windows 功能”的 Hyper-V 勾选不起作用的原因。

完整的 WSL2 安装步骤请务必按照[官方手册](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)去进行。

