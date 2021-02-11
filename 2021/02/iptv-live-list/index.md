# 中国移动电视频道直播源


通过黑鸟扫源工具[^1]扫了一些移动的直播源，稍微整理了下。建议使用黑鸟播放器在 `playlist` 目录添加播放列表后观看，这样可以直接支持回看。

<!--more-->

## 北京移动

支持回看，手动回看方式为在播放链接后面加上 `?playseek=20210210190000-20210210200000`，其中 `20210210190000-20210210200000` 为时间段。[^2]

构造的回看地址同样支持 `ffmpeg` 录制。

```markdown
央视超清
CCTV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226226/index.m3u8
CCTV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226346/index.m3u8
CCTV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226431/index.m3u8
CCTV2,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226230/index.m3u8
CCTV2,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226371/index.m3u8
CCTV2,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226472/index.m3u8
CCTV3,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226471/index.m3u8
CCTV4,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226335/index.m3u8
CCTV4,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226470/index.m3u8
CCTV5,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226469/index.m3u8
CCTV5+,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226225/index.m3u8
CCTV5+,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226349/index.m3u8
CCTV5+,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226458/index.m3u8
CCTV6,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226468/index.m3u8
CCTV7,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226234/index.m3u8
CCTV7,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226467/index.m3u8
CCTV8,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226485/index.m3u8
CCTV9,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226236/index.m3u8
CCTV9,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226465/index.m3u8
CCTV10,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226227/index.m3u8
CCTV10,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226464/index.m3u8
CCTV11,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226334/index.m3u8
CCTV11,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226463/index.m3u8
CCTV12,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226228/index.m3u8
CCTV12,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226462/index.m3u8
CCTV13,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226316/index.m3u8
CCTV14,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226229/index.m3u8
CCTV14,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226461/index.m3u8
CCTV15,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226333/index.m3u8
CCTV15,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226460/index.m3u8
CCTV17,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226318/index.m3u8
CCTV17,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226459/index.m3u8
CCTV 中视购物,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226385/index.m3u8
卫视超清
安徽卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226223/index.m3u8
安徽卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226499/index.m3u8
北京卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226224/index.m3u8
北京卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226367/index.m3u8
北京卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226436/index.m3u8
北京卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226441/index.m3u8
东方卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226237/index.m3u8
东方卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226364/index.m3u8
东方卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226505/index.m3u8
东南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226406/index.m3u8
东南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226496/index.m3u8
广东卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226238/index.m3u8
广东卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226508/index.m3u8
贵州卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226497/index.m3u8
河北卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226507/index.m3u8
黑龙江卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226239/index.m3u8
黑龙江卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226498/index.m3u8
湖北卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226240/index.m3u8
湖北卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226503/index.m3u8
湖南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226509/index.m3u8
江苏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226242/index.m3u8
江苏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226366/index.m3u8
江苏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226506/index.m3u8
江西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226243/index.m3u8
辽宁卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226500/index.m3u8
山东卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226244/index.m3u8
山东卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226501/index.m3u8
深圳卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226245/index.m3u8
深圳卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226495/index.m3u8
天津卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226246/index.m3u8
天津卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226502/index.m3u8
浙江卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226247/index.m3u8
浙江卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226365/index.m3u8
浙江卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226504/index.m3u8
BTV 系列
BTV 财经,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226560/index.m3u8
BTV 东奥纪实,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226438/index.m3u8
BTV 科教,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226559/index.m3u8
BTV 青年,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226562/index.m3u8
BTV 生活,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226561/index.m3u8
BTV 文艺,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226440/index.m3u8
BTV 新闻,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226437/index.m3u8
BTV 影视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226486/index.m3u8
NewTV 系列
NewTV 爱情喜剧,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226322/index.m3u8
NewTV 超级电视剧,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226253/index.m3u8
NewTV 超级电视剧,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226368/index.m3u8
NewTV 超级电影,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226233/index.m3u8
NewTV 超级电影,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226369/index.m3u8
NewTV 超级体育,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226232/index.m3u8
NewTV 超级体育,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226348/index.m3u8
NewTV 超级综艺,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226231/index.m3u8
NewTV 超级综艺,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226370/index.m3u8
NewTV 潮妈辣婆,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226286/index.m3u8
NewTV 动作电影,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226329/index.m3u8
NewTV 古装剧场,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226323/index.m3u8
NewTV 家庭剧场,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226330/index.m3u8
NewTV 金牌综艺,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226347/index.m3u8
NewTV 惊悚悬疑,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225921/index.m3u8
NewTV 惊悚悬疑,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226423/index.m3u8
NewTV 精品大剧,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226331/index.m3u8
NewTV 精品纪录,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226332/index.m3u8
NewTV 军旅剧场,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226324/index.m3u8
NewTV 军事评论,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226326/index.m3u8
NewTV 农业致富,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226304/index.m3u8
NewTV 武博世界,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226320/index.m3u8
NewTV 炫舞未来,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226248/index.m3u8
NewTV 怡伴健康,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226327/index.m3u8
NewTV 中国功夫,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226321/index.m3u8
其他超清
CETV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226494/index.m3u8
茶频道,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226548/index.m3u8
大健康,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226556/index.m3u8
风尚购物,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226342/index.m3u8
好享购物,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226344/index.m3u8
黑莓电竞,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225931/index.m3u8
黑莓电影,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225927/index.m3u8
黑莓动画,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225914/index.m3u8
聚鲨环球精选,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226429/index.m3u8
卡酷少儿,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226558/index.m3u8
快乐垂钓,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226549/index.m3u8
快乐购,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226341/index.m3u8
萌宠 TV,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226555/index.m3u8
淘 BABY,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226554/index.m3u8
淘电影,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226552/index.m3u8
淘剧场,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226553/index.m3u8
淘娱乐,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226551/index.m3u8
未知,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225929/index.m3u8
未知,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226325/index.m3u8
未知,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226425/index.m3u8
央广购物,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226363/index.m3u8
优购物,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226386/index.m3u8
720P 高清
CCTV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226338/index.m3u8
CCTV11,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225869/index.m3u8
CCTV13,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226339/index.m3u8
CCTV15,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225940/index.m3u8
凤凰卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225942/index.m3u8
凤凰卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225948/index.m3u8
NewTV 精品体育,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226328/index.m3u8
家有购物,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226343/index.m3u8
标清频道
CCTV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226432/index.m3u8
CCTV2,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226457/index.m3u8
CCTV2,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225934/index.m3u8
CCTV3,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226456/index.m3u8
CCTV4,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226455/index.m3u8
CCTV4,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226156/index.m3u8
CCTV5,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226454/index.m3u8
CCTV6,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226453/index.m3u8
CCTV7,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225863/index.m3u8
CCTV7,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226452/index.m3u8
CCTV8,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226451/index.m3u8
CCTV9,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226450/index.m3u8
CCTV10,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226449/index.m3u8
CCTV10,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225868/index.m3u8
CCTV11,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226448/index.m3u8
CCTV12,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226447/index.m3u8
CCTV12,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225870/index.m3u8
CCTV13,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226446/index.m3u8
CCTV14,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226445/index.m3u8
CCTV15,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226444/index.m3u8
CCTV17,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226442/index.m3u8
安徽卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226490/index.m3u8
安徽卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225873/index.m3u8
兵团卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226541/index.m3u8
东方卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226519/index.m3u8
东南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226517/index.m3u8
东南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225876/index.m3u8
甘肃卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225877/index.m3u8
甘肃卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226414/index.m3u8
甘肃卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226545/index.m3u8
广东卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226535/index.m3u8
广西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225879/index.m3u8
广西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226408/index.m3u8
广西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226534/index.m3u8
贵州卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226405/index.m3u8
贵州卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226521/index.m3u8
贵州卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225880/index.m3u8
海南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225890/index.m3u8
海南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226427/index.m3u8
河北卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226409/index.m3u8
河北卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226536/index.m3u8
河北卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225881/index.m3u8
河南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226525/index.m3u8
黑龙江卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226524/index.m3u8
湖北卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226520/index.m3u8
湖南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226493/index.m3u8
吉林卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225886/index.m3u8
吉林卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226426/index.m3u8
吉林卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226533/index.m3u8
江苏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226491/index.m3u8
江西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226522/index.m3u8
辽宁卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226488/index.m3u8
辽宁卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226336/index.m3u8
南方卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226540/index.m3u8
内蒙古卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225891/index.m3u8
内蒙古卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226415/index.m3u8
内蒙古卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226530/index.m3u8
宁夏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225892/index.m3u8
宁夏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226413/index.m3u8
宁夏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226528/index.m3u8
青海卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225893/index.m3u8
青海卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226412/index.m3u8
青海卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226529/index.m3u8
三沙卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226544/index.m3u8
厦门卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226542/index.m3u8
山东教育卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226419/index.m3u8
山东教育卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225908/index.m3u8
山东教育卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226526/index.m3u8
山东卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226487/index.m3u8
山西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225895/index.m3u8
山西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226410/index.m3u8
山西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226531/index.m3u8
陕西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225896/index.m3u8
陕西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226411/index.m3u8
陕西卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226532/index.m3u8
四川卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226407/index.m3u8
四川卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226523/index.m3u8
四川卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225898/index.m3u8
天津卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226489/index.m3u8
西藏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226527/index.m3u8
西藏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225900/index.m3u8
西藏卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226428/index.m3u8
新疆卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226422/index.m3u8
新疆卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226546/index.m3u8
新疆卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225901/index.m3u8
云南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226424/index.m3u8
云南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226543/index.m3u8
云南卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225902/index.m3u8
浙江卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226492/index.m3u8
重庆卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226518/index.m3u8
重庆卫视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226337/index.m3u8
BTV 财经,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226516/index.m3u8
BTV 冬奥纪实,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226515/index.m3u8
BTV 国际,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226510/index.m3u8
BTV 科教,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226434/index.m3u8
BTV 青年,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226513/index.m3u8
BTV 生活,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226514/index.m3u8
BTV 文艺,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226435/index.m3u8
BTV 新闻,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226512/index.m3u8
BTV 影视,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226433/index.m3u8
CETV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225905/index.m3u8
CETV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226417/index.m3u8
CETV1,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226538/index.m3u8
CETV2,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226537/index.m3u8
CETV4,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226362/index.m3u8
CETV4,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226557/index.m3u8
CGTN,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225867/index.m3u8
CGTN,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226404/index.m3u8
CGTN,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226443/index.m3u8
CGTN 纪录,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226403/index.m3u8
CGTN 纪录,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225866/index.m3u8
哈哈炫动,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226421/index.m3u8
哈哈炫动,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225909/index.m3u8
嘉佳卡通,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226539/index.m3u8
聚鲨环球精选,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226345/index.m3u8
卡酷少儿,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226418/index.m3u8
卡酷少儿,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225907/index.m3u8
卡酷少儿,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226511/index.m3u8
优漫卡通,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221226420/index.m3u8
优漫卡通,http://otttv.bj.chinamobile.com/TVOD/88888888/224/3221225910/index.m3u8
```

