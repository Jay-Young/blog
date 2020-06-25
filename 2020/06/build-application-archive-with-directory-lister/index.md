# 威联通：Directory Lister 搭建简单的软件库


最近整理了以前下载的一些软件安装包，想起来在 QNAP NAS 上做个 Web 端下载目录站，就类似 everything 那种一个简单的目录列出的吧。看中了最简单的 Directory Lister <sup>[[1]](https://github.com/DirectoryLister/DirectoryLister)</sup>, 下载源码到 Web 目录即可使用。

<!--more-->

## 功能简介

- **安装简单** 一分钟即可上手。
- **亮色/暗色主题** 根据个人需求定制。
- **自定义排序** 自由展示文件/文件夹的排列顺序。
- **搜索功能** 快速便捷定位文件位置。
- **哈希校验** 提供 MD5, SHA1, SHA256 三种哈希值校验。
- **Readme 文件渲染** 支持直接渲染 README 文件内容展示。
- **压缩下载** 一键压缩下载整个文件夹。
- **多语言支持** 支持 14 种语言切换。

## 环境需求

- 启用 Web 服务器
  - 控制台 → 应用服务 → Web 服务器，启用 Web 服务器，根据需求修改端口和是否启用 HTTPS
    {{< image src="/images/hugo/build-application-archive-with-directory-lister/Snipaste_2020-06-25_18-58-43.png" title="" >}}
- PHP 版本 >= 7.2
  - 开启压缩下载功能，需要启用 Zip 扩展
  - 开启 Readme 文件渲染功能，需要启用 DOM 和 Fileinfo 扩展

目前我使用的 QTS 4.4.2 系统默认安装的 PHP 版本是 7.3.7, 默认开启了以上所需的三个扩展。

SSH 登录后使用下面的命令分别可以查看当前 QTS 系统的 PHP 版本和安装的扩展：

```bash
/usr/local/apache/bin/php -version
```

```bash
/usr/local/apache/bin/php -m
```

或者创建一个 test.php 扔到 Web 根目录下，然后浏览器访问 ip:port/test.php 查看：

```php
<?php
 echo PHP_VERSION;
 echo "<br>";
 if (extension_loaded('zip'))
 {
  echo "zip 扩展已安装<br>";
 }
 if (extension_loaded('dom'))
 {
  echo "dom 扩展已安装<br>";
 }
 if (extension_loaded('fileinfo'))
 {
  echo "fileinfo 扩展已安装";
 }
?>
```

## 安装配置

1. 从[官网](https://www.directorylister.com/)下载压缩包
2. 解压到 NAS 的 Web 目录

### 配置文件

1. 复制 `.env.example` 文件为 `.env`
2. 编辑 `.env` 文件修改配置变量

```ini
; 是否开启 debug 模式，便于出错时查看错误信息定位问题
APP_DEBUG=false
; 设置显示语言，语言文件位于 app/translations 目录下
APP_LANGUAGE=en
; 是否开启暗色主题
DARK_MODE=false
; 是否直接渲染 Readme 文件
DISPLAY_READMES=true
; Readme 文件渲染时是否在页面顶部
READMES_FIRST=false
; 是否开启压缩下载
ZIP_DOWNLOADS=true
; 是否启用 GA 分析，接受字符串形式 ID
GOOGLE_ANALYTICS_ID=false
; 是否启用 MA 分析，接受字符串形式 URL
MATOMO_ANALYTICS_URL=false
; 是否启用 MA 分析，接受字符串形式 ID
MATOMO_ANALYTICS_ID=false
; 自定义文件/文件夹排序
; 默认值 type, 其他可选 natural, name, accessed, changed, modified, 自定义函数
; 自定义函数 \DI\value() 接受两个参数 \SplFileInfo 对象
; 例如：
; 'sort_order' => \DI\value(
;     function (SplFileInfo $file1, SplFileInfo $file2) {
;         return strcmp($file1->getRealPath(), $file2->getRealPath());
;     })
; );
SORT_ORDER=type
; 是否反转排序
REVERSE_SORT=false
; 是否隐藏特殊文件/文件夹，比如 index.php 和 app 文件夹
HIDE_APP_FILES=true
; 是否隐藏版本控制相关文件/文件夹，比如 Git 和 Mercurial
HIDE_VCS_FILES=true
; 设置时间格式
; 完整格式化变量参考：https://www.php.net/manual/en/function.date.php#refsect1-function.date-parameters
DATE_FORMAT="Y-m-d H:i:s"
; 设置时区
; 完整 PHP 时区列表：https://www.w3school.com.cn/php/php_ref_timezones.asp
TIMEZONE="UTC"
; 设置可被 HASH 文件大小的上限（字节，byte），防止访问大文件超时错误
; 接受 0 - 9223372036854775807 的整数
MAX_HASH_SIZE=1000000000
```

### app.php

该配置文件位于 `app/config/app.php`，目测 `.env` 配置的优先级高于 `app.php`。两者配置选项基本相同，只是后者可以指定隐藏哪些文件。

```ini
; 指定首页标题
'home_text' => Helpers::env('HOME_TEXT', "Home"),
; 通过文件定义隐藏文件列表，可选值为文件路径
; 默认值 .hidden, 即在根目录创建 .hidden 文件来列出那些文件需要被隐藏
'hidden_files_list' => Helpers::env('HIDDEN_FILES_LIST', '.hidden')
; 需要隐藏文件的列表，支持通配符
'hidden_files' => [
; 完全匹配根目录下 somefile.txt 文件
  'somefile.txt',
; 匹配根目录下名为 README 的任意文件
  'README.*',
; 匹配 foo 目录下的所有文件
  'foo/*',
; 匹配根目录下 schema.yml 或者 schema.yaml 两个文件
  'schema.{ya?ml}',
; 匹配任意目录下的任意 jpg 图片文件
  '**/*.jpg',
]
```

### 缓存配置

该配置文件位于 `app/config/cache.php`，用于控制缓存的类型和过期时间等。

讲两个主要的配置，其他可根据需求来改：

```ini
; 设置缓存类型，默认值 file, 设置为 array 禁用缓存
'cache_driver' => Helpers::env('CACHE_DRIVER', 'file')
; 设置缓存过期时间，默认值 0 为永不过期，需要强制刷新页面才会更新新增内容
; 可以自定义一个合适的时间，单位为秒，比如 7200 (2小时)
'cache_lifetime' => Helpers::env('CACHE_LIFETIME', 0)
```

### 图标配置

该配置文件位于 `app/config/icon.php`，用于配置指定文件类型的显示图标。默认图标由 Font Awesome 5 提供。

默认的配置有些是不正确的，比如 :(fab fa-windows): 图标 `fas fa-window` 应为 `fab fa-windows`，可以根据实际情况调整。当然也可以使用其他图标库，比如阿里巴巴的 iconfront <sup>[[2]](https://www.iconfont.cn/collections/index)</sup>。

```ini
return [
  // 图片
  'jpg' => 'fas fa-image',
  'png' => 'fas fa-image',

  // 数据
  'json' => 'fas fa-file-alt',
  'yaml' => 'fas fa-file-alt',

  // 代码
  'css' => 'fab fab fa-css3',
  'html' => 'fab fa-html5',
  'php' => 'fab fa-php',

  // etc...
```

## 存在问题

目前无法新标签页打开链接，想要打开 README 说明文件里的链接很蛋疼，需要使用 ctrl + 单击 或者鼠标中键等方式。根据 issue <sup>[[3]](https://github.com/DirectoryLister/DirectoryLister/issues/361#issuecomment-617969935)</sup>，项目组好像也没打算改进这个功能。

参考资料：[https://github.com/DirectoryLister/DirectoryLister/wiki](https://github.com/DirectoryLister/DirectoryLister/wiki)

