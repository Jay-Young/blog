# Windows 10 中的“使用技巧”入门


今天终于收到了 2020 年 5 月 27 日发布的 Windows 10 版本 2004 更新，看来微软已经解决了部分软硬件兼容问题又开始新一批推送了:dog:。更新完毕重启首先弹了一个“使用技巧”的应用出来，好像是官方做的让用户熟悉 Windows 10 新增功能和技巧的。网上搜了下，这个应用几经更新，似乎越来越简单，以前还有很多介绍基础性功能的内容。

<!--more-->

## 官方介绍

Windows 10 中附带的“使用技巧”应用在 Windows 中的精彩应用会让你大开眼界。若要查找该应用，请在设备上按“打开‘使用技巧’应用”按钮或选择“开始”菜单 :(fab fa-windows): >“使用技巧 :(fas fa-lightbulb):”。然后在搜索框中键入“Windows”，或选择“浏览所有使用技巧”以查看有关其他功能的使用技巧。也可以在 Web 上转到 [Microsoft 使用技巧](https://www.microsoft.com/tips)。[^1]

{{< image src="/images/hugo/windows-10-get-started-with-tips/Tips.webp" alt="使用技巧" caption="使用技巧" title="使用技巧" width=90% >}}

如果你的 Windows 是其他版本或者卸载了此应用，可以从 [Microsoft Store](https://www.microsoft.com/store/productId/9WZDNCRDTBJJ) 免费下载“使用技巧”。

<a class="btn btn-primary managed-link content-action-link c-button f-primary x-hidden-focus" data-content-id="" data-content-type="" href="ms-get-started://" managed-link="" target="_self" tabindex="0" data-bi-name="content-action-link" role="button">打开“使用技巧”应用</a>

<style>
.btn{
  font-family: Segoe UI,SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
list-style: none;
list-style-type: disc;
box-sizing: inherit;
text-decoration: none;
font-size: 15px;
max-width: 374px;
min-width: 120px;
padding: 9px 12px 10px;
margin-top: 12px;
display: inline-block;
text-align: center;
line-height: 1;
font-weight: 600;
box-shadow: 0 4px 8px 0 transparent;
cursor: pointer;
overflow: hidden;
transition: all .2s ease-in-out;
vertical-align: bottom;
white-space: nowrap;
position: relative;
border: 2px solid transparent;
outline: 0;
color: #fff !important;
background-color: #0067b8;
}
</style>

## 一些功能技巧

- 如果在屏幕上难以发现指针，请将其放大或更改颜色。 选择“开始”:(fab fa-windows):菜单 >“设置”:(fas fa-cog): >“轻松使用” >“鼠标指针”:(fas fa-mouse-pointer):。
- 文本光标指示器向你的文本光标添加了颜色闪烁，让你更容易在海量文本中找到它。 要将它打开并更改其大小和颜色，请转到“开始”:(fab fa-windows): >“设置”:(fas fa-cog): >“轻松访问” >“文本光标”:(fas fa-i-cursor):。
- 按 Windows 徽标键 :(fab fa-windows): + Shift + S 以打开截图栏，然后将光标拖动到要捕获的区域。 截图区域将保存到剪贴板。
- “你的手机”应用可帮助你在家中工作时保持工作效率。 将 Android 手机链接到电脑，以便在手机在另一个房间充电的同时回复文本、共享照片、打电话等等。 此外，使用一体式 Office 应用（iPhone 上也可用），随时随地保持工作效率。

{{< admonition note "" false >}}
“你的手机”应用目前国区不可用，可以切换到港区。
{{< /admonition >}}

- 反正小娜国区已经死了，那么一行命令卸载之。[^2] 管理员权限运行 PowerShell：

```powershell
Get-AppxPackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage
```

- 修改注册表开启 Windows 10 硬件加速 GPU 调度提高中低端显卡性能，需要 N 卡驱动 451.48 及以上版本、A 卡驱动 2020 20.5.1 Beta 及以上版本。[^3]

```markdown
计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers
```

- 在右侧找到 `HwSchMode` 选项将默认键值由 `1` 修改为 `2`，其中 1 代表关闭硬件加速 GPU 调度、2 代表开启 GPU 调度。若右侧没有这个选项可以右键点击空白处选择新建 `DWORD32` 位值将其重命名为 `HwSchMode` 然后再修改键值。

- 修改完成后请重启系统，重启后转到系统设置应用---系统---显示--图形设置---开启硬件加速 GPU 调度功能。注意开启调度功能后需要再次重启系统才能使该选项生效，同理如需关闭的话需要在关闭后重启系统使之生效等。

{{< image src="/images/hugo/windows-10-get-started-with-tips/Snipaste_2020-09-13_16-43-09.webp" alt="GPU 调度" caption="GPU 调度" title="GPU 调度" width=100% >}}

## 引用

[^1]: [https://support.microsoft.com/zh-cn/help/4027049/windows-10-get-started-with-tips](https://support.microsoft.com/zh-cn/help/4027049/windows-10-get-started-with-tips)
[^2]: [https://www.landiannews.com/archives/78330.html](https://www.landiannews.com/archives/78330.html)
[^3]: [https://www.landiannews.com/archives/76665.html](https://www.landiannews.com/archives/76665.html)