## 杭州移动（一）

有两个 4K 频道，但是 FHD 的央视频道不全，同样支持回看。

```markdown
4K 超清
BesTV 4K,http://117.148.187.56/PLTV/88888888/224/3221226718/index.m3u8
CCTV4K,http://117.148.187.56/PLTV/88888888/224/3221226758/index.m3u8
央视超清
CCTV1,http://117.148.187.56/PLTV/88888888/224/3221226154/index.m3u8
CCTV1,http://117.148.187.56/PLTV/88888888/224/3221226541/index.m3u8
CCTV2,http://117.148.187.56/PLTV/88888888/224/3221226138/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226400/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226687/index.m3u8
CCTV5+,http://117.148.187.56/PLTV/88888888/224/3221226406/index.m3u8
CCTV7,http://117.148.187.56/PLTV/88888888/224/3221226122/index.m3u8
CCTV9,http://117.148.187.56/PLTV/88888888/224/3221226156/index.m3u8
CCTV10,http://117.148.187.56/PLTV/88888888/224/3221226199/index.m3u8
CCTV12,http://117.148.187.56/PLTV/88888888/224/3221226167/index.m3u8
CCTV14,http://117.148.187.56/PLTV/88888888/224/3221226126/index.m3u8
卫视超清
安徽卫视,http://117.148.187.56/PLTV/88888888/224/3221226185/index.m3u8
北京卫视,http://117.148.187.56/PLTV/88888888/224/3221226164/index.m3u8
东方卫视,http://117.148.187.56/PLTV/88888888/224/3221226142/index.m3u8
广东卫视,http://117.148.187.56/PLTV/88888888/224/3221226225/index.m3u8
广东卫视,http://117.148.187.56/PLTV/88888888/224/3221226408/index.m3u8
黑龙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226201/index.m3u8
黑龙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226555/index.m3u8
湖北卫视,http://117.148.187.56/PLTV/88888888/224/3221226197/index.m3u8
湖北卫视,http://117.148.187.56/PLTV/88888888/224/3221226547/index.m3u8
湖南卫视,http://117.148.187.56/PLTV/88888888/224/3221226162/index.m3u8
湖南卫视,http://117.148.187.56/PLTV/88888888/224/3221226553/index.m3u8
江苏卫视,http://117.148.187.56/PLTV/88888888/224/3221226140/index.m3u8
江苏卫视,http://117.148.187.56/PLTV/88888888/224/3221226414/index.m3u8
江西卫视,http://117.148.187.56/PLTV/88888888/224/3221226557/index.m3u8
山东卫视,http://117.148.187.56/PLTV/88888888/224/3221226144/index.m3u8
山东卫视,http://117.148.187.56/PLTV/88888888/224/3221226410/index.m3u8
深圳卫视,http://117.148.187.56/PLTV/88888888/224/3221226203/index.m3u8
天津卫视,http://117.148.187.56/PLTV/88888888/224/3221226182/index.m3u8
天津卫视,http://117.148.187.56/PLTV/88888888/224/3221226412/index.m3u8
浙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226136/index.m3u8
浙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226551/index.m3u8
其他超清
BesTV Live,http://117.148.187.56/PLTV/88888888/224/3221226685/index.m3u8
NewTV 爱情喜剧,http://117.148.187.56/PLTV/88888888/224/3221226660/index.m3u8
NewTV 潮妈辣婆,http://117.148.187.56/PLTV/88888888/224/3221226666/index.m3u8
NewTV 动作电影,http://117.148.187.56/PLTV/88888888/224/3221226747/index.m3u8
NewTV 古装剧场,http://117.148.187.56/PLTV/88888888/224/3221226753/index.m3u8
NewTV 家庭剧场,http://117.148.187.56/PLTV/88888888/224/3221226642/index.m3u8
NewTV 金牌综艺,http://117.148.187.56/PLTV/88888888/224/3221226749/index.m3u8
NewTV 惊悚悬疑,http://117.148.187.56/PLTV/88888888/224/3221226656/index.m3u8
NewTV 精品大剧,http://117.148.187.56/PLTV/88888888/224/3221226668/index.m3u8
NewTV 精品纪录,http://117.148.187.56/PLTV/88888888/224/3221226735/index.m3u8
NewTV 精品纪录,http://117.148.187.56/PLTV/88888888/224/3221226763/index.m3u8
NewTV 精品体育,http://117.148.187.56/PLTV/88888888/224/3221226819/index.m3u8
NewTV 军旅剧场,http://117.148.187.56/PLTV/88888888/224/3221226682/index.m3u8
NewTV 军事评论,http://117.148.187.56/PLTV/88888888/224/3221226658/index.m3u8
NewTV 农业致富,http://117.148.187.56/PLTV/88888888/224/3221226664/index.m3u8
NewTV 武博世界,http://117.148.187.56/PLTV/88888888/224/3221226737/index.m3u8
NewTV 炫舞未来,http://117.148.187.56/PLTV/88888888/224/3221226817/index.m3u8
NewTV 怡伴健康,http://117.148.187.56/PLTV/88888888/224/3221226757/index.m3u8
都市剧场,http://117.148.187.56/PLTV/88888888/224/3221226825/index.m3u8
风尚购物,http://117.148.187.56/PLTV/88888888/224/3221226761/index.m3u8
黑莓电竞,http://117.148.187.56/PLTV/88888888/224/3221226724/index.m3u8
黑莓电竞,http://117.148.187.56/PLTV/88888888/224/3221226755/index.m3u8
黑莓动画,http://117.148.187.56/PLTV/88888888/224/3221226654/index.m3u8
求索纪录,http://117.148.187.56/PLTV/88888888/224/3221226610/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226606/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226608/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226662/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226695/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226751/index.m3u8
移动宽带,http://117.148.187.56/PLTV/88888888/224/3221226756/index.m3u8
720P 高清
CCTV1,http://117.148.187.56/PLTV/88888888/224/3221226527/index.m3u8
CCTV2,http://117.148.187.56/PLTV/88888888/224/3221226468/index.m3u8
CCTV3,http://117.148.187.56/PLTV/88888888/224/3221226431/index.m3u8
CCTV3,http://117.148.187.56/PLTV/88888888/224/3221226485/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226328/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226554/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226556/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226560/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226562/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226645/index.m3u8
CCTV5,http://117.148.187.56/PLTV/88888888/224/3221226649/index.m3u8
CCTV5+,http://117.148.187.56/PLTV/88888888/224/3221226166/index.m3u8
CCTV6,http://117.148.187.56/PLTV/88888888/224/3221226433/index.m3u8
CCTV6,http://117.148.187.56/PLTV/88888888/224/3221226487/index.m3u8
CCTV7,http://117.148.187.56/PLTV/88888888/224/3221226470/index.m3u8
CCTV8,http://117.148.187.56/PLTV/88888888/224/3221226330/index.m3u8
CCTV8,http://117.148.187.56/PLTV/88888888/224/3221226493/index.m3u8
CCTV10,http://117.148.187.56/PLTV/88888888/224/3221226472/index.m3u8
CCTV12,http://117.148.187.56/PLTV/88888888/224/3221226563/index.m3u8
CCTV14,http://117.148.187.56/PLTV/88888888/224/3221226565/index.m3u8
安徽卫视,http://117.148.187.56/PLTV/88888888/224/3221226490/index.m3u8
北京卫视,http://117.148.187.56/PLTV/88888888/224/3221226545/index.m3u8
茶频道,http://117.148.187.56/PLTV/88888888/224/3221226744/index.m3u8
东方卫视,http://117.148.187.56/PLTV/88888888/224/3221226549/index.m3u8
东方卫视,http://117.148.187.56/PLTV/88888888/224/3221226581/index.m3u8
凤凰卫视,http://117.148.187.56/PLTV/88888888/224/3221226368/index.m3u8
凤凰资讯,http://117.148.187.56/PLTV/88888888/224/3221226491/index.m3u8
广东卫视,http://117.148.187.56/PLTV/88888888/224/3221226585/index.m3u8
黑龙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226492/index.m3u8
湖北卫视,http://117.148.187.56/PLTV/88888888/224/3221226494/index.m3u8
家有购物,http://117.148.187.56/PLTV/88888888/224/3221226741/index.m3u8
家有购物,http://117.148.187.56/PLTV/88888888/224/3221226777/index.m3u8
江苏卫视,http://117.148.187.56/PLTV/88888888/224/3221226567/index.m3u8
江西卫视,http://117.148.187.56/PLTV/88888888/224/3221226128/index.m3u8
山东卫视,http://117.148.187.56/PLTV/88888888/224/3221226587/index.m3u8
深圳卫视,http://117.148.187.56/PLTV/88888888/224/3221226486/index.m3u8
深圳卫视,http://117.148.187.56/PLTV/88888888/224/3221226543/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226120/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226176/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226178/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226179/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226181/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226245/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226360/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226475/index.m3u8
未知,http://117.148.187.56/PLTV/88888888/224/3221226479/index.m3u8
未知电竞,http://117.148.187.56/PLTV/88888888/224/3221226481/index.m3u8
标清频道
BTV 冬奥纪实,http://117.148.187.56/PLTV/88888888/224/3221226746/index.m3u8
CCTV1,http://117.148.187.56/PLTV/88888888/224/3221226589/index.m3u8
CCTV1,http://117.148.187.56/PLTV/88888888/224/3221226595/index.m3u8
CCTV10,http://117.148.187.56/PLTV/88888888/224/3221226498/index.m3u8
CCTV11,http://117.148.187.56/PLTV/88888888/224/3221226219/index.m3u8
CCTV12,http://117.148.187.56/PLTV/88888888/224/3221226520/index.m3u8
CCTV13,http://117.148.187.56/PLTV/88888888/224/3221226417/index.m3u8
CCTV13,http://117.148.187.56/PLTV/88888888/224/3221226193/index.m3u8
CCTV14,http://117.148.187.56/PLTV/88888888/224/3221226508/index.m3u8
CCTV15,http://117.148.187.56/PLTV/88888888/224/3221226112/index.m3u8
CCTV2,http://117.148.187.56/PLTV/88888888/224/3221226593/index.m3u8
CCTV4,http://117.148.187.56/PLTV/88888888/224/3221226732/index.m3u8
CCTV4,http://117.148.187.56/PLTV/88888888/224/3221226171/index.m3u8
CCTV7,http://117.148.187.56/PLTV/88888888/224/3221226607/index.m3u8
CCTV9,http://117.148.187.56/PLTV/88888888/224/3221226561/index.m3u8
CCTV9,http://117.148.187.56/PLTV/88888888/224/3221226609/index.m3u8
CETV1,http://117.148.187.56/PLTV/88888888/224/3221226132/index.m3u8
CGTN,http://117.148.187.56/PLTV/88888888/224/3221226314/index.m3u8
CGTN,http://117.148.187.56/PLTV/88888888/224/3221226235/index.m3u8
安徽卫视,http://117.148.187.56/PLTV/88888888/224/3221226611/index.m3u8
北京卫视,http://117.148.187.56/PLTV/88888888/224/3221226518/index.m3u8
北京卫视,http://117.148.187.56/PLTV/88888888/224/3221226583/index.m3u8
兵团卫视,http://117.148.187.56/PLTV/88888888/224/3221226186/index.m3u8
车迷频道,http://117.148.187.56/PLTV/88888888/224/3221226837/index.m3u8
东方卫视,http://117.148.187.56/PLTV/88888888/224/3221226621/index.m3u8
东南卫视,http://117.148.187.56/PLTV/88888888/224/3221226134/index.m3u8
甘肃卫视,http://117.148.187.56/PLTV/88888888/224/3221226187/index.m3u8
广东卫视,http://117.148.187.56/PLTV/88888888/224/3221226510/index.m3u8
广西卫视,http://117.148.187.56/PLTV/88888888/224/3221226211/index.m3u8
贵州卫视,http://117.148.187.56/PLTV/88888888/224/3221226146/index.m3u8
哈哈炫动,http://117.148.187.56/PLTV/88888888/224/3221226745/index.m3u8
杭州综合,http://117.148.187.56/PLTV/88888888/224/3221226170/index.m3u8
河北卫视,http://117.148.187.56/PLTV/88888888/224/3221226110/index.m3u8
河南卫视,http://117.148.187.56/PLTV/88888888/224/3221226116/index.m3u8
河南卫视,http://117.148.187.56/PLTV/88888888/224/3221226130/index.m3u8
黑龙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226613/index.m3u8
湖北卫视,http://117.148.187.56/PLTV/88888888/224/3221226512/index.m3u8
湖南卫视,http://117.148.187.56/PLTV/88888888/224/3221226569/index.m3u8
湖南卫视,http://117.148.187.56/PLTV/88888888/224/3221226615/index.m3u8
华数,http://117.148.187.56/PLTV/88888888/224/3221226326/index.m3u8
吉林卫视,http://117.148.187.56/PLTV/88888888/224/3221226158/index.m3u8
嘉佳卡通,http://117.148.187.56/PLTV/88888888/224/3221226461/index.m3u8
嘉兴新闻综合,http://117.148.187.56/PLTV/88888888/224/3221226358/index.m3u8
江苏卫视,http://117.148.187.56/PLTV/88888888/224/3221226522/index.m3u8
江西卫视,http://117.148.187.56/PLTV/88888888/224/3221226617/index.m3u8
金鹰纪实,http://117.148.187.56/PLTV/88888888/224/3221226831/index.m3u8
金鹰卡通,http://117.148.187.56/PLTV/88888888/224/3221226190/index.m3u8
卡酷少儿,http://117.148.187.56/PLTV/88888888/224/3221226184/index.m3u8
辽宁卫视,http://117.148.187.56/PLTV/88888888/224/3221226148/index.m3u8
辽宁卫视,http://117.148.187.56/PLTV/88888888/224/3221226514/index.m3u8
内蒙古卫视,http://117.148.187.56/PLTV/88888888/224/3221226174/index.m3u8
宁夏卫视,http://117.148.187.56/PLTV/88888888/224/3221226209/index.m3u8
青海卫视,http://117.148.187.56/PLTV/88888888/224/3221226191/index.m3u8
山东教育卫视,http://117.148.187.56/PLTV/88888888/224/3221226652/index.m3u8
山西卫视,http://117.148.187.56/PLTV/88888888/224/3221226114/index.m3u8
陕西卫视,http://117.148.187.56/PLTV/88888888/224/3221226177/index.m3u8
深圳卫视,http://117.148.187.56/PLTV/88888888/224/3221226524/index.m3u8
四川卫视,http://117.148.187.56/PLTV/88888888/224/3221226215/index.m3u8
四海钓鱼,http://117.148.187.56/PLTV/88888888/224/3221226533/index.m3u8
天津卫视,http://117.148.187.56/PLTV/88888888/224/3221226488/index.m3u8
天津卫视,http://117.148.187.56/PLTV/88888888/224/3221226516/index.m3u8
西藏卫视,http://117.148.187.56/PLTV/88888888/224/3221226160/index.m3u8
新疆卫视,http://117.148.187.56/PLTV/88888888/224/3221226124/index.m3u8
优漫卡通,http://117.148.187.56/PLTV/88888888/224/3221226172/index.m3u8
优优宝贝,http://117.148.187.56/PLTV/88888888/224/3221226829/index.m3u8
云南卫视,http://117.148.187.56/PLTV/88888888/224/3221226241/index.m3u8
浙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226474/index.m3u8
浙江卫视,http://117.148.187.56/PLTV/88888888/224/3221226619/index.m3u8
重庆卫视,http://117.148.187.56/PLTV/88888888/224/3221226217/index.m3u8
重庆卫视,http://117.148.187.56/PLTV/88888888/224/3221226605/index.m3u8
```

