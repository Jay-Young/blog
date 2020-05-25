# 威联通：定时任务


`crontab` 是 `UNIX` / `Linux` 系统用来执行周期性任务的命令。 `crond` 命令每分钟会检查是否有要执行的作业，如果有要执行的工作便会自动执行该工作，这类作业一般称为 `cronjob` 。

<!--more-->

## 基本语法

```bash
crontab [ -u user ] { -l | -r | -e }
```

- `-u user` : 设定指定 `user` 的 `cronjob`, 如果不指定的话，就是表示设定当前用户的
- `-e` : 编辑 `crontab` 配置, 在威联通 `NAS` 中不能使用这种方式，因为重启之后会丢失。
- `-r` : 删除所有 `cronjob`, 谨慎使用，会把系统任务都删除
- `-l` : 列出所有 `cronjob`

## 编辑任务

想要永久保存自定义任务，应当将任务写入 `/etc/config/crontab` 文件

比如 :

```bash
echo "1 4 * * * /share/custom/scripts/custom1.sh" >> /etc/config/crontab
```

或者直接使用文本编辑器打开 `/etc/config/crontab` 文件直接写入 :

```bash
1 4 * * * /share/custom/scripts/custom1.sh
```

上面任务配置表示在每天凌晨 4 点 1 分时自动执行后面的 `custom1.sh` 脚本

新创建的 `cronjob` 不会马上执行，至少要过 2 分钟后才可以，当然你可以重启 `cron` 来马上执行

```bash
crontab /etc/config/crontab && /etc/init.d/crond.sh restart
```

{{< admonition note "" false >}}
不要忘记给需要周期性执行的程序赋予可执行权限 :
`chmod +x custom1.sh`
{{< /admonition >}}

删除指定 `cronjob` :

```bash
sed -i "\|/share/custom/scripts/custom1.sh|d" /etc/config/crontab
```

## 格式说明

```bash
f1 f2 f3 f4 f5 program
```

- 其中 `f1` 是表示分钟, `f2` 表示小时, `f3` 表示一个月份中的第几日, `f4` 表示月份, `f5` 表示一个星期中的第几天。 `program` 表示要执行的程序。
- 当 `f1` 为 `*` 时表示每分钟都要执行 `program`, `f2` 为 `*` 时表示每小时都要执行程序，其馀类推
- 当 `f1` 为 `a-b` 时表示从第 `a` 分钟到第 `b` 分钟这段时间内要执行, `f2` 为 `a-b` 时表示从第 `a` 到第 `b` 小时都要执行，其馀类推
- 当 `f1` 为 `*/n` 时表示每 `n` 分钟个时间间隔执行一次, `f2` 为 `*/n` 表示每 `n` 小时个时间间隔执行一次，其馀类推
- 当 `f1` 为 `a, b, c,...` 时表示第 `a, b, c,...` 分钟要执行, `f2` 为 `a, b, c,...` 时表示第 `a, b, c...`个小时要执行，其余类推

```markdown
*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- 星期中星期几 (0 - 7) (星期天 为0)
|    |    |    +---------- 月份 (1 - 12)
|    |    +--------------- 一个月中的第几天 (1 - 31)
|    +-------------------- 小时 (0 - 23)
+------------------------- 分钟 (0 - 59)
```

## 引用来源

- <https://wiki.qnap.com/wiki/Add_items_to_crontab?setlang=zh>
- <https://www.runoob.com/linux/linux-comm-crontab.html>

