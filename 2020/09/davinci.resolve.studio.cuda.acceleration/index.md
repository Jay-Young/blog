# 达芬奇中开启CUDA加速及硬解H.264/H.265


以 DaVinci Resolve Studio 16.2.6.005 为例，开启 CUDA 和硬件加速解码 H.264/H.265。

左上角菜单栏或者默认快捷键 `CTRL+,` 打开偏好设置

{{< image src="/images/hugo/DaVinci.Resolve.Studio.CUDA.Acceleration/Snipaste_2020-09-04_05-11-29.png" title="" >}}

内存和 GPU 页面，GPU 处理模式选择 CUDA（苏妈的显卡选 OpenCL），GPU 选择模式选择手动，勾选需要使用的显卡（多显卡用户注意）。

{{< image src="/images/hugo/DaVinci.Resolve.Studio.CUDA.Acceleration/Snipaste_2020-09-04_03-42-36.png" title="" >}}

切换到解码选项页面，勾选使用硬解加速解码 H.264/H.265、NVIDIA、英特尔快速同步，后两者分别是老黄的独显加速和蓝厂的核显加速，猜测如果是苏妈的显卡或许会有不一样的选项。

{{< image src="/images/hugo/DaVinci.Resolve.Studio.CUDA.Acceleration/Snipaste_2020-09-04_04-52-47.png" title="" >}}

{{< admonition "note" "" false >}}
硬解加速功能只有需要付费的 Studio 版本拥有，免费版本无法使用，请前往官网查阅经销商购买正版，零售价￥ 2600
{{< /admonition >}}

