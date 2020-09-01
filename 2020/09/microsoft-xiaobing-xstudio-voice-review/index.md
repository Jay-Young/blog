# 微软小冰：X Studio 人工智能歌手


歌手 1.0 软件，为音乐创作者们提供具有不同音色和唱腔的虚拟歌手，他们能迅速读懂乐谱，并像人类歌手一样，自然地演唱出来。

<!--more-->

{{<video id="a" url="/videos/XStudioSinger/XStudioSinger.m3u8" >}}

> 用户通过软件制作的歌手清唱版权属于用户，可以自由地创作和发布。用户需要确保除歌手清唱以外的部分（包括词、曲、伴奏等等）不侵犯任何第三方的知识产权或其他权利。在行使上述权力时，需确保其符合法律法规及社会公序良俗的规范，并承担相关的全部直接或间接法律责任。

## 如何快速创作一首歌曲

软件提供两种创作方式：乐谱创作和 Midi 创作

### 方式一：乐谱创作

适用场景：如果您有基本的乐理知识，想要基于简谱/五线谱进行创作或改编，可以使用该方式。

乐谱创作流程：

1. 新建工程并选择歌手
2. 根据乐谱进行信息设置和音符绘制
3. 输入歌词
4. 美化歌声
5. 导出音频

### 方式二：Midi 创作

适用场景：如果您不想手绘乐谱，可以直接导入 Midi 文件进行创作或改编。

Midi 创作流程：

1. 新建工程并选择歌手
2. 导入 Midi 文件
3. 输入歌词
4. 美化歌声
5. 导出音频

{{< admonition "tip" "" false >}}

