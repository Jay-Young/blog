# 阴阳师：干掉网易安全系统 NEProtect？


最近突然想解压，于是打开好久没玩的猪场著名游戏阴阳师的桌面版，更新后启动发现右下角有个有个熟悉的玩意闪过，定睛一看咋那么像鹅厂那个“大名鼎鼎”的 TP 系统呢，猪场鹅厂化？

<!--more-->

{{< image src="/images/hugo/Kill-Onmyoji-NEProtect/Snipaste_2020-09-22_22-55-38.png" alt="NEP系统" caption="NEP系统" title="NEP系统" width=50% >}}

{{< image src="/images/hugo/Kill-Onmyoji-NEProtect/tp.jpg" alt="TP系统" caption="TP系统" title="TP系统" width=50% >}}

这些玩意有没有用不知道，虽然恶意揣测不好，但是从腾讯的 TP 系统来看并不怎么好用，系统一更新就要出问题，所以我还是决定先干掉这个猪场版的 NEP 系统。

查看进程应该就是 NEPDaemon 这个进程了。

{{< image src="/images/hugo/Kill-Onmyoji-NEProtect/Snipaste_2020-09-22_22-59-08.png" alt="NEPDaemon" caption="NEPDaemon" title="NEPDaemon" width=90% >}}

右键定位到所在文件夹位置，发现似乎还有其他 3 个关联文件：NEP2.dll, NEPLauncher.dll, NEPSplash.exe。

{{< image src="/images/hugo/Kill-Onmyoji-NEProtect/Snipaste_2020-09-22_22-52-39.png" alt="关联文件" caption="关联文件" title="关联文件" width=100% >}}

先都把他们剪切到其他地方，运行阴阳师看看效果。

{{< image src="/images/hugo/Kill-Onmyoji-NEProtect/Snipaste_2020-09-22_22-54-25.png" alt="报错" caption="报错" title="报错" width=80% >}}

报错：找不到 NEP2.dll，看来得留下这个文件，再次运行阴阳师成功进入游戏。因为还留着一个 NEP2.dll，是不是真的干掉了这个系统就不清楚了。而且按照一般的尿性，需要管理员运行的阴阳师在后续更新中可能会重新下载 NEP 系统，可以考虑在原来的位置新建同名文件，设置只读属性。当然最好的办法可能是利用一些安全工具直接阻止 NEPDaemon 和 NEPSplash 的启动。

{{< image src="/images/hugo/Kill-Onmyoji-NEProtect/Snipaste_2020-09-22_23-07-22.png" alt="阻止启动" caption="阻止启动" title="阻止启动" width=100% >}}

