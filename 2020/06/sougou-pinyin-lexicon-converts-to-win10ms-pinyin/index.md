# 搜狗输入法词库转换成微软拼音自定义短语


搜狗输入法应该是目前中文拼音输入法中最流行的，最近的一件事让它更加“火”了。很多用户发现电脑不断出现托盘闪烁弹窗，点击后即为淘宝天猫的 6.18 促销网页。火绒工程师溯源调查后发现，该弹窗均来自于常用软件“搜狗输入法”，该广告配置通过云控下发，无法通过设置关闭。进一步分析发现，该软件除了疯狂弹窗，还存在统计用户浏览器浏览历史数据等越位行为，符合广告程序的定义。目前，火绒已对该软件中广告模块进行拦截查杀。<sup>[[1]](https://zhuanlan.zhihu.com/p/146179800)</sup>

<!--more-->

其实这种劣迹也不是搜狗第一次了，如果用关键词“搜狗输入法 流氓”搜索下会有很多用户反馈事件。所以呢，早点放弃搜狗输入法是唯一的解决办法。说起来，2008 年我开始使用搜狗输入法，那时候还是喜欢换皮肤的年纪。后来用过一段时间的谷歌拼音和必应输入法，因为都不维护了，期间也用过一段时间 QQ 拼音纯净版<sup>[[2]](#qqpinyin)</sup>，后来也不维护了。这么多年来，用的时间最长的还是我现在用的 Windows 10 微软拼音以及前辈微软拼音 2010 等。微软的所有词库都打开的情况下，用了这么多年了并没有感觉什么不适，反正也不是什么新闻媒体速记员，不觉得有什么缺少的内容。可能从词库的完整性来说，肯定没有搜狗的词库强大，但是可以通过“深蓝词库”转换器这款软件将搜狗的词库转换成微软拼音可用的用户定义的短语导入。至于其他所谓技巧性的功能对我来说好像不是刚需。

深蓝词库转换器下载: <https://github.com/studyzy/imewlconverter/releases>

搜狗细胞词库下载: <https://pinyin.sogou.com/dict/>

可以直接使用下载的细胞词库，或者将正在使用的词库备份为 bin 文件或导出为 txt 文件。然后，将词库文件拖拽到转换器会自动识别来源，在右侧选择目标格式“Win10 微软拼音（自定义短语）”或“Win10 微软拼音（自学习词库）”，注意后者只能支持最多 2 万个词条，所以建议通过高级设置中的词条过滤来控制源词条数量。如果喜欢使用双拼，工具还提供了多种双拼方案，以便在生成短语的拼音时生成对应的双拼。

{{< image src="/images/hugo/sougou-pinyin-lexicon-converts-to-win10ms-pinyin/Snipaste_2020-06-07_16-28-54.png" title="深蓝词库转换" >}}

如果源词条数量很多的话，导入以后打开用户自定义短语界面会变得很卡，所以我是不推荐导入那些行业分类的细胞词库，反正微软这边也有，不会差到哪里去。下定决心要从搜狗切换到微软的话，只需要把自己的个人词库导入就应该够用了。

Windows 10 微软拼音的词库设置在设置 → 时间和语言 → 语言 → 首选语言中文选项 → 键盘微软拼音选项 → 词库和自学习。在这个界面可以导入导出词库，自定义短语，打开云候选，启用所有的专业词典。

{{< image src="/images/hugo/sougou-pinyin-lexicon-converts-to-win10ms-pinyin/Snipaste_2020-06-07_16-40-44.png" title="微软拼音词库设置" >}}

{{< admonition tip "点击展开更多技巧" true >}}
基于 Windows 10 Build 1909，以下快捷模式需要在中文模式下

{{< image src="/images/hugo/sougou-pinyin-lexicon-converts-to-win10ms-pinyin/Snipaste_2020-06-07_19-00-29.png" title="高级设置" >}}

- 简繁输入切换，默认 `Ctrl+Shift+F`
- 打开 emoji 输入，默认 `Ctrl+Shift+E`

  {{< image src="/images/hugo/sougou-pinyin-lexicon-converts-to-win10ms-pinyin/Snipaste_2020-06-07_19-03-30.png" title="emoji" >}}

- 人名输入，例如全拼模式下输入 `liuying` 后面跟上 `;r` 进入人名选择

  {{< image src="/images/hugo/sougou-pinyin-lexicon-converts-to-win10ms-pinyin/Snipaste_2020-06-07_18-52-16.png" title="人名输入" >}}

- U 模式输入，全拼模式下输入 U 进入，可根据笔画、拆分的方式输入汉字以及输入多种符号。例如：输入 `uhs` 表示“十”（笔画模式：横竖），`ushuishuishui` 表示“淼”，还有 `uudw`、`uuxh`、`uuts`、`uubd`、`uusx`、`uujh` 和 `uuzm` 等多种符号模式。

  {{< image src="/images/hugo/sougou-pinyin-lexicon-converts-to-win10ms-pinyin/Snipaste_2020-06-07_18-52-24.png" title="U 模式" >}}

- V 模式输入，全拼模式下输入 V 进入，可以输入中文格式数字、日期和时间等。例如：输入 `v123` 可以选择“一百二十三”、“壹佰贰拾叁”中文格式数字，`v2020.6.7` 可以选择 2020 年 6 月 7 日、二〇二〇年六月七日等多种日期格式，`v1+2` 可以选择结果“3”或者公式“1+2=3”。

  {{< image src="/images/hugo/sougou-pinyin-lexicon-converts-to-win10ms-pinyin/Snipaste_2020-06-07_18-55-53.png" title="V 模式" >}}

{{< /admonition >}}

<span id="qqpinyin"></span>

> 2013 年 09 月 16 日，腾讯 4.48 亿美元注资搜狗，宣布将搜搜和 QQ 输入法业务与搜狗现有业务进行合并。<sup>[[3]](https://baike.baidu.com/item/QQ%E6%8B%BC%E9%9F%B3%E8%BE%93%E5%85%A5%E6%B3%95/7556813)</sup> 所以目前官方的 QQ 拼音输入法应该还是搜狗的换皮版本，据说也不干净。