## 杭州移动（二）

基本差不多，支持回看。

```markdown
4K 超清
BesTV 4K,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229311/index.m3u8?fmt=ts2hls
CCTV4K,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229373/index.m3u8?fmt=ts2hls
央视超清
CCTV1,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228318/index.m3u8?fmt=ts2hls
CCTV10,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228327/index.m3u8?fmt=ts2hls
CCTV12,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228312/index.m3u8?fmt=ts2hls
CCTV14,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228335/index.m3u8?fmt=ts2hls
CCTV2,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228348/index.m3u8?fmt=ts2hls
CCTV4,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229749/index.m3u8?fmt=ts2hls
CCTV5,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228965/index.m3u8?fmt=ts2hls
CCTV5+,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229684/index.m3u8?fmt=ts2hls
CCTV7,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228330/index.m3u8?fmt=ts2hls
CCTV9,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228342/index.m3u8?fmt=ts2hls
卫视超清
安徽卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228332/index.m3u8?fmt=ts2hls
北京卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228321/index.m3u8?fmt=ts2hls
东方卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228354/index.m3u8?fmt=ts2hls
广东卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228329/index.m3u8?fmt=ts2hls
黑龙江卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228302/index.m3u8?fmt=ts2hls
湖北卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228357/index.m3u8?fmt=ts2hls
湖南卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228336/index.m3u8?fmt=ts2hls
江苏卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228351/index.m3u8?fmt=ts2hls
山东卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228308/index.m3u8?fmt=ts2hls
深圳卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228314/index.m3u8?fmt=ts2hls
天津卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228320/index.m3u8?fmt=ts2hls
浙江卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228324/index.m3u8?fmt=ts2hls
其他超清
BesTV Live,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228960/index.m3u8?fmt=ts2hls
Y+影院,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229999/index.m3u8?fmt=ts2hls
都市剧场,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229280/index.m3u8?fmt=ts2hls
好易购,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229839/index.m3u8?fmt=ts2hls
求索纪录,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228972/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228975/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228980/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228983/index.m3u8?fmt=ts2hls
移动宽带,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229434/index.m3u8?fmt=ts2hls
游戏风云,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229320/index.m3u8?fmt=ts2hls
720P 高清
CCTV2,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228482/index.m3u8?fmt=ts2hls
CCTV3,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228563/index.m3u8?fmt=ts2hls
CCTV5,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228570/index.m3u8?fmt=ts2hls
CCTV5,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229687/index.m3u8?fmt=ts2hls
CCTV5+,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228372/index.m3u8?fmt=ts2hls
CCTV6,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228566/index.m3u8?fmt=ts2hls
CCTV7,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228507/index.m3u8?fmt=ts2hls
CCTV8,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228569/index.m3u8?fmt=ts2hls
CCTV10,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228513/index.m3u8?fmt=ts2hls
CCTV12,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228485/index.m3u8?fmt=ts2hls
CCTV14,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228488/index.m3u8?fmt=ts2hls
CCTV17,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229762/index.m3u8?fmt=ts2hls
安徽卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228506/index.m3u8?fmt=ts2hls
茶频道,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229404/index.m3u8?fmt=ts2hls
东方卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228519/index.m3u8?fmt=ts2hls
广东卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228522/index.m3u8?fmt=ts2hls
黑龙江卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228509/index.m3u8?fmt=ts2hls
湖北卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228512/index.m3u8?fmt=ts2hls
江苏卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228494/index.m3u8?fmt=ts2hls
江西卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228293/index.m3u8?fmt=ts2hls
山东卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228515/index.m3u8?fmt=ts2hls
深圳卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228497/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228344/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228360/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228365/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228366/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228384/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228387/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228575/index.m3u8?fmt=ts2hls
未知,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228581/index.m3u8?fmt=ts2hls
未知 3D,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228578/index.m3u8?fmt=ts2hls
未知电竞,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228572/index.m3u8?fmt=ts2hls
标清频道
BTV 冬奥纪实,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229407/index.m3u8?fmt=ts2hls
CCTV1,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228449/index.m3u8?fmt=ts2hls
CCTV1,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228504/index.m3u8?fmt=ts2hls
CCTV2,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228452/index.m3u8?fmt=ts2hls
CCTV4,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229319/index.m3u8?fmt=ts2hls
CCTV7,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228455/index.m3u8?fmt=ts2hls
CCTV9,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228458/index.m3u8?fmt=ts2hls
CCTV9,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228510/index.m3u8?fmt=ts2hls
CCTV10,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228474/index.m3u8?fmt=ts2hls
CCTV11,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228297/index.m3u8?fmt=ts2hls
CCTV12,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228477/index.m3u8?fmt=ts2hls
CCTV13,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228549/index.m3u8?fmt=ts2hls
CCTV13,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228266/index.m3u8?fmt=ts2hls
CCTV14,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228461/index.m3u8?fmt=ts2hls
CCTV15,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228281/index.m3u8?fmt=ts2hls
CETV1,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228285/index.m3u8?fmt=ts2hls
CGTN,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228545/index.m3u8?fmt=ts2hls
CGTN,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228416/index.m3u8?fmt=ts2hls
安徽卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228470/index.m3u8?fmt=ts2hls
北京卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228467/index.m3u8?fmt=ts2hls
北京卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228500/index.m3u8?fmt=ts2hls
兵团卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228419/index.m3u8?fmt=ts2hls
车迷频道,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229410/index.m3u8?fmt=ts2hls
东方卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228486/index.m3u8?fmt=ts2hls
东南卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228269/index.m3u8?fmt=ts2hls
甘肃卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228288/index.m3u8?fmt=ts2hls
广东卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228495/index.m3u8?fmt=ts2hls
广西卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228290/index.m3u8?fmt=ts2hls
贵州卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228300/index.m3u8?fmt=ts2hls
海南卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228294/index.m3u8?fmt=ts2hls
杭州综合,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228393/index.m3u8?fmt=ts2hls
河北卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228278/index.m3u8?fmt=ts2hls
河南卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228309/index.m3u8?fmt=ts2hls
黑龙江卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228473/index.m3u8?fmt=ts2hls
湖北卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228476/index.m3u8?fmt=ts2hls
湖南卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228483/index.m3u8?fmt=ts2hls
湖南卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228516/index.m3u8?fmt=ts2hls
华数,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228564/index.m3u8?fmt=ts2hls
吉林卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228275/index.m3u8?fmt=ts2hls
嘉佳卡通,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228593/index.m3u8?fmt=ts2hls
嘉兴新闻综合,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228582/index.m3u8?fmt=ts2hls
江苏卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228464/index.m3u8?fmt=ts2hls
江西卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228479/index.m3u8?fmt=ts2hls
金鹰纪实,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229328/index.m3u8?fmt=ts2hls
金鹰卡通,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228362/index.m3u8?fmt=ts2hls
卡酷少儿,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228375/index.m3u8?fmt=ts2hls
辽宁卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228317/index.m3u8?fmt=ts2hls
辽宁卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228498/index.m3u8?fmt=ts2hls
内蒙古卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228339/index.m3u8?fmt=ts2hls
宁夏卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228284/index.m3u8?fmt=ts2hls
青海卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228287/index.m3u8?fmt=ts2hls
山西卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228291/index.m3u8?fmt=ts2hls
陕西卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228272/index.m3u8?fmt=ts2hls
深圳卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228489/index.m3u8?fmt=ts2hls
四川卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228263/index.m3u8?fmt=ts2hls
四海钓鱼,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228662/index.m3u8?fmt=ts2hls
天津卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228492/index.m3u8?fmt=ts2hls
天津卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228503/index.m3u8?fmt=ts2hls
西藏卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228345/index.m3u8?fmt=ts2hls
新疆卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228326/index.m3u8?fmt=ts2hls
优漫卡通,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228378/index.m3u8?fmt=ts2hls
优优宝贝,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221229380/index.m3u8?fmt=ts2hls
云南卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228303/index.m3u8?fmt=ts2hls
浙江卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228480/index.m3u8?fmt=ts2hls
浙江卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228491/index.m3u8?fmt=ts2hls
重庆卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228296/index.m3u8?fmt=ts2hls
重庆卫视,http://hwltc.tv.cdn.zj.chinamobile.com/PLTV/88888888/224/3221228501/index.m3u8?fmt=ts2hls
```

