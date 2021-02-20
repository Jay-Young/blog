# 新手尝试解题首届哔哩哔哩安全挑战赛


作为一个外行选手也来玩玩这个首届哔哩哔哩安全挑战赛，1-5 题只要一个浏览器就够了。6-10 似乎需要用工具了，反正我也不会，看了别人的解题思路也不懂。从目前公开的信息来看第 8 题和第 10 题已经有思路了。怎么说来着，知道答案的都在榜上呢。[^1]

<!--more-->

## 0x01 页面的背后是什么

题目地址: [http://45.113.201.36/index.html](http://45.113.201.36/index.html)

直接 F12 审查元素，搜索 `flag1` 即可。是个输入框被隐藏了，它的值就是答案了。
{{< image src="/images/hugo/bilibili-sec1024-2020/flag1.webp"   alt="flag1" caption="flag1" title="flag1" width=100% >}}

## 0x02 真正的秘密只有特殊的设备才能看到

题目地址： [http://45.113.201.36/index.html](http://45.113.201.36/index.html)

还是这个页面，页面都很直白地提示需要使用 `bilibili Security Browser` 浏览器访问～

那么就是把浏览器 UA 改成 `bilibili Security Browser` 就可以了。
{{< image src="/images/hugo/bilibili-sec1024-2020/flag2.webp"   alt="flag2" caption="flag2" title="flag2" width=100% >}}

前面两题开胃小菜还是比较容易的，基本上审查下网页就知道解题关键在哪里了。

## 0x03 密码是啥

题目地址： [http://45.113.201.36/login.html](http://45.113.201.36/login.html)

用字典暴力破解，不存在的，就是猜，肯定是个弱密码或者和 b 站有关的。

管理员の账号猜测用户名就是常见的 `admin` 啦，密码就是 `bilibili` 了。
{{< image src="/images/hugo/bilibili-sec1024-2020/flag3.webp"   alt="flag3" caption="flag3" title="flag3" width=100% >}}

## 0x04 对不起，权限不足

题目地址： [http://45.113.201.36/superadmin.html](http://45.113.201.36/superadmin.html)

页面提示有些秘密只有超级管理员才能看见哦~，那么就是我们的用户权限不够。

可是也没有可以登录的地方，一般会话怎么来判断用户呢，当然是 `cookie` 啦。

F12 检视下 `cookie` 有哪些值，看到 `role` 就知道要修改这个为超级管理员的值。

那么超级管理员的值应该是什么呢。

看到默认的这些字符首先考虑是 md5 算法以后的，那么试试页面地址的这个 `superadmin`，好像不对。

最后看了别人的提示是 Windows 的默认管理员用户名 `Administrator` 经 md5 算法后。
{{< image src="/images/hugo/bilibili-sec1024-2020/flag4.webp"   alt="flag4" caption="flag4" title="flag4" width=100% >}}

## 0x05 别人的秘密

题目地址： [http://45.113.201.36/user.html](http://45.113.201.36/user.html)

页面提示这里没有你想要的答案，那么哪里有呢？

按照管理先看网页源代码，有这么一段 js 代码：

```javascript
$(function () {
	(function ($) {
		$.getUrlParam = function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		};
	})(jQuery);
	var uid = $.getUrlParam("uid");
	if (uid == null) {
		uid = 100336889;
	}
	$.ajax({
		url: "api/ctf/5?uid=" + uid,
		type: "get",
		success: function (data) {
			console.log(data);
			if (data.code == 200) {
				// 如果有值：前端跳转
				$("#flag").html("欢迎超级管理员登陆～flag : " + data.data);
			} else {
				// 如果没值
				$("#flag").html("这里没有你想要的答案～");
			}
		},
	});
});
```

回想这题的题目是 `别人的秘密`，根据上面的代码也不难看出是要找到这个超级管理员的 `uid`，构造完整地址的 `GET` 请求后获得我们需要的答案。

我们先看一下 `api/ctf/5?uid=100336889` 返回什么吧。

```json
{ "code": "403", "data": "", "msg": "" }
```

我们需要的答案就是正确的 `uid` 返回的 `data` 对应的值。

接下来就简单了，循环遍历就可以。先循环个 50 次再说。

{{< image src="/images/hugo/bilibili-sec1024-2020/flag5.webp"   alt="flag5" caption="flag5" title="flag5" width=100% >}}

```javascript
for (let index = 100336889; index < 100336939; index++) {
	var jsonUrl = "api/ctf/5?uid=" + index;
	const response = await fetch(jsonUrl);
	const posts = await response.json();
	console.log(posts.data);
}
```

接下来的题目就需要工具了，需要 PHP 知识，扫目录、扫端口，我就不会了，只能摊手。

一切的一切似乎都跟第 6 题有关，不知道是不是要用 XSS 攻击来解决。

[^1]: [https://github.com/interesting-1024/end/issues](https://github.com/interesting-1024/end/issues)

