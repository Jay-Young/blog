# 迁移博客评论至 LeanCloud 国际版


LeanCloud 国内版老早就在通知将不再支持 `xxx.leancloud.cn` 的二级域名，需要自行绑定个人域名（需备案）[^1]。今天 10 月 1 日即是期限的最后一天，于是起了个早准备把国内版的评论数据迁移到国际版去。

<!--more-->

## 导出数据

LeanCloud 国内版和国际版之间支持数据导出导入，登入国内版，进入需要导出数据的项目，依次点击设置 → 数据导出，导出所有数据就去掉“限定导出数据起止日期”的勾选，最后点击导出。稍后去邮箱查收下载数据即可。

{{< admonition note "" false >}}

- 每天中午 12 点前可进行数据导出。点击导出数据后，我们会稍后发送数据文件到您的邮箱。
- 当限定日期后，仅导出 updatedAt 字段位于当前选定日期区间（东八区，包括起始日期点）的数据。
  {{< /admonition >}}

## 导入数据

国际版和国内版账号不通用，所以先注册国际版账号，新建应用，选择免费的开发版即可。

将国内版导出的数据包解压，包含了几个字段的 JSON 格式数据。大部分字段数据可能都是空的，使用 Valine 评论系统的一般\_User, Comment, Counter 这几个字段是有数据的，具体的情况可以在国内版的存储 → 结构化数据中查看。

进入国际版应用，依次点击存储 → 导入导出 → 数据导入，在数据文件中选择需要导入的 JSON 数据文件，检查 Class 名称是否与文件名一致，点击导入即可。全部导入完毕后，在国际版存储 → 结构化数据中可以查看相应字段的数据是否与国内版一致了。

## 重新部署云引擎

我使用的是 [https://github.com/DesertsP/Valine-Admin](https://github.com/DesertsP/Valine-Admin) 的 Valine 评论系统扩展项目。

详细部署教程可参考作者博客: [https://deserts.io/valine-admin-document](https://deserts.io/valine-admin-document) [^2]

有几个注意点：

1. 源码部署现在在运引擎部署界面选择 Git 部署，而不是之前的设置界面
2. 部署时不要忘记填写 master 分支
3. 独立域名绑定在项目设置界面的域名绑定
4. 我这边导入数据后，评论后台管理地址的用户名和密码与国内版一致，无需重新注册
5. 可以考虑在设置 → 安全中心中设置 Web 安全域名为自己的博客域名
6. 迁移后要注意在自己的博客项目设置中将原来国内版的应用 Keys 替换为国际版
7. 为更有效的使用定时任务唤醒，可以追加使用 [WakeLeanCloud
   ](https://github.com/blogimg/WakeLeanCloud) 项目 [^3]
8. 国际版使用的是 UTC+0 (GMT) 时区，注意与 UTC+8 (CST) 北京时间的换算

## 引用

[^1]: [https://leancloudblog.com/mandatory-domain-config](https://leancloudblog.com/mandatory-domain-config)
[^2]: [https://deserts.io/valine-admin-document](https://deserts.io/valine-admin-document)
[^3]: [https://www.antmoe.com/posts/ff6aef7b/index.html](https://www.antmoe.com/posts/ff6aef7b/index.html)

