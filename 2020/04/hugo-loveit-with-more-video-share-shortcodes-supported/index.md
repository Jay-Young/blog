# Hugo 篇二：为 LoveIt 主题添加更多视频分享 shortcodes


`Hugo LoveIt` 主题虽然支持了 `bilibili` 视频的插入，再加上 `hugo` 自带的 `youtube` 和 `vimeo` 视频，但是也还是有点少。没有国内视频三大巨头（优酷现在掉队有点严重，可能名不副实了）似乎有些遗憾。又加上最近 B 站去 `av` 化，正好看到 `LoveIt` 项目的 [issue#208](https://github.com/dillonzq/LoveIt/issues/208) 中有人提到这一点，我就试着看看能不能改改，并加点东西进去。

<!--more-->

## 前言

以某位咕咕咕 up 主的最新视频为例，旧 `av` 时代插入 B 站视频是下面这个样子的

```markdown
视频地址：https://www.bilibili.com/video/av882566744

插入方式：
{{</* bilibili 882566744 */>}}
或者
{{</* bilibili av=882566744 */>}}
```

而新 `bv` 时代 B 站视频默认只显示 `bv` 号了，用老方法插入会失败。当然目前你可以用浏览器扩展或者其他方法获取到 `av` 号来插入，但是总有一天会迎来全面 `bv` 的时代。那么就需要我们手动来改造了。

## BV 大改造

看了下 `LoveIt` 主题的结构，发现 `bilibili shortcodes` 的引入和三个文件有关：

```markdown
themes/LoveIt/layouts/shortcodes/bilibili.html
themes/LoveIt/assets/css/_partial/_single/_bilibili.scss
themes/LoveIt/assets/css/_page/_single.scss
```
### 分享代码

首先来看 `bilibili.html`：

```html
<div class="bilibili">
    {{- if .IsNamedParams -}}
        <iframe src="//player.bilibili.com/player.html?aid={{ .Get `av` }}&page={{ .Get `p` | default 1 }}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    {{- else -}}
        <iframe src="//player.bilibili.com/player.html?aid={{ .Get 0 }}&page={{ .Get 1 | default 1 }}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    {{- end -}}
</div>
```

不难发现，其实就是对官方 `iframe` 分享链接改造。

```markdown
player.bilibili.com/player.html?aid=[av号]&page=[分p号]
````

那么拿到 `bv` 时代的官方分享链接就可以了。

{{< image src="/images/hugo/hugo-loveit-with-more-video-share-shortcodes-supported/bilibili-share-iframe-code.png" title="获取分享链接" >}}

获取的原始分享链接是下面这个样子的：

```html
<iframe src="//player.bilibili.com/player.html?aid=882566744&bvid=BV1YK4y1C7CU&cid=172274931&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

看起来目前官方还是 `av` 和 `bv` 并行的，为了不破坏原来的博文 `av` 时代视频的效果，我们新建一个 `bilibilibv.html` 文件：

```html
<div class="bilibilibv">
  <iframe src="//player.bilibili.com/player.html?bvid={{ .Get 0 }}&page={{ .Get 1 | default 1 }}" scrolling="no"
    border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>
```

为了方便也不要搞 `av` 时代的两种使用方法了，直接上最简单的一种方式。

### 修改样式

到此为止，其实我们的 `bv` 时代 `shortcodes` 已经可以用了，但是没有修改样式，不管从外观还是排版来看都是很丑的。

回到开头提到的三个文件之二，新建一个 `_bilibilibv.scss` 的文件，就是改个类名，复制了 `av` 时代的样式：

```scss
.bilibilibv {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  margin: 3% auto;
  text-align: center;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
```

### 引入样式

刚刚新建的样式文件还需要用到开头的三个文件之三来引入，修改 `_single.scss` 如下：

```scss
@import "../_partial/_single/code";
@import "../_partial/_single/instagram";
@import "../_partial/_single/admonition";
@import "../_partial/_single/echarts";
@import "../_partial/_single/bilibili";
@import "../_partial/_single/bilibilibv";
```

在引入样式的地方，新增一行 `@import "../_partial/_single/bilibilibv";`，到此大功告成。

使用方法：

```markdown
{{</* bilibilibv BV1YK4y1C7CU */>}}
```

{{< bilibilibv BV1YK4y1C7CU >}}

{{< admonition tip "小技巧" false >}}
其他视频网站的引入也是如此，先获取到官方的 `iframe` 分享链接，然后改造三个文件即可。
{{< /admonition >}}

## 后记

在寻找各视频网站官方分享链接的过程中，意外发现了 **TGideas** 这个团队的内容，作为一个小白感觉就像在沙漠中找到了一片绿洲。

- [https://tgideas.qq.com/doc/index.html](https://tgideas.qq.com/doc/index.html)
- [https://tgideas.qq.com/intro.html](https://tgideas.qq.com/intro.html)

如果需要更多视频网站 `shortcodes` 的成品的话，可以去我 fork 的[项目地址](https://github.com/Jay-Young/LoveIt)，切换到 `develop` 分支查看。目前支持 **爱奇艺**，**腾讯视频**，**优酷**，**搜狐视频**，**Acfun**。

```markdown
爱奇艺和搜狐不能直接用播放页面地址的视频 id，使用页面的分享按钮获取完整 iframe 地址
爱奇艺是 tvid 部分，搜狐是 bid 部分。

用法示例：

{{</* iqiyi 3060730600 */>}}

{{</* qqvideo r0029muuhfj */>}}

{{</* youku XMzk1NjM1MjAw */>}}

{{</* sohu 90742150 */>}}

{{</* acfun ac14349183 */>}}
```

0202年还在使用 flash 技术的视频网站，祝你们新年快乐。

