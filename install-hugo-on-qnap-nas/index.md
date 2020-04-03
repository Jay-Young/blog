# Hugo 篇一：在威联通 NAS 上生成博客并部署 Pages 服务


{{< typeit >}}
Hugo 是一个用 Go 语言实现的静态博客系统生成工具。基于 Markdown 撰写博文，不改变你已有的习惯，拥有快速部署、简单易用、主题丰富、易扩展等特点。你可以在任何地方启动 Hugo，实现毫秒级渲染。
{{< /typeit >}}

## :(fa fa-comment-dots): 前言

静态博客系统有很多，为什么选择 Hugo 呢？

> - 独立二进制文件，免去各种复杂的环境配置，部署简单快速
> - 基于 Markdown 写作，学习成本低
> - 免费开源，渲染速度快，主题扩展丰富

{{< admonition info "说明" false >}}
本文基于以下软硬件系统测试，不能完全保证其他系统的兼容性。
- QNAP TS-453Bmini 2+8G 内存
- QTS 4.4.1.1216
- hugo_extended_0.67.1_Linux-64bit.tar.gz
{{< /admonition >}}

## :(fa fa-terminal): 安装

{{< admonition warning "警告" false >}}
任何基于实机的操作都有可能造成 QTS 系统无法挽回的错误，除非你很明确知道这条命令要做什么。
{{< /admonition >}}