- 可以通过 [MidiShow](https://www.midishow.com/) 网站或者搜索引擎来下载所要创作歌曲的 midi 文件
- 也可以通过 FL Studio 等软件来扒制 midi 文件
  {{< /admonition >}}

## 基本功能

### 如何选择歌手

初次打开软件时，在【歌手选择】页面进行选择
打开软件以后，在【演唱轨】左侧，单击歌手头像下方【更换歌手】按钮进行更换

### 如何进行歌曲基本信息设置（曲速，拍号，音名）

当前基本信息可在轨道窗最上区域进行设定，双击进入弹出菜单，在菜单内进行具体选择。

### 如何编辑歌词

双击音符，进入歌词编辑，可以成段输入歌词
或者在音符上点击右键，选择从当前音符开始【编辑歌词】或者【编辑全部歌词】

### 如何实现多声部

点击菜单栏【插入】-【演唱轨】，并为新的演唱轨选择歌手
你可以在钢琴卷帘区，看到其他声部歌手所演唱的音符的参考位置

### 如何修改发音

右键单击音符，在弹窗中选择【修改发音】，即可输入有效发音，[有效发音列表](#有效发音列表)参见文档末尾

**暂不支持在歌词编辑模式下直接输入发音**

### 一字多音/延长音/转音怎么输入

在歌词上输入转音符号“-”，表示把前一个音符的发音延长至当前音符上

### 如何使歌声更自然（插入换气，静音）

可以右键单击音符，手动添加换气及停顿，使歌声更加自然流畅

或者使用菜单栏【美化】中的【一键自动插入换气】功能

也可以尝试改变音符的长短，对合成歌声的效果也会有影响

### 如何插入伴奏

点击菜单栏【插入】-【伴奏】，选择本地音频文件

或者在【轨道窗】空白区域单击右键，选择插入伴奏

### 如何导入 midi

双击选中歌手音轨，点击菜单栏【插入】-【midi】，从本地选择 midi 文件，然后选择要插入的音轨

注意插入的 midi 会覆盖当前音轨的信息

### 播放起点，播放终点，循环标记是做什么的

当您确定播放起点、播放终点后，点击开启循环模式，歌声会在这段区域内循环播放

### 播放光标如何移动

点击时间轴上方区域的某个位置，播放光标会移动到这个位置

或者把鼠标移动到播放光标上，点住并拖动播放光标，拖动时鼠标会吸附在节拍线上

### 为什么点击播放后需要加载一段时间

我们的歌声合成基于深度神经网络，需要在云端进行大量运算

当您点击播放时，会向服务器发送请求，请耐心等待

## 参数功能

### 如何进入参数模式

点击右上角的参数按钮，等待参数信息返回，即可进入参数模式，当前版本，可以修改【音高】参数

### 如何修改音高参数

在钢琴卷帘区域选择【音高】参数，可以通过自由手绘/锚点绘制两种方式编辑音高线

### 如何重置音高参数

利用【橡皮擦工具】可以实现音高参数重置

针对需要重置的音高参数区域，通过橡皮擦工具，选中需要重置的区域，即可复原

## 快捷键使用表

| 功能           | 快捷键       | 功能                     | 快捷键               |
| -------------- | ------------ | ------------------------ | -------------------- |
| 新建工程       | Ctrl+N       | 播放/暂停                | Space                |
| 打开工程       | Ctrl+O       | 停止                     | Esc                  |
| 保存工程       | Ctrl+S       |
| 工程另存为     | Ctrl+Shift+S | 把选中的音符向上移动一步 | ↑                    |
|                |              | 把选中的音符向下移动一步 | ↓                    |
| 撤销           | Ctrl+Z       | 把选中的音符向左移动一步 | ←                    |
| 重做           | Ctrl+Y       | 把选中的音符向右移动一步 | →                    |
| 全选           | Ctrl+A       |                          |                      |
| 剪切           | Ctrl+X       | 页面上下滚动             | 鼠标滚轮             |
| 复制           | Ctrl+C       | 页面左右滚动             | Shift+鼠标滚轮       |
| 粘贴           | Ctrl+V       | 页面小节宽度改变         | Ctrl+鼠标滚轮        |
| 删除           | Delete       | 页面小节高度改变         | Ctrl+ Shift+鼠标滚轮 |
|                |              | 插入换气                 | Ctrl+B               |
| 光标切换为画笔 | F1           | 插入停顿                 | Ctrl+P               |
| 光标切换为鼠标 | F2           | 从当前位置编辑歌词       | Ctrl+L               |
| 光标切换为橡皮 | F3           | 编辑全部歌词             | Ctrl+Shift+L         |
|                |              | 一键自动插入换气         | Ctrl+Alt+B           |

## 有效发音列表

|      | b     | c     | ch     | d     | f     | g     | h     | j     |
| ---- | ----- | ----- | ------ | ----- | ----- | ----- | ----- | ----- |
| a    | ba    | ca    | cha    | da    | fa    | ga    | ha    |       |
| ai   | bai   | cai   | chai   | dai   | fai   | gai   | hai   | jai   |
| an   | ban   | can   | chan   | dan   | fan   | gan   | han   |       |
| ang  | bang  | cang  | chang  | dang  | fang  | gang  | hang  |       |
| ao   | bao   | cao   | chao   | dao   | fao   | gao   | hao   |       |
| e    | be    | ce    | che    | de    | fe    | ge    | he    | je    |
| ei   | bei   | cei   | chei   | dei   | fei   | gei   | hei   | jei   |
| en   | ben   | cen   | chen   | den   | fen   | gen   | hen   | jen   |
| eng  | beng  | ceng  | cheng  | deng  | feng  | geng  | heng  |       |
| eri  | bi    | cyi   | chyi   | di    | fi    | gi    | hi    | ji    |
| ia   | bia   |       |        | dia   |       |       |       | jia   |
| ian  | bian  |       |        | dian  |       |       |       | jian  |
| iang | biang |       |        | diang |       |       |       | jiang |
| iao  | biao  |       |        | diao  |       |       |       | jiao  |
| ie   | bie   |       |        | die   |       |       |       | jie   |
| in   | bin   |       |        | din   |       |       |       | jin   |
| ing  | bing  |       |        | ding  |       |       |       | jing  |
| iong | biong |       |        | diong |       |       |       | jiong |
| iu   | biu   |       |        | diu   |       |       |       | jiu   |
| o    | bo    | co    | cho    | do    | fo    | go    | ho    |       |
| ong  | bong  | cong  | chong  | dong  | fong  | gong  | hong  |       |
| ou   | bou   | cou   | chou   | dou   | fou   | gou   | hou   |       |
| u    | bu    | cu    | chu    | du    | fu    | gu    | hu    | jwu   |
| ua   | bua   | cua   | chua   | dua   | fua   | gua   | hua   |       |
| uai  | buai  | cuai  | chuai  | duai  | fuai  | guai  | huai  |       |
| uan  | buan  | cuan  | chuan  | duan  | fuan  | guan  | huan  |       |
| uang | buang | cuang | chuang | duang | fuang | guang | huang |       |
| ui   | bui   | cui   | chui   | dui   | fui   | gui   | hui   |       |
| un   | bun   | cun   | chun   | dun   | fun   | gun   | hun   |       |
| uo   | buo   | cuo   | chuo   | duo   | fuo   | guo   | huo   |       |
| v    |       |       |        |       |       |       |       | ju    |
| van  |       |       |        |       |       |       |       | juan  |
| vang |       |       |        |       |       |       |       | juang |
| ve   |       |       |        |       |       |       |       | jue   |
| vn   |       |       |        |       |       |       |       | jun   |

|      | k     | l     | m     | n     | p     | q     | r     | s     |
| ---- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| a    | ka    | la    | ma    | na    | pa    |       | ra    | sa    |
| ai   | kai   | lai   | mai   | nai   | pai   |       | rai   | sai   |
| an   | kan   | lan   | man   | nan   | pan   |       | ran   | san   |
| ang  | kang  | lang  | mang  | nang  | pang  |       | rang  | sang  |
| ao   | kao   | lao   | mao   | nao   | pao   |       | rao   | sao   |
| e    | ke    | le    | me    | ne    | pe    | qe    | re    | se    |
| ei   | kei   | lei   | mei   | nei   | pei   | qei   | rei   | sei   |
| en   | ken   | len   | men   | nen   | pen   | qen   | ren   | sen   |
| eng  | keng  | leng  | meng  | neng  | peng  |       | reng  | seng  |
| er   |       |       |       |       |       |       |       |       |
| eri  | ki    | li    | mi    | ni    | pi    | qi    | ryi   | syi   |
| ia   |       | lia   | mia   | nia   | pia   | qia   |       |       |
| ian  |       | lian  | mian  | nian  | pian  | qian  |       |       |
| iang |       | liang | miang | niang | piang | qiang |       |       |
| iao  |       | liao  | miao  | niao  | piao  | qiao  |       |       |
| ie   |       | lie   | mie   | nie   | pie   | qie   |       |       |
| in   |       | lin   | min   | nin   | pin   | qin   |       |       |
| ing  |       | ling  | ming  | ning  | ping  | qing  |       |       |
| iong |       | liong | miong | niong | piong | qiong |       |       |
| iu   |       | liu   | miu   | niu   | piu   | qiu   |       |       |
| o    | ko    | lo    | mo    | no    | po    |       | ro    | so    |
| ong  | kong  | long  | mong  | nong  | pong  |       | rong  | song  |
| ou   | kou   | lou   | mou   | nou   | pou   |       | rou   | sou   |
| u    | ku    | lu    | mu    | nu    | pu    | qwu   | ru    | su    |
| ua   | kua   | lua   | mua   | nua   | pua   |       | rua   | sua   |
| uai  | kuai  | luai  | muai  | nuai  | puai  |       | ruai  | suai  |
| uan  | kuan  | luan  | muan  | nuan  | puan  |       | ruan  | suan  |
| uang | kuang | luang | muang | nuang | puang |       | ruang | suang |
| ui   | kui   | lui   | mui   | nui   | pui   |       | rui   | sui   |
| un   | kun   | lun   | mun   | nun   | pun   |       | run   | sun   |
| uo   | kuo   | luo   | muo   | nuo   | puo   |       | ruo   | suo   |
| v    |       | lv    |       | nv    |       | qu    |       |       |
| van  |       | lvan  |       | nvan  |       | quan  |       |       |
| vang |       | lvang |       | nvang |       | quang |       |       |
| ve   |       | lue   |       | nue   |       | que   |       |       |
| vn   |       | lvn   |       | nvn   |       | qun   |       |       |

|              | sh     | t     | w    | x     | y     | z     | zh     |     |
| ------------ | ------ | ----- | ---- | ----- | ----- | ----- | ------ | --- |
| a            | sha    | ta    | wa   |       | ya    | za    | zha    |     |
| ai           | shai   | tai   | wai  | xai   | yai   | zai   | zhai   |     |
| an           | shan   | tan   | wan  |       | yan   | zan   | zhan   |     |
| ang          | shang  | tang  | wang |       | yang  | zang  | zhang  |     |
| ao           | shao   | tao   | wao  |       | yao   | zao   | zhao   |     |
| e            | she    | te    | we   | xe    | yee   | ze    | zhe    |     |
| ei           | shei   | tei   | wei  | xei   | yei   | zei   | zhei   |     |
| en           | shen   | ten   | wen  | xen   | yen   | zen   | zhen   |     |
| eng          | sheng  | teng  | weng |       |       | zeng  | zheng  |     |
| er           |        |       |      |       |       |       |        |     |
| i            | shyi   | ti    | wi   | xi    | yi    | zyi   | zhyi   |     |
| ia           |        | tia   |      | xia   |       |       |        |     |
| ian          |        | tian  |      | xian  |       |       |        |     |
| iang         |        | tiang |      | xiang |       |       |        |     |
| iao          |        | tiao  |      | xiao  |       |       |        |     |
| ie           |        | tie   |      | xie   |       |       |        |     |
| in           |        | tin   |      | xin   |       |       |        |     |
| ing          |        | ting  |      | xing  |       |       |        |     |
| iong         |        | tiong |      | xiong |       |       |        |     |
| iu           |        | tiu   |      | xiu   |       |       |        |     |
| o            | sho    | to    | wo   |       | yo    | zo    | zho    |     |
| ong          | shong  | tong  | wong |       | yong  | zong  | zhong  |     |
| ou           | shou   | tou   | wou  |       | you   | zou   | zhou   |     |
| u            | shu    | tu    | wu   | xwu   | ywu   | zu    | zhu    |     |
| ua           | shua   | tua   |      |       |       | zua   | zhua   |     |
| uai          | shuai  | tuai  |      |       |       | zuai  | zhuai  |     |
| uan          | shuan  | tuan  |      |       |       | zuan  | zhuan  |     |
| uang         | shuang | tuang |      |       |       | zuang | zhuang |     |
| ui           | shui   | tui   |      |       |       | zui   | zhui   |     |
| un           | shun   | tun   |      |       |       | zun   | zhun   |     |
| uo           | shuo   | tuo   |      |       |       | zuo   | zhuo   |     |
| v            |        |       |      | xu    | yu    |       |        |     |
| van          |        |       |      | xuan  | yuan  |       |        |     |
| vang         |        |       |      | xuang | yuang |       |        |     |
| ve           |        |       |      | xue   | yue   |       |        |     |
| vn           |        |       |      | xun   | yun   |       |        |     |
| 整体认读音节 | zhi    | chi   | shi  | ri    | zi    | ci    | si     | ye  |

## 参考翻唱作品

生之响往（乐队的夏天版）

词曲：赵子健

原唱：刺猬乐队

翻唱：陈子瑜

{{< bilibilibv BV1vT4y1w7mn >}}

没有理想的人不伤心

词曲：彭磊

原唱：新裤子乐队

翻唱：陈水若

{{< bilibilibv BV1AK4y1e7t1 >}}

## 引用

[https://studiovoice.msxiaobing.com](https://studiovoice.msxiaobing.com/)

