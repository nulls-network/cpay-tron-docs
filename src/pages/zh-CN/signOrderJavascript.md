---
title: 生成签名与解签(Code)
description: 生成签名与解签(Code)
layout: ../../layouts/MainLayout.astro
---
## 说明

使用代码，生成签名数据。
对接口参数使用商户私钥进行签名，一方面为了确保订单数据没有被篡改，一方面可以用过签名数据解出签名者公钥，确认商户身份。

## 如何使用

### Nodejs

参考工具地址： https://github.com/nulls-network/sign-tool-nodejs.git

### C#

参考工具地址： https://github.com/nulls-network/csharp-sign.git

### Java

参考工具地址： https://github.com/nulls-network/java-cpay-sign.git