从 [Hugo](https://github.com/gohugoio/hugo/releases/) 选择适合 TS-453Bmini 系统的 hugo_extended_0.67.1_Linux-64bit.tar.gz 下载到 NAS。

`tar -zxvf hugo_extended_0.67.1_Linux-64bit.tar.gz`解压得到 hugo 二进制文件。

将 hugo 复制到自己认为合适的目录，并以`chmod +x hugo`命令赋予可执行权限。

此时通过 hugo help 测试运行发现会报错
{{< admonition failure "错误" false >}}
`/lib/libstdc++.so.6: version `GLIBCXX_3.4.21' not found`
{{< /admonition >}}

查阅[相关资料](https://blog.csdn.net/phdsky/article/details/84104769/)后发现，需要将`/share/CACHEDEV1_DATA/.qpkg/CodexPack/usr/lib/x86_64-linux-gnu/libstdc++.so.6`软链接到`/lib/libstdc++.so.6`，并将 hugo 加入 PATH 实现全局运行。

```bash
ln -sf /share/CACHEDEV1_DATA/.qpkg/CodexPack/usr/lib/x86_64-linux-gnu/libstdc++.so.6 /lib/libstdc++.so.6
ln -sf /your-hugo-path/hugo /usr/local/bin/hugo
```

{{< admonition note "" false >}}
- `libstdc++.so.6` 需要安装 `CodexPack` 套件，这是多媒体管理的硬件加速转码用的，一般都会装的
- 替换`your-hugo-path`为你自己的 hugo 所在目录
{{< /admonition >}}

为避免长期运行失效，可以将上面的 shell 脚本加入开机启动和定时任务，具体请参考[另一篇博文](https://blog.233so.com/qnap-codeserver-self-host/)。

{{< admonition note "" false >}}
当然，你也可以选择我打包的 qpkg 安装包：[下载地址](https://www.lanzous.com/iaj4r4j/)，密码:233so
{{< /admonition >}}

## :(fa fa-play-circle): 使用

如果使用`hugo help`测试运行返回如下信息，则说明 Hugo 已经成功安装。

{{< admonition success "点击展开" true >}}
```bash
$ hugo help
hugo is the main command, used to build your Hugo site.

Hugo is a Fast and Flexible Static Site Generator
built with love by spf13 and friends in Go.

Complete documentation is available at https://gohugo.io/.

Usage:
  hugo [flags]
  hugo [command]

Available Commands:
  check       Contains some verification checks
  config      Print the site configuration
  convert     Convert your content to different formats
  env         Print Hugo version and environment info
  gen         A collection of several useful generators.
  help        Help about any command
  import      Import your site from others.
  list        Listing out various types of content
  new         Create new content for your site
  server      A high performance webserver
  version     Print the version number of Hugo

Flags:
  -b, --baseURL string         hostname (and path) to the root, e.g. https://spf13.com/
  -D, --buildDrafts            include content marked as draft
  -E, --buildExpired           include expired content
  -F, --buildFuture            include content with publishdate in the future
      --cacheDir string        filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/
      --cleanDestinationDir    remove files from destination not found in static directories
      --config string          config file (default is path/config.yaml|json|toml)
      --configDir string       config dir (default "config")
  -c, --contentDir string      filesystem path to content directory
      --debug                  debug output
  -d, --destination string     filesystem path to write files to
      --disableKinds strings   disable different kind of pages (home, RSS etc.)
      --enableGitInfo          add Git revision, date and author info to the pages
  -e, --environment string     build environment
      --forceSyncStatic        copy all files when static is changed.
      --gc                     enable to run some cleanup tasks (remove unused cache files) after the build
  -h, --help                   help for hugo
      --i18n-warnings          print missing translations
      --ignoreCache            ignores the cache directory
  -l, --layoutDir string       filesystem path to layout directory
      --log                    enable Logging
      --logFile string         log File path (if set, logging enabled automatically)
      --minify                 minify any supported output format (HTML, XML etc.)
      --noChmod                don't sync permission mode of files
      --noTimes                don't sync modification time of files
      --path-warnings          print warnings on duplicate target paths etc.
      --quiet                  build in quiet mode
      --renderToMemory         render to memory (only useful for benchmark testing)
  -s, --source string          filesystem path to read files relative from
      --templateMetrics        display metrics about template executions
      --templateMetricsHints   calculate some improvement hints when combined with --templateMetrics
  -t, --theme strings          themes to use (located in /themes/THEMENAME/)
      --themesDir string       filesystem path to themes directory
      --trace file             write trace to file (not useful in general)
  -v, --verbose                verbose output
      --verboseLog             verbose logging
  -w, --watch                  watch filesystem for changes and recreate as needed

Use "hugo [command] --help" for more information about a command.
```
{{< /admonition >}}

### :(fa fa-magic): 新建站点

在终端中执行依次执行以下命令

```bash
hugo new site /your-site-path/your-site-name
cd /your-site-path/your-site-name
ls
```

{{< admonition note "" false >}}
替换`your-site-path`和`your-site-name`为你自己的目录
{{< /admonition >}}

初始站点目录结构如下

```bash
your-site-name     你的站点
├─ archetypes      每一篇 markdown 博文的默认设置模板
├─ content         站点内容，未来我们攥写博文原稿都在这里
├─ data            存储网站的配置、数据文件
├─ layouts         存储用来渲染 content 目录下面内容的模版文件，一般使用主题对应的 layouts
├─ static          存储图片、js、css 等静态资源文件
├─ themes          主题样式，可以通过模板快速建立站点
└─ config.toml     站点全局配置文件
```

### :(fa fa-download): 安装主题

LoveIt 是一个简洁、优雅且高效的 Hugo 博客主题。

它的原型基于 LeaveIt 主题 和 KeepIt 主题。

LoveIt 主题的仓库是: https://github.com/dillonzq/LoveIt

你可以下载主题的 [最新版本 :(fa fa-file-archive): .zip 文件](https://github.com/dillonzq/LoveIt/releases/) 并且解压放到 themes 目录。

另外, 也可以直接把这个主题克隆到 themes 目录:

```bash
git clone -b master https://github.com/dillonzq/LoveIt.git themes/LoveIt
```

或者, 初始化你的项目目录为 git 仓库, 并且把主题仓库作为你的网站目录的子模块:

```bash
git init
git submodule -b master add https://github.com/dillonzq/LoveIt.git themes/LoveIt
```

### :(fa fa-edit): 创建第一篇文章

使用主题默认设置

```bash
cp -f themes/LoveIt/exampleSite/config.toml config.toml
cp -rf themes/LoveIt/exampleSite/static static
cp -rf themes/LoveIt/archetypes archetypes
```

将站点根目录下的`config.toml`中的第 10 行内容注释掉

```properties
baseURL = "https://example.com"
# [en, zh-cn, fr, ...] determines default content language
# [en, zh-cn, fr, ...] 设置默认的语言
defaultContentLanguage = "en"
# theme
# 主题
theme = "LoveIt"
# themes directory
# 主题目录
# themesDir = "../.."

# website title
# 网站标题
title = "LoveIt"
...
```

创建第一篇文章:

```bash
hugo new posts/first-post.md
```

用 markdown 编辑器打开 first-post.md 文件，显示如下信息:

```markdown
---
title: "First Post"
subtitle: ""
date: 2020-03-21T21:17:39+08:00
lastmod: 2020-03-21T21:17:39+08:00
draft: true
author: ""
authorLink: ""
description: ""
license: ""

tags: []
categories: []
hiddenFromHomePage: false

featuredImage: ""
featuredImagePreview: ""

toc: false
autoCollapseToc: true
math: false
lightgallery: true
linkToMarkdown: true
share:
  enable: true
comment: true
---
```

通过添加一些示例内容并修改文件开头的标题、作者、标签、分类等设置，你可以随意编辑文章。

{{< admonition note "" false >}}
- 如果你对比`themes/LoveIt/archetypes`目录下的`default.md`和创建的第一篇文章`first-post.md`，它们非常相像，因为文章就是以`default.md`为模板创建的
- 默认情况下, 所有文章和页面均作为草稿创建。如果想要渲染这些页面，请从元数据中删除属性 `draft: true`, 或者设置属性 `draft: false`
{{< /admonition >}}

在发布自己的文章之前，还需要一点点的设置：将第一篇文章的`draft`属性设置为`false`

### :(fa fa-server): 构建网站

当你准备好部署你的网站时，执行以下命令:

```bash
hugo
```

会生成一个`public`目录，其中包含你网站的所有静态内容和资源。现在可以将其部署在任何 Web 服务器上。

我们可以利用 vscode 和 Live Server 插件来实现本地部署测试。当你修改文章并用`hugo`命令重新部署后，页面会随着更改自动刷新。

vscode 打开 public 目录，安装 Live Server 插件，点击状态栏右下角的 go live 启动本地站点，在浏览器中输入`http://127.0.0.1:5500/`访问。

{{< figure src="https://i.loli.net/2020/03/21/L4ZHcNxepdg7vOG.png" title="站点运行效果" >}}

### :(fa fa-cloud-upload-alt): 发布到 Coding Pages

为什么选择 Coding Pages，而不是 Github Pages 呢？

> 因为 Coding Pages 是国内的服务，整体来说 Git 访问速度很很快，提供静态网站的服务器位于香港，也无需备案，想要套个 Cloudflare 的 CDN 也很方便。如果以后想要迁移到腾讯云也可以，顺便买个域名，申请个亚洲诚信的免费证书也是美滋滋的。而 Github 因为众所周知的原因，想要流畅访问一直是个痛点，但是可以作为备份仓库只是存储所有的静态资源文件。

首先在 https://coding.net 注册账号，并新建一个空白的代码托管项目，同时打开项目设置—功能开关—构建与部署。

然后在 QTS 系统上安装 Git: https://www.qnapclub.eu/en/qpkg/197

接下来在 public 目录进行 git 操作

设置你的用户名称与邮件地址，此后每次 Git 的提交都会使用这些信息。在终端输入一下命令即可设置你的用户信息。

```bash
git config --global user.name "你的名称"
git config --global user.email "你的邮箱"
```

例如你的 Coding 账户昵称叫『大黑』，用户信息配置为：『名称 – 大白』，『邮箱 – dabai@coding.net 』。当你推送代码到 Coding 仓库后，动态显示如下图：

{{< figure src="https://i.loli.net/2020/03/22/gRCm7v81YSAtIrL.png" title="用户信息" >}}

头像和『大黑』是 Coding 账户的用户头像和昵称，『大白』是配置的提交代码时的用户名称信息。

{{< admonition note "" false >}}
Git 配置的用户信息可以和 Coding 账户名称一致，也可以不一致，建议填写为 Coding 用户名和注册邮箱，以便更好的协作。
{{< / admonition >}}

设置让 Git 记住密码凭证

```bash
git config --global credential.helper store
```

创建本地仓库，执行```git init```后显示如下信息：

```
Initialized empty Git repository in X:/XXX/.git/
```

跟踪文件、提交文件并推送文件到远程仓库：

```bash
git add .
git commit -m "随便写点什么"
git remote add 项目名称 远程项目地址
git push 项目名称
```

{{< admonition note "" false >}}
更多详细的 Git 信息：[https://help.coding.net/docs/host/git/installation.html](https://help.coding.net/docs/host/git/installation.html/)
{{< /admonition >}}

输入 Coding 账户用户名和密码之后，如果没有显示错误信息就表示推送成功，可以通过`git status`查看是否`up to date`

最后去 Coding 项目的构建与部署—静态网站发布。具体可参阅 Coding 官方文档：[如何搭建静态网站](https://help.coding.net/docs/devops/cd/static-website.html/)

{{< admonition tip "" false >}}
网站内容可以通过 [Netlify](https://www.netlify.com/) 自动发布和托管 (了解有关[通过 Netlify 进行 HUGO 自动化部署](https://www.netlify.com/blog/2015/07/30/hosting-hugo-on-netlifyinsanely-fast-deploys/) 的更多信息)。或者，您可以使用 [AWS Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/), [Github pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/), [Render](https://gohugo.io/hosting-and-deployment/hosting-on-render/) 以及更多…
{{< /admonition >}}

## :(fa fa-feather-alt): 后记

折腾博客其实并不是最重要的，最重要的是你有写博客的动力，希望自己能够坚持下去。

本文部分内容引用来自：
- [https://hugoloveit.com/zh-cn/theme-documentation-basics](https://hugoloveit.com/zh-cn/theme-documentation-basics/)
- [https://help.coding.net/docs/host/git/installation.html](https://help.coding.net/docs/host/git/installation.html/)

{{< admonition info "说明" false >}}
本文首发于[我的博客](https://blog.233so.com/install-hugo-on-qnap-nas/)
{{< /admonition >}}
