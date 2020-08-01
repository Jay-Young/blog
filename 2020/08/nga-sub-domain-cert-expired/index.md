# NGA社区子域名证书过期引发的UI爆炸惨案


NGA 社区 PC 网页端爆炸了一天了，到现在还没解决，果然是移动端 App > 小程序 > PC 端 > Web 端。

打开浏览器开发者工具，不难发现所有的 js 文件都加载失败了。点开连接，发现原来是 img4.nga.178.com 域名的证书早就过期了。目前 NGA 的两个主站域名，bbs.nga.cn 和 nga.178.com 的证书都没有过期，而且都采用的是泛域名证书 😓。而 CN 域名强制跳转 https，COM 域名不强制跳转，所以不加 https 的 nga.178.com 访问是没有任何问题的。临时解决办法就是访问[https://img4.nga.178.com](https://img4.nga.178.com)，然后忽略证书错误让所有 js 文件都能正确加载。等 NGA 社区更新证书后记得重新启用警告。另外一个稍微麻烦点的办法就是将所有没有加载成功的 js 文件代码复制到油猴脚本里运行。

{{< image src="/images/hugo/nga-sub-domain-cert-expired/Snipaste_2020-08-02_03-03-17.png" title="" >}}
{{< image src="/images/hugo/nga-sub-domain-cert-expired/Snipaste_2020-08-02_03-04-17.png" title="" >}}
{{< image src="/images/hugo/nga-sub-domain-cert-expired/Snipaste_2020-08-02_03-04-48.png" title="" >}}
{{< image src="/images/hugo/nga-sub-domain-cert-expired/Snipaste_2020-08-02_03-05-30.png" title="" >}}
{{< image src="/images/hugo/nga-sub-domain-cert-expired/Snipaste_2020-08-02_03-06-12.png" title="" >}}
{{< image src="/images/hugo/nga-sub-domain-cert-expired/Snipaste_2020-08-02_03-28-22.png" title="" >}}

