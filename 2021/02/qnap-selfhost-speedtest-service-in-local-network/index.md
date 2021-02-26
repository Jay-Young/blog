# 威联通：搭建 Speedtest 内网测速服务


闲来无事，给 `NAS` 装个内网测速服务。利用到的项目是 [speedtest](https://github.com/librespeed/speedtest)。

<!--more-->

## 安装过程

👉[官方安装指南](<https://github.com/librespeed/speedtest/wiki/Installation-(PHP)>)

首先参考 [这篇博文](https://blog.233so.com/2020/06/build-application-archive-with-directory-lister/#%E7%8E%AF%E5%A2%83%E9%9C%80%E6%B1%82) 开启 `Web` 服务器，并修改 `php.ini`，在最后一行加入 `extension = pdo_mysql.so` 以启用 `PDO` 模块。威联通已经自带项目所需要的 `Apache` 服务、`PHP` 服务和 `MariaDB` 等服务。

将项目下载下来，放到 `/share/Web` 目录，具体以 `NAS` 型号为准。

然后通过 `phpMyAdmin` 应用登录数据库管理后台新建一个数据库，命名为 `speedtest`，然后将项目 `results` 文件夹里面的 `telemetry_mysql.sql` 导入 `speedtest` 数据库。导入成功以后，就会看到 `speedtest` 数据库中出现 `speedtest_users` 数据表。

接着打开 `results` 文件夹里面的 `telemetry_settings.php`，配置数据库设置：

```php
$db_type = 'mysql';
$stats_password = '修改成你要设置的密码';
$enable_id_obfuscation = false; // 混淆测试 ID，保护隐私，根据自己需要是否设置为 true
$redact_ip_addresses = false; // 移除分享结果中的 IP 地址显示，保护隐私，根据自己需要是否设置为 true

$Sqlite_db_file = '../../speedtest_telemetry.sql';

$MySql_username = '你的数据库用户名';
$MySql_password = '你的数据库密码';
$MySql_hostname = 'localhost'; // 一般为 localhost 不用修改
$MySql_databasename = 'speedtest'; // 与你自己新建的数据库名字保持一致
$MySql_port = '3306';
```

项目根目录下面有很多 `example` 开头的首页模板文件，可以根据自己的需求将其重命名为 `index.html` 作为首页，不同的模板具有不同的样式和功能，可以尝试在浏览器都打开看看效果。

内网自己用的话选择单服务器 `example-singleServer-full.html` 完整功能模板或者 `example-singleServer-pretty.html` 不带分享功能美化模板。

## 汉化文本

项目默认都是英文的，可以自己修改。首页直接修改上面的模板文件里的内容即可。

测速数据统计页面 `results/stats.php` 也可以修改汉化。

分享结果的图片页面上的文字修改 `results/index.php`，

```php
$MBPS_TEXT = 'Mbps';
$MS_TEXT = 'ms';
$PING_TEXT = '延时';
$JIT_TEXT = '抖动';
$DL_TEXT = '下载';
$UL_TEXT = '上传';
$WATERMARK_TEXT = 'blog.233so.com';
```

默认的字体是 `OpenSans-Light` 和 `OpenSans-Semibold`，不包含中文，所以需要从电脑上复制一个支持中文显示的字体到 `results` 目录。如果不是 `ttf` 字体记得把字体后缀改成 `ttf`。

然后修改相应中文对应的字体设置项，比如如下标题文字都改成了 `sarasa-mono-sc-regular` 字体：

```php
$FONT_LABEL = tryFont('sarasa-mono-sc-regular');
$FONT_METER = tryFont('OpenSans-Light');
$FONT_MEASURE = tryFont('OpenSans-Semibold');
$FONT_ISP = tryFont('OpenSans-Semibold');
$FONT_TIMESTAMP = tryFont("OpenSans-Light");
$FONT_WATERMARK = tryFont('OpenSans-Light');
```

{{< image src="/images/hugo/qnap-selfhost-speedtest-service-in-local-network/result.webp" alt="分享结果" caption="分享结果" title="分享结果" width=100% >}}

|设置项|说明|
|:-|:-|
|$FONT_LABEL|对应项目标题文字|
|$FONT_METER|对应测试结果数字|
|$FONT_MEASURE|对应测试结果单位|
|$FONT_ISP|对应 ISP 信息文字|
|$FONT_TIMESTAMP|对应测试时间文字|
|$FONT_WATERMARK|对应右下角水印文字|

如果需要安卓端的测速应用来连接自己的服务器，可以通过 [speedtest-android](https://github.com/librespeed/speedtest-android) 项目自己配置编译一个。

