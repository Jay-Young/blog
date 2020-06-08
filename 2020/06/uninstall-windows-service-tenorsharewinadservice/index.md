# 卸载偷跑的后台服务 TenorshareWinAdService


昨天闲来没事打开卡巴斯基的查看应用程序活动工具，发现一个可疑程序“TenorshareService Application”。打开相应目录后，程序名字是“TenorshareWinAdService.exe”。从名字来看好像是一个广告相关的服务，查了下 Tenorshare 是个苹果设备数据恢复工具，但是我从来没有安装过这玩意。印象中，我装过和苹果有关的东西就是 iTunes 和 PP 助手，目前早就被卸载了。不靠谱地推测可能是后者的原因，当然也有可能是其他软件或者其他什么牛逼的木马后台给我装的 🐶。

{{< image src="/images/hugo/uninstall-windows-service-tenorsharewinadservice/Snipaste_2020-06-07_21-00-11.png" title="没有签名的服务" >}}

既然知道是个没什么用的东西，那就删掉它吧。控制面板肯定是没有卸载途径的，既然是叫 Service，那么去服务里看看吧。果不其然，服务里有个同名的服务，先停止服务。

{{< image src="/images/hugo/uninstall-windows-service-tenorsharewinadservice/Snipaste_2020-06-07_21-00-24.png" title="没有签名的服务" >}}

管理员运行 CMD/PS，输入 sc delete TenorshareWinAdService，大功告成。

{{< image src="/images/hugo/uninstall-windows-service-tenorsharewinadservice/Snipaste_2020-06-07_21-02-15.png" title="没有签名的服务" >}}

{{< image src="/images/hugo/uninstall-windows-service-tenorsharewinadservice/Snipaste_2020-06-07_21-02-44.png" title="没有签名的服务" >}}

还是要警惕一些可能存在的流氓软件的后台，尤其是自启动的服务。

