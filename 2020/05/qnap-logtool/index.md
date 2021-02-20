# 威联通：log_tool 命令


最近在解包威联通官方应用的时候，发现了一个命令 `log_tool`， 可以用来输出事件日志到 `Web` 界面，构建 `QPKG` 应用的时候可以派上用场。

基本用法 :

```bash
log_tool [-t --type [0-2]] [-a --append MSG]
```

```markdown
-t, --type [0-2] 指定日志类型，0 : 消息, 1 : 警告, 2 : 错误, 默认值 : 0
-a --append MSG 输出消息, MSG 为消息内容
```

其他选项 :

```markdown
-T, --time TIMESTAMP 指定记录时间
-u, --user USER 指定来源用户
-p, --ip IP 指定来源 IP
-m, --comp NAME 指定设备名称
-x, --msgid MSGID 指定消息 ID
-A, --app_id APPID 指定来源应用 ID
-N, --app_name APP Name 指定来源应用名称
-C, --category_id category ID 指定消息分类 ID
-G, --category category 指定消息分类
```

更多用法可以通过 `log_tool [-h --help]` 帮助命令查看

```bash
log_tool -t 1 -N "myapp" -G "status" -a "this is a test message"
```

在 `Web` 管理界面显示结果如下 :

{{< image src="/images/hugo/qnap-logtool/Snipaste_2020-05-26_15-25-32.webp" title="系统事件日志" >}}

