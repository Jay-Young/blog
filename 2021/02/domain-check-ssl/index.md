# 威联通：域名证书有效性检查脚本


鉴于 NAS 的解析指向本地局域网，所以需要在本地搭一个检测域名证书有效期并开启微信推送的服务，防止证书自动续期出问题导致证书过期。

<!--more-->

自动申请并安装证书可以参考另一篇博文 [免费申请 Let's Encrypt 泛域名证书](/2020/05/apply-lets-encrypt-ca/)。

找了个现成的项目 [CheckSSL](https://github.com/SukkaW/CheckSSL)，稍微修改下，并接入了威联通的系统日志推送和企业微信的消息推送服务。[^1]

## 效果预览

{{< image src="/images/hugo/domain-check-ssl/message-pushed.webp" alt="效果预览" caption="效果预览" title="效果预览" width=100% >}}

首先，注册 [企业微信](https://work.weixin.qq.com/) 并在应用管理里自建一个应用。

{{< admonition tip "注意" false >}}
下面提供的脚本，注意根据实际情况修改相应的脚本目录、企业 ID、应用密钥，还有根据推送模板改变其中 `touser`、`agentid` 等内容的具体值。
{{< /admonition >}}

使用方法：

```shell
chmod +x checker.sh
echo "0 1 * * * ./checker.sh qnap.233so.com" >> /etc/config/crontab
crontab /etc/config/crontab && /etc/init.d/crond.sh restart
```

根据自己的需求更改定时任务运行的时间。

## `checker.sh` 脚本

```shell
#!/bin/sh
chmod +x /opt/sslstatus/runcheck.sh /opt/sslstatus/token.sh

# 获取鉴权调用者身份的登录凭证 ACCESS_TOKEN
if [ ! -f /opt/sslstatus/*.token ];then
    /opt/sslstatus/token.sh
elif [ $(expr $(date +%s) - $(basename /opt/sslstatus/*.token .token)) -gt 7200 ];then
    rm -f /opt/sslstatus/*.token
    /opt/sslstatus/token.sh
fi

mkdir /opt/sslstatus/tmp/api -p

for i in $@
do
    /opt/sslstatus/runcheck.sh ${i}
done

echo '[' > /opt/sslstatus/tmp/api/ct.json

for i in $@
do
    cat /opt/sslstatus/tmp/${i}.json >> /opt/sslstatus/tmp/api/ct.json
done

sed -i '$d' /opt/sslstatus/tmp/api/ct.json

echo '}' >> /opt/sslstatus/tmp/api/ct.json
echo ']' >> /opt/sslstatus/tmp/api/ct.json

sed -i ':label;N;s/\n/ /;b label' /opt/sslstatus/tmp/api/ct.json

sed -i "s|\" \"||g" /opt/sslstatus/tmp/api/ct.json
sed -i "s|\"\: \"|\"\:\"|g" /opt/sslstatus/tmp/api/ct.json
sed -i "s|\"\, \"|\"\,\"|g" /opt/sslstatus/tmp/api/ct.json
sed -i "s|\" }, { \"|\"},{\"|g" /opt/sslstatus/tmp/api/ct.json

mkdir /opt/sslstatus/output -p
cp -rf /opt/sslstatus/tmp/api/ct.json /opt/sslstatus/output/ct.json

rm -rf /opt/sslstatus/tmp
```

## `runcheck.sh` 脚本

推送消息内容的模板可以参考官方文档：[发送应用消息](https://work.weixin.qq.com/api/doc/90000/90135/90236)。从最简单的文本，到图片和语音都可以随意选择，根据自己的喜好调整即可。

关于威联通的系统日志推送命令 `log_tool` 的用法可以参考我的另一篇博文 [威联通：log_tool 命令](/2020/05/qnap-logtool/)。

```shell
#!/bin/sh
mkdir /opt/sslstatus/tmp -p

curl https://${1} -k -v -s -o /dev/null 2>/opt/sslstatus/tmp/ca.info

cat /opt/sslstatus/tmp/ca.info | grep 'start date: ' >/opt/sslstatus/tmp/${1}.info
cat /opt/sslstatus/tmp/ca.info | grep 'expire date: ' >>/opt/sslstatus/tmp/${1}.info
cat /opt/sslstatus/tmp/ca.info | grep 'issuer: ' >>/opt/sslstatus/tmp/${1}.info
cat /opt/sslstatus/tmp/ca.info | grep 'SSL certificate verify' >>/opt/sslstatus/tmp/${1}.info
cat /opt/sslstatus/tmp/ca.info | grep 'subject: ' >>/opt/sslstatus/tmp/${1}.info

sed -i 's|\* \t start date: ||g' /opt/sslstatus/tmp/${1}.info
sed -i 's|\* \t expire date: ||g' /opt/sslstatus/tmp/${1}.info
sed -i 's|\* \t issuer: ||g' /opt/sslstatus/tmp/${1}.info
sed -i 's|\* \t SSL certificate verify ||g' /opt/sslstatus/tmp/${1}.info
sed -i 's|\* \t subject: ||g' /opt/sslstatus/tmp/${1}.info

start=$(sed -n '1p' /opt/sslstatus/tmp/${1}.info)
expire=$(sed -n '2p' /opt/sslstatus/tmp/${1}.info)
issuer=$(sed -n '3p' /opt/sslstatus/tmp/${1}.info)
status=$(sed -n '4p' /opt/sslstatus/tmp/${1}.info)
subject=$(sed -n '5p' /opt/sslstatus/tmp/${1}.info)

rm -f /opt/sslstatus/tmp/ca.info
rm -f /opt/sslstatus/tmp/${1}.info

DATE="$(echo $(date '+%Y-%m-%d %H:%M:%S'))"
WechatDate=$(date '+%Y年%m月%d日%H时%M分%S秒')

nowstamp="$(date -d "$DATE" +%s)"
expirestamp="$(date -d "$expire" +%s)"
expireday=$(expr $((expirestamp - nowstamp)) / 86400)

echo '{' >/opt/sslstatus/tmp/${1}.json
echo '"domain": "'${1}'",' >>/opt/sslstatus/tmp/${1}.json
echo '"subject": "'$subject'",' >>/opt/sslstatus/tmp/${1}.json
echo '"start": "'$start'",' >>/opt/sslstatus/tmp/${1}.json
echo '"expire": "'$expire'",' >>/opt/sslstatus/tmp/${1}.json
echo '"issuer": "'$issuer'",' >>/opt/sslstatus/tmp/${1}.json

domain=${1}

# 读取保存在本地文件中 ACCESS_TOKEN
ACCESS_TOKEN=`cat /opt/sslstatus/*.token`

# 定义出现错误、证书过期、证书即将过期三种状态的消息推送函数，请自行调整微信推送模板及其内容
errorMsg() {
    log_tool -t 2 -N "SSL Status" -G "expireday" -a "${1} SSL certificate check error, will check next cron schedule."
    curl "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$ACCESS_TOKEN" \
        -H 'Content-Type: application/json' \
        -d '
        {
            "touser": "@all",
            "msgtype": "news",
            "agentid": 1,
            "news": {
                "articles": [
                    {
                        "title": "域名证书检查错误",
                        "description": "'$WechatDate'：'$domain' 域名证书检查发生错误，请检查是否网络问题。",
                        "url": "https://qnap.233so.com/apps/sslstatus",
                        "picurl": "https://cdn.jsdelivr.net/gh/Jay-Young/jay-young.github.io@master/images/hugo/friend-link-shortcodes-for-hugo-loveit/Konachan.com-304807.webp"
                    }
                ]
            }
        }'
}

expiredMsg() {
    log_tool -t 2 -N "SSL Status" -G "expireday" -a "${1} SSL certificate has expired."
    curl "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$ACCESS_TOKEN" \
        -H 'Content-Type: application/json' \
        -d '
        {
            "touser": "@all",
            "msgtype": "news",
            "agentid": 1,
            "news": {
                "articles": [
                    {
                        "title": "域名证书已经过期",
                        "description": "'$WechatDate'：'$domain' 域名证书已经过期，请立即更新证书，避免访问错误。",
                        "url": "https://qnap.233so.com/apps/sslstatus",
                        "picurl": "https://cdn.jsdelivr.net/gh/Jay-Young/jay-young.github.io@master/images/hugo/friend-link-shortcodes-for-hugo-loveit/Konachan.com-304807.webp"
                    }
                ]
            }
        }'
}

warningMsg() {
    log_tool -t 1 -N "SSL Status" -G "expireday" -a "${1} SSL certificate will expire in less than $expireday days."
    curl "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=$ACCESS_TOKEN" \
        -H 'Content-Type: application/json' \
        -d '
        {
            "touser": "@all",
            "msgtype": "news",
            "agentid": 1,
            "news": {
                "articles": [
                    {
                        "title": "域名证书即将过期",
                        "description": "'$WechatDate'：'$domain' 域名证书有效期不足 '$expireday' 天，请注意及时更新证书。",
                        "url": "https://qnap.233so.com/apps/sslstatus",
                        "picurl": "https://cdn.jsdelivr.net/gh/Jay-Young/jay-young.github.io@master/images/hugo/friend-link-shortcodes-for-hugo-loveit/Konachan.com-304807.webp"
                    }
                ]
            }
        }'
}

if [ "$expire" = '' ]; then
    errorMsg
    echo '"status": "Invalid",' >>/opt/sslstatus/tmp/${1}.json
    echo '"statuscolor": "error",' >>/opt/sslstatus/tmp/${1}.json
    echo '"check": "'$DATE'"' >>/opt/sslstatus/tmp/${1}.json
    echo '},' >>/opt/sslstatus/tmp/${1}.json
else
    if [ $expirestamp -lt $nowstamp ]; then
        expiredMsg
        echo '"status": "Expired",' >>/opt/sslstatus/tmp/${1}.json
        echo '"statuscolor": "error",' >>/opt/sslstatus/tmp/${1}.json
    elif [ $expireday -lt 10 ]; then
        warningMsg
        echo '"status": "Soon Expired",' >>/opt/sslstatus/tmp/${1}.json
        echo '"statuscolor": "warning",' >>/opt/sslstatus/tmp/${1}.json
    elif [ $status = "ok." ]; then
        echo '"status": "Valid",' >>/opt/sslstatus/tmp/${1}.json
        echo '"statuscolor": "success",' >>/opt/sslstatus/tmp/${1}.json
    else
        echo '"status": "Invalid",' >>/opt/sslstatus/tmp/${1}.json
        echo '"statuscolor": "error",' >>/opt/sslstatus/tmp/${1}.json
    fi

    echo '"check": "'$DATE'",' >>/opt/sslstatus/tmp/${1}.json
    echo '"remain": "'$expireday'"' >>/opt/sslstatus/tmp/${1}.json
    echo '},' >>/opt/sslstatus/tmp/${1}.json
fi
```

## `token.sh` 脚本

用来获取 `ACCESS_TOKEN`，无需频繁获取，否则会受到频率拦截，默认有效期为 `7200` 秒。[^2]

自行修改脚本中的企业 ID 和应用的凭证密钥，注意不要泄露。

参考官方文档：获取 [access_token](https://work.weixin.qq.com/api/doc/90000/90135/91039)

```shell
#!/bin/sh
# 定义处理 json 格式内容的函数
function get_json_value() {
  local json=$1
  local key=$2

  if [[ -z "$3" ]]; then
    local num=1
  else
    local num=$3
  fi

  local value=$(echo "${json}" | awk -F"[,:}]" '{for(i=1;i<=NF;i++){if($i~/'${key}'\042/){print $(i+1)}}}' | tr -d '"' | sed -n ${num}p)

  echo ${value}
}

ACCESS_TOKEN=$(get_json_value $(curl -s "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=企业ID&corpsecret=应用的凭证密钥") access_token)

echo $ACCESS_TOKEN > /opt/sslstatus/$(date '+%s').token
```

[^1]: [企业微信 API 文档](https://work.weixin.qq.com/api/doc/90000/90135/90664)
[^2]: [使用 Shell 脚本来处理 JSON](https://www.tomczhen.com/2017/10/15/parsing-json-with-shell-script/)

