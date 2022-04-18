---
title: 生成签名(JS)
description: 生成签名(JS)
layout: ../../layouts/MainLayout.astro
---
## 说明

使用nodejs，依赖ethers.js库，生成签名数据。
对接口参数使用商户私钥进行签名，一方面为了确保订单数据没有被篡改，一方面可以用过签名数据解出签名者公钥，确认商户身份。

## 如何使用

参考工具地址： https://github.com/nulls-network/sign-tool-nodejs.git

## 使用示例
### 生成签名：

```
  npm run sign
```

![sign](/sign-tool1.png)
### 反解公钥

```
  npm run recover
```
![sign](/sign-tool2.png)





