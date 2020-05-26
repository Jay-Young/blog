# Hugo 篇四：添加友链卡片 shortcodes


在前辈大佬的基础上，为本博客使用的主题实现友链卡片功能，并加入简单的移动页面适配。代码借鉴来自 [kissshot](https://github.com/kkkgo/hugo-friendlinks/) 和 [数学小兵儿](https://github.com/MatNoble/hugo-shortcodes-sets/) 两位大佬。

<!--more-->

## 代码部分

`LoveIt/layouts/shortcodes/` 下面新建 `friend.html` 文件：

```html
{{ if .IsNamedParams }}
<a target="_blank" href={{ .Get "url" }} title={{ .Get "name" }} class="friendurl">
  <div class="frienddiv">
    <div class="frienddivleft">
      <img class="myfriend" src={{ .Get "logo" }} />
    </div>
    <div class="frienddivright">
      <div class="friendname">{{ .Get "name" }}</div>
      <div class="friendinfo">{{ .Get "word" }}</div>
    </div>
  </div>
</a>
{{ end }}
```

`LoveIt/assets/css/_partial/_single/` 下面新建 `_friend.scss` 文件：

```scss
.friendurl {
	text-decoration: none !important;
	color: black;
}

.myfriend {
	width: 56px !important;
	height: 56px !important;
	border-radius: 50%;
	border: 1px solid #ddd;
	padding: 2px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
	margin-top: 14px !important;
	margin-left: 14px !important;
	background-color: #fff;
}

.frienddiv {
	height: 92px;
	margin-top: 10px;
	width: 48%;
	display: inline-block !important;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.2);
}

.frienddiv:hover {
	background: rgba(87, 142, 224, 0.15);
}

.frienddiv:hover .frienddivleft img {
	transition: 0.9s !important;
	-webkit-transition: 0.9s !important;
	-moz-transition: 0.9s !important;
	-o-transition: 0.9s !important;
	-ms-transition: 0.9s !important;
	transform: rotate(360deg) !important;
	-webkit-transform: rotate(360deg) !important;
	-moz-transform: rotate(360deg) !important;
	-o-transform: rotate(360deg) !important;
	-ms-transform: rotate(360deg) !important;
}

.frienddivleft {
	width: 92px;
	float: left;
}

.frienddivleft {
	margin-right: 2px;
}

.frienddivright {
	margin-top: 18px;
	margin-right: 18px;
}

.friendname {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

.friendinfo {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

@media screen and (max-width: 600px) {
	.friendinfo {
		display: none;
	}
	.frienddivleft {
		width: 84px;
		margin: auto;
	}
	.frienddivright {
		height: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.friendname {
		font-size: 14px;
	}
}
```

`LoveIt/assets/css/_page/` 下面修改 `_single.scss`，引入下面一行：

```scss
@import "../_partial/_single/friend";
```

## 展示效果

使用示例：

```markdown
{{</* friend name="Dillon" url="https://github.com/dillonzq/" logo="https://avatars0.githubusercontent.com/u/30786232?s=460&u=5fc878f67c869ce6628cf65121b8d73e1733f941&v=4" word="LoveIt主题作者" */>}}
```

{{< friend name="Dillon" url="https://github.com/dillonzq/" logo="https://avatars0.githubusercontent.com/u/30786232?s=460&u=5fc878f67c869ce6628cf65121b8d73e1733f941&v=4" word="LoveIt主题作者" >}}

{{< friend name="kissshot" url="https://03k.org/" logo="https://avatars0.githubusercontent.com/u/4530897?s=460&u=1e701a77877331e691d7f6dfe3a5bda7b30e0676&v=4" word="提供了某知名kms服务的大佬" >}}

{{< friend name="数学小兵儿" url="https://matnoble.me/" logo="https://matnoble.me/icons/android-chrome-512x512.png" word="数学＆计算机 我都爱" >}}

移动端隐藏说明文字，只留下名称：

{{< figure src="/images/hugo/friend-link-shortcodes-for-hugo-loveit/QQ拼音截图20200425232808.png" >}}
