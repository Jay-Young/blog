# 威联通：部署免费开源的协同办公套件 DzzOffice


DzzOffice 是一套开源办公套件，适用于企业、团队搭建自己的 类似“Google 企业应用套件”、“微软 Office365”的企业协同办公平台。[^1]

<!--more-->

## 简介

- DzzOffice 由多款开源办公应用组成，安装 DzzOffice 框架后，可根据需要从内部的应用市场进行选择和安装。应用能够单独使用，也能与其他多款应用组合使用。
- DzzOffice 能够结合企业微信、钉钉来进一步扩展移动办公与沟通协同能力，无论身处何地都能轻松协作。
- DzzOffice 专注通用型办公应用并开源免费发布，您能够放心的使用，或对其进行二次开发，在已有通用功能的基础上，开发或结合企业正在使用的行业/专业系统，来形成完整的行业软件解决方案。

官方网站: [http://dzzoffice.com/index.html](http://dzzoffice.com/index.html)

开源演示: [http://demo.dzz.cc](http://demo.dzz.cc)

项目下载: [https://gitee.com/zyx0814/dzzoffice/releases](https://gitee.com/zyx0814/dzzoffice/releases)

## 功能

{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-04-26.webp" title="功能" >}}

- **网盘**: 企业、团队文件集中管理。主要体现的功能是支持企业部门的组织架构建立共享目录，也支持组的方式灵活建立共享目录。支持文件标签，多- 版本，评论，详细的目录权限等协作功能。

- **文档**: 在线 Word 文档协作工具。前端做了一套模板管理，用于企业添加自己的常用文档模板，如空白合同。后端支持 office online server，onlyoffice，collaboraoffice 来实现文档预览与协同编辑。

- **表格**: 在线 Excel 协作工具。同上

- **演示文稿**: 在线 PPT 文档浏览、编辑工具。同上

- **记录**: 多人参与协作的记录本，主要体现协作记录内容。

- **新闻**: 文章系统，可用于企业新闻，通知等用途

- **通讯录**: 企业人员联系方式查询

- **文集**: 通过树形目录有序管理文档。支持 Markdown 编辑，支持导入导出 txt，epub、mobi、azw3

- **相册**: 企业，团队图片管理

- **任务板**: 任务管理、团队协作

- **讨论板**: 内部论坛设置

- **表单**: 表单，问卷工具

企业根据需要可以只使用一款工具，也可以多款工具组合使用。例如团队需要一个任务管理工具，可以只安装一个任务板，登陆系统会直接进入任务板工具，没有其他工具的干扰。如果多个工具组合使用，可以设置默认登陆到哪个工具里。

除了以上自己开发了一些工具，套件里还集成了大量的其他开源工具，如网盘里用到的在线压缩、解压，各类媒体文件预览，各类文档预览与编辑的支持，是各类开源程序的综合利用。

## 更新

1. 增加 云设置和管理 ，支持阿里云存储、七牛云存储、FTP/SFTP、本地磁盘等存储方式
2. 增加 用户资料管理 ，支持自定义用户资料项，资料审核、认证和审核
3. 修改应用市场应用在线安装方式，提高应用下载速度
4. 增加伪静态支持，可以通过应用“伪静态管理”灵活配置各个页面的伪静态规则
5. 机构和用户管理 优化添加部门管理员的体验
6. 导入导出用户功能优化调整
7. 部分页面移动端适配
8. 增加首次安装引导页，引导管理员首次能正确配置系统
9. 开放讨论板应用（可在应用市场内在线安装）
10. 开放任务板应用（可在应用市场内在线安装）
11. 其他功能完善、及 beta 版反馈问题的修复

## 安装

### 启用 Web 环境

{{< mermaid >}}
graph LR;
A(控制台) --> B(应用服务)
B --> C(Web 服务器)
B --> D(SQL 服务器)
C --> E(启用 Web 服务器)
D --> F(启用 SQL 服务器)
{{< /mermaid >}}

{{< image src="/images/hugo/build-application-archive-with-directory-lister/Snipaste_2020-06-25_18-58-43.webp" title="启用 Web 服务器" >}}

{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_15-01-17.webp" title="启用 SQL 服务器" >}}

### 部署程序

将最新项目下载解压到 Web 目录，然后打开安装地址 `http(s)://mydomain.com:port/dzzoffice`，按照安装指引一步步完成数据库、管理员设置即可。

威联通默认数据库用户名为 root，密码是 admin，如果不对可以在控制台的 SQL 服务器设置页面更改根密码。

{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-07-29.webp" title="开始安装" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-08-19.webp" title="环境检查" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-09-15.webp" title="权限检查" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-12-15.webp" title="数据库设置" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-13-35.webp" title="管理员设置" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-16-18.webp" title="安装成功" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-17-51.webp" title="登录界面" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-18-23.webp" title="初始安装指导页面" >}}
{{< image src="/images/hugo/DzzOffice-Installation-for-QNAP-NAS/Snipaste_2020-07-19_14-19-29.webp" title="应用市场" >}}

安装完成以后可以按照自己的需求安装应用和设置。

[^1]: [https://gitee.com/zyx0814/dzzoffice](https://gitee.com/zyx0814/dzzoffice)