移动还有其他 ip 可以用，就不贴整个列表了，贴个 ip 可以自己扫，反正都是烂大街的了。[^3]

```markdown
112.17.40.12 # 杭州移动
39.134.176.148 # 杭州移动
39.134.24.24 # 陕西移动
```

## CCTV4K HDR 杜比声

由恩山无线论坛用户 `Dkdmnv` [^4] 分享，可能会失效，修改 `4K0205` 部分的数字，本质上就是日期格式。

可以通过黑鸟扫源工具来获得最新的有效源地址，从 `0000-1231` 扫一下很快的，看下哪个地址是直播，失效的地址都只有 10 秒的片段。

同样的，如果 ip 段失效了或者速度不佳，也可以用工具扫一下换一个好的。

```markdown
http://117.148.165.106/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.165.105/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.165.124/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.165.245/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.165.254/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.191.81/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.191.80/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.191.82/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.191.83/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://117.148.191.109/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
http://111.161.121.214/livews-4k.5club.cctv.cn/live/4K0205.stream/playlist.m3u8
```

视频信息显示支持 HDR 和杜比声

```markdown
General
ID                                       : 1 (0x1)
Complete name                            : cctv4k-hdr-dolby-000.ts
Format                                   : MPEG-TS
File size                                : 18.6 MiB
Duration                                 : 5 s 800 ms
Overall bit rate mode                    : Variable
Overall bit rate                         : 26.6 Mb/s

Video
ID                                       : 256 (0x100)
Menu ID                                  : 1 (0x1)
Format                                   : HEVC
Format/Info                              : High Efficiency Video Coding
Format profile                           : Main@L5@Main
Codec ID                                 : 36
Duration                                 : 5 s 866 ms
Bit rate                                 : 24.9 Mb/s
Width                                    : 3 840 pixels
Height                                   : 2 160 pixels
Display aspect ratio                     : 16:9
Frame rate                               : 30.000 FPS
Standard                                 : Component
Color space                              : YUV
Chroma subsampling                       : 4:2:0 (Type 2)
Bit depth                                : 8 bits
Bits/(Pixel*Frame)                       : 0.100
Stream size                              : 17.4 MiB (94%)
Color range                              : Limited
Color primaries                          : BT.2020
Transfer characteristics                 : HLG / BT.2020 (10-bit)
Matrix coefficients                      : BT.2020 non-constant

Audio
ID                                       : 257 (0x101)
Menu ID                                  : 1 (0x1)
Format                                   : AC-3
Format/Info                              : Audio Coding 3
Commercial name                          : Dolby Digital
Codec ID                                 : 129
Duration                                 : 5 s 760 ms
Bit rate mode                            : Constant
Bit rate                                 : 448 kb/s
Channel(s)                               : 6 channels
Channel layout                           : L R C LFE Ls Rs
Sampling rate                            : 48.0 kHz
Frame rate                               : 31.250 FPS (1536 SPF)
Compression mode                         : Lossy
Delay relative to video                  : 13 ms
Stream size                              : 315 KiB (2%)
Service kind                             : Complete Main

Menu
ID                                       : 4096 (0x1000)
Menu ID                                  : 1 (0x1)
Duration                                 : 5 s 800 ms
List                                     : 256 (0x100) (HEVC) / 257 (0x101) (AC-3)
Service name                             : Service01
Service provider                         : FFmpeg
Service type                             : digital television
```

[^1]: [黑鸟博客](https://guihet.com/)
[^2]: [https://www.right.com.cn/forum/thread-4069194-1-1.html](https://www.right.com.cn/forum/thread-4069194-1-1.html)
[^3]: [https://www.right.com.cn/forum/thread-4071317-1-1.html](https://www.right.com.cn/forum/thread-4071317-1-1.html)
[^4]: [CCTV4K HDR 杜比声](https://www.right.com.cn/forum/thread-4029891-1-1.html)

