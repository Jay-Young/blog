# 关闭私有地址解决 iOS 14 无法连接 WiFi


iOS 14 引入了 WiFi 的私有地址防止网络运营商追踪你的设备，所以导致无法成功连接到使用了 MAC 地址白名单的路由器，解决办法就是关闭这个功能或者将私有 MAC 地址加入白名单：

设置 → 无线局域网，点开 WiFi 名称的详细信息，关闭使用私有地址。

关闭前：

{{< image src="/images/hugo/fix-wifi-connection-failure-in-ios14/IMG_1610.PNG" title="关闭前" >}}

关闭后：

{{< image src="/images/hugo/fix-wifi-connection-failure-in-ios14/IMG_1611.PNG" title="关闭后" >}}

