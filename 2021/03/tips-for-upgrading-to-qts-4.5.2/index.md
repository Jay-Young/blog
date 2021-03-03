# 威联通：升级 QTS 4.5.2 踩坑记


最近突然想起来，我的 NAS 应用很久都没收到更新了。按照威联通的更新频率不应该，于是去官网的 App Center 看了下，发现最新版本的应用已经屏蔽了 QTS 4.4 系统。手动下载安装是可以，但是在 NAS 的 App Center 上是不会检查到更新的。距离上一次升级 QTS 系统差不多快一年了，于是心血来潮就升级了。

<!--more-->

## 备份资料

升级之前还是要备份好重要资料和 NAS 设置。威联通的 NAS 每次重启会清空 hosts，建议修改过的备份一下。还有手动设置的符号链接可能会失效，建议升级完后重新设置。目前看手动设置的 crontab 任务不会被清空。

{{< image src="/images/hugo/tips-for-upgrading-to-qts-4.5.2/Snipaste_2021-03-03_20-21-55.webp" alt="备份设置" caption="备份设置" title="备份设置" width=100% >}}

## 升级系统

不使用在线更新，从官网上下载最新的固件更新，避免网络问题带来的更新失败。威联通的系统更新重启 15-30 分钟是很正常的时长，所以耐心等待即可，具体时间的长短由装的应用数量多少决定。

{{< image src="/images/hugo/tips-for-upgrading-to-qts-4.5.2/Snipaste_2021-03-03_20-27-18.webp" alt="升级系统" caption="升级系统" title="升级系统" width=100% >}}

## 注意事项

升级后，默认的管理员登录 SSH 每次会开启新的所谓 Console Management 界面，按 Q 则退出回到正常的传统 shell 界面。

如果不需要这个功能，可以在控制台关闭。

也可以编辑 `/etc/profile` 修改，注释下面一行内容。可以搜索 `qts-console-mgmt` 关键词找到，不过不建议这样修改。

```shell
[[ "admin" = "$USER" ]] && [[ "TRUE" == "$(getcfg -f /etc/config/uLinux.conf -d TRUE 'Console Mgmt' 'Auto Launch')" ]] && /sbin/qts-console-mgmt -f
```

{{< image src="/images/hugo/tips-for-upgrading-to-qts-4.5.2/Snipaste_2021-03-03_20-31-01.webp" alt="Console Management 界面" caption="Console Management 界面" title="Console Management 界面" width=100% >}}

{{< image src="/images/hugo/tips-for-upgrading-to-qts-4.5.2/Snipaste_2021-03-03_20-32-15.webp" alt="关闭 Console Management" caption="关闭 Console Management" title="关闭 Console Management" width=100% >}}

从 4.5.1 之后，QTS 对没有数字签名的应用检查更加严格。我手上这台 453Bmini 所有没有数字签名的应用都直接被禁用了，手动启用后也还是会被禁用。简单测试了下，只要我不用浏览器登录 WEB 管理界面，这些应用就不会被禁用。后来联系了威联通的工程师，排查了考虑可能是 App Center 设置的允许在没有有效数字签名的情况下安装程序没有勾选（我记得以前一直是不勾选，而且这个好像也只影响手动安装应用）或者 Malware Remover 的扫描任务引起的。工程师把这两个都设置好，观察了一段时间，后来确实没有再发现应用被禁用，这件事就算告一段落了。

---

相关链接：

1. [reddit 论坛关于 Console Management 的讨论](https://www.reddit.com/r/qnap/comments/jcj4iu/howto_disable_new_console_management_autostart/)
2. [qnap 论坛关于 Console Management 的讨论](https://forum.qnap.com/viewtopic.php?f=142&t=157400&sid=cf9d3051e1d5332882e5e8d48c763149)
3. [reddit 论坛关于第三方应用被禁用的讨论](https://www.reddit.com/r/qnap/comments/jcanha/qts_451_broke_all_my_3rd_party_apps/)
4. [emby 论坛关于未签名应用的讨论](https://emby.media/community/index.php?/topic/90965-unsigned-app-error/)

