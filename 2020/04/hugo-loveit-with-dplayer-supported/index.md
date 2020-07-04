# Hugo 篇三：添加 DPlayer 播放器


DPlayer 是一款支持弹幕的 HTML5 视频播放器，支持 HLS、FLV、MPEG DASH、WebTorrent 和其他自定义流媒体，支持弹幕、截图、热键、清晰度切换、预览图、字幕等多种功能。

<!--more-->

## 前言

说起来 LoveIt 这款主题的音乐播放器用的是 APlayer 和 MetingJS，所以我在想何不引入 APlayer [作者](https://github.com/DIYgod)的另一个项目 DPlayer 视频播放器来替换掉 HTML5 简陋的默认播放器呢？

{{< admonition info "说明" false >}}
基于 DPlayer 1.25.0，HLS 0.13.2，flv.js 1.5.0 实现
{{< /admonition >}}

## 引入 css 和 js

新建 `LoveIt/assets/lib/dplayer` 文件夹，将下面的 css 和 js 文件下载保存在此位置：

```markdown
https://cdn.jsdelivr.net/npm/hls.js@0.13.2/dist/hls.min.js
https://cdn.jsdelivr.net/npm/flv.js@1.5.0/dist/flv.min.js
https://cdn.jsdelivr.net/npm/dplayer@1.25.0/dist/DPlayer.min.css
https://cdn.jsdelivr.net/npm/dplayer@1.25.0/dist/DPlayer.min.js
```

修改 `LoveIt/layouts/partials/assets.html`，加入以下代码：

```html
{{- /* Video */ -}}
{{- if ne .Site.Params.DPlayer false -}}
    {{- if $scratch.Get "video" -}}
        {{- /* DPlayer */ -}}
        {{- with $CDN.dplayerCSS -}}
            {{- slice . | $scratch.Add "linkCDN" -}}
        {{- else -}}
            {{- slice "lib/dplayer/DPlayer.min.css" | $scratch.Add "linkLocal" -}}
        {{- end -}}
        {{- with $CDN.hlsJS -}}
        {{- slice . | $scratch.Add "scriptCDN" -}}
        {{- else -}}
            {{- slice "lib/dplayer/hls.min.js" | $scratch.Add "scriptLocal" -}}
        {{- end -}}
        {{- with $CDN.flvJS -}}
        {{- slice . | $scratch.Add "scriptCDN" -}}
        {{- else -}}
            {{- slice "lib/dplayer/flv.min.js" | $scratch.Add "scriptLocal" -}}
        {{- end -}}
        {{- with $CDN.dplayerJS -}}
            {{- slice . | $scratch.Add "scriptCDN" -}}
        {{- else -}}
            {{- slice "lib/dplayer/DPlayer.min.js" | $scratch.Add "scriptLocal" -}}
        {{- end -}}
    {{- end -}}
{{- end -}}
```

如果需要设置 CDN，在 `config.toml` 里设置，同时设置启用 DPlayer：

```toml
[params]
  DPlayer = true
# CSS 和 JS 文件的 CDN 设置
[params.cdn]
  # HLS@0.13.2 flv.js@1.5.0 DPlayer@1.25.0 https://github.com/video-dev/hls.js https://github.com/bilibili/flv.js https://github.com/MoePlayer/DPlayer
  hlsJS = '<script src="https://cdn.jsdelivr.net/npm/hls.js@0.13.2/dist/hls.min.js"></script>'
  flvJS = '<script src="https://cdn.jsdelivr.net/npm/flv.js@1.5.0/dist/flv.min.js"></script>'
  dplayerCSS = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dplayer@1.25.0/dist/DPlayer.min.css">'
  dplayerJS = '<script src="https://cdn.jsdelivr.net/npm/dplayer@1.25.0/dist/DPlayer.min.js"></script>'
```

{{< admonition note "" false >}}
务必保证 hls 和 flv.js 在 DPlayer 之前引入
{{< /admonition >}}

## 定义 shortcode

在 `LoveIt/layouts/shortcodes/` 下新建 `video.html` 文件：

```html
{{- $scratch := .Page.Scratch.Get "scratch" -}}

{{- if .IsNamedParams -}}
    {{- if .Get "url" -}}
    <div id="{{ .Get `id` }}"></div>
    <script>
      function loadDPlayer(){
        let dp = new DPlayer({
          container: document.getElementById({{ .Get `id` }}),
          autoplay: {{ .Get `autoplay` | default false }},
          theme: {{ .Get `theme` | default `#b7daff` }},
          loop: {{ .Get `loop` | default false }},
          lang: {{ .Get `lang` | default `zh-cn` }},
          screenshot: {{ .Get `screenshot` | default true }},
          hotkey: {{ .Get `hotkey` | default true }},
          preload: {{ .Get `preload` | default `auto` }},
          logo: {{ .Get `logo` }},
          volume: {{ .Get `volume` | default 0.7 }},
          mutex: {{ .Get `mutex` | default true }},
          video: {
              url: {{ .Get `url` }},
              pic: {{ .Get `pic` }},
              thumbnails: {{ .Get `thumbnails` }},
              type: {{ .Get `type` | default `auto` }},
          },
          subtitle: {
              url: {{ .Get `sub` }},
              type: {{ .Get `subtype` | default `webvtt` }},
              fontSize: {{ .Get `fontsize` | default `20px` }},
              bottom: {{ .Get `bottom` | default `10%` }},
              color: {{ .Get `color` | default `#b7daff` }},
          },
        });
      }
      document.addEventListener('DOMContentLoaded', loadDPlayer, !1);
    </script>
    {{- end -}}
{{- end -}}
{{- $scratch.Set "video" true -}}
```

代码删除了 DPlayer 预设的自定义右键菜单、进度条提示点和弹幕参数。目前没有找到好用的弹幕接口，自建的话，静态博客会公开接口 API，免费的服务额度有限，付费的估计承受不起。

在 `LoveIt/assets/css/_partial/_single/` 下新建 `_video.scss` 样式：

```scss
.dplayer {
  position: relative;
  width: 100%;
  height: auto;
  margin: 3% auto;
  text-align: center;
}
```

在 `LoveIt/assets/css/_page/_single.scss` 以下位置引入新建的 `_video.scss`：

```scss
@import "../_partial/_single/code";
@import "../_partial/_single/instagram";
@import "../_partial/_single/admonition";
@import "../_partial/_single/echarts";
@import "../_partial/_single/mapbox";
@import "../_partial/_single/music";
@import "../_partial/_single/bilibili";
@import "../_partial/_single/bilibilibv";
@import "../_partial/_single/qqvideo";
@import "../_partial/_single/iqiyi";
@import "../_partial/_single/youku";
@import "../_partial/_single/sohu";
@import "../_partial/_single/acfun";
@import "../_partial/_single/video";
```

## 使用方法

参数名|默认值|描述
:-|:-|:-
id|**必须**|播放器父元素唯一 id，用于处理同页面多个播放器，同页面不可重复
url|**必须**|视频直链地址
pic|可选|视频封面图片
thumbnails|可选|视频缩略图，可以使用 [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails) 生成
type|可选，"auto"|流媒体类型，可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或其他自定义类型, 见[#MSE 支持](http://dplayer.js.org/zh/guide.html#%E9%85%8D%E5%90%88%E5%85%B6%E4%BB%96-mse-%E5%BA%93%E4%BD%BF%E7%94%A8)
autoplay|可选，false|视频自动播放
theme|可选，"#b7daff"|主题色
loop|可选，false|视频循环播放
lang|可选，"zh-cn"|播放器显示语言，可选值: 'en', 'zh-cn', 'zh-tw'
screenshot|可选|开启截图，如果开启，视频和视频封面需要允许跨域
hotkey|可选，true|开启热键，支持快进、快退、音量控制、播放暂停
preload|可选，"auto"|视频预加载，可选值: 'none', 'metadata', 'auto'
logo|可选|在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
volume|可选，0.7|默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
mutex|可选，true|互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
sub|可选|字幕链接
subtype|可选，"webvtt"|字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
fontsize|可选，"20px"|字幕字号
bottom|可选，"10%"|字幕距离播放器底部的距离，取值形如: '10px' '10%'
color|可选，"#b7daff"|字幕颜色

使用方法：

```markdown
{{</* video id="a" url="https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly96anVlZHVjbi1teS5zaGFyZXBvaW50LmNvbS86djovZy9wZXJzb25hbC9qYXlfeW91bmdfemp1X2VkdV9jbi9FZFlDRDBuNkxWQkxzRGVUU19NaDhSTUJSQm5ybF9lUDJGRnhEVmc2WGhSelV3P2U9cHNBR1F3.mp4" sub="https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly96anVlZHVjbi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9qYXlfeW91bmdfemp1X2VkdV9jbi9FUkxXYm4yaFd5ZEFsck5JRHdOVk92TUJVU2ktSC0wZkh1aDk3RkRhOGtUNHlBP2U9bmtUZXlk.vtt" */>}}
```

实际页面显示效果：

{{< video id="a" url="https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly96anVlZHVjbi1teS5zaGFyZXBvaW50LmNvbS86djovZy9wZXJzb25hbC9qYXlfeW91bmdfemp1X2VkdV9jbi9FZFlDRDBuNkxWQkxzRGVUU19NaDhSTUJSQm5ybF9lUDJGRnhEVmc2WGhSelV3P2U9cHNBR1F3.mp4" sub="https://onedrive.gimhoy.com/sharepoint/aHR0cHM6Ly96anVlZHVjbi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9qYXlfeW91bmdfemp1X2VkdV9jbi9FUkxXYm4yaFd5ZEFsck5JRHdOVk92TUJVU2ktSC0wZkh1aDk3RkRhOGtUNHlBP2U9bmtUZXlk.vtt" >}}

## 后记

整个代码还是简单粗糙地引入，尤其是对同页面多个播放器的处理，新手不会优化，就这样能用就行了。

**参考内容：**
> [DPlayer 官方文档](http://dplayer.js.org/zh/guide.html)
>
> [DPlayer-Typecho](https://github.com/MoePlayer/DPlayer-Typecho)

