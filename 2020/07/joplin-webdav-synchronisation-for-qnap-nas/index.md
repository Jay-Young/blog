# 威联通：将 Joplin 笔记同步到 NAS


Joplin 是一个免费的开源笔记应用。笔记使用 Markdown 格式，支持外部编辑器（比如 VS Code），支持全文搜索，支持端对端加密，支持 Evernote、Markdown 格式导入，支持 JEX 专有格式、Markdown、HTML、PDF 等多种格式导出，支持 Nextcloud、Dropbox、OneDrive、WebDAV 等多种方式同步（默认本地存储），支持全平台客户端和浏览器扩展剪藏。<sup>[[1]](https://joplinapp.org/)</sup>

<!--more-->

## 同步到 NAS

- 启用 Web 服务器

{{< mermaid >}}
graph LR;
A(控制台) --> B(应用服务)
B --> C(Web 服务器)
B --> D(WebDAV)
C --> E(启用 Web 服务器)
D --> F(勾选 WebDAV 权限和专用端口)
{{< /mermaid >}}

{{< image src="/images/hugo/build-application-archive-with-directory-lister/Snipaste_2020-06-25_18-58-43.webp" title="启用 Web 服务器" >}}

{{< image src="/images/hugo/Joplin-WebDAV-Synchronisation-for-QNAP-NAS/Snipaste_2020-07-19_13-00-13.webp" title="启用 WebDAV" >}}

- 启用共享文件夹的 WebDAV 权限

{{< mermaid >}}
graph LR;
A(控制台) --> B(权限)
B --> C(共享文件夹)
C --> D(编辑权限)
D --> E(权限类别: WebDAV)
E --> F(无限制, 勾选允许的用户)
{{< /mermaid >}}

{{< image src="/images/hugo/Joplin-WebDAV-Synchronisation-for-QNAP-NAS/Snipaste_2020-07-19_13-07-46.webp" title="设置权限" >}}

- Joplin 客户端设置（以 Windows 平台为例）

{{< mermaid >}}
graph LR;
A(工具菜单) --> B(打开选项)
B --> C(选择同步选项卡)
C --> D(同步目标设置为 WebDAV)
{{< /mermaid >}}

设置参考如下

```markdown
WebDAV URL: https://mydomain.com:5008/joplin
WebDAV 用户名: admin
WebDAV 密码: password
```

如果使用 HTTPS 连接，遇到了如下错误，查了项目 issue 说是自签名证书的问题，但是我明明用的是 Let's Encrypt 的免费证书。

```markdown
request to https://mydomain.com:5008/joplin/ failed, reason: unable to verify the first certificate (Code UNABLE_TO_VERIFY_LEAF_SIGNATURE)
```

解决方案是打开高级选项，勾选忽略 TLS 证书错误或者自定义 TLS 证书，搜了一圈没找到更完美的解决方法。

{{< image src="/images/hugo/Joplin-WebDAV-Synchronisation-for-QNAP-NAS/Snipaste_2020-07-19_13-27-23.webp" title="Joplin 客户端设置" >}}

## 同步到坚果云

除了 NAS，坚果云也同样支持 WebDAV 同步。

{{< mermaid >}}
graph LR;
A(账户信息) --> B(安全选项)
B --> C(添加应用)
C --> D(填写应用名字)
D --> E(生成密码)
{{< /mermaid >}}

Joplin 设置参考如下

```markdown
WebDAV URL: https://dav.jianguoyun.com/dav/
WebDAV 用户名: example@mail.com
WebDAV 密码: password
```

## WebDAV 备份

更改 WebDAV URL 时，请确保新位置具有与旧位置完全相同的内容（即将所有 Joplin 数据复制到新位置）。否则，如果新位置没有任何内容，Joplin 会认为您已删除所有数据，并将删除本地数据。因此，要更改 WebDAV URL，请按照以下步骤操作：

1. 备份 Joplin 数据，以防出现问题。例如，导出为 JEX 存档。
2. 最后一次同步来自 Joplin 客户端的所有最新数据（例如，来自桌面客户端）
3. 关闭 Joplin 客户端。
4. 在 WebDAV 服务中，将所有 Joplin 文件从旧位置复制到新位置。请确保复制所有目录，因为它包含您的图像和其他附件。比如`.resource`等隐藏文件夹。
5. 完成后，再次打开 Joplin 并更改 WebDAV URL。
6. 同步以验证一切是否正常工作。
7. 对于需要同步的所有其他 Joplin 客户端重复执行步骤 5 和 6。

## 已知问题

- 大于 10 MB 的资源当前在移动设备上不受支持，因为它们可能会使应用程序崩溃。
- 非字母字符（如中文或阿拉伯语）可能会在 Windows 上的终端中产生故障。这是当前 Windows 控制台的限制。

