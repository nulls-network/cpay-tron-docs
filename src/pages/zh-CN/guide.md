---
title: 接入指引
description: 详细说明
layout: ../../layouts/MainLayout.astro
---
# 生成商户号和秘钥
系统在架构时，通过使用 椭圆曲线数字签名 的方式，更crypto-native，也简化了商户的接入流程。区别于传统支付系统，不需要在开通商户号和配置秘钥。仅需要通过钱包工具或者相应的SDK生成秘钥对即可，如Metamask/ ethers.js 生成账户和秘钥。

## 使用Metamask
进入Metamask官网 https://metamask.io/download/ 下载对应的客户端,这里推荐使用 Metamask的 Chrome插件。([详细操作方法](/zh-CN/other/wallet)) 

## 使用 ethers.js SDK

### Install 
```
npm install --save ethers
```
参考文档：https://docs.ethers.io/v5/getting-started/#installing

### 生成Account
```
ethers.Wallet.createRandom()
```
参考文档：https://docs.ethers.io/v5/api/signer/#Wallet


## 使用说明
后台采用Web3.0架构，在浏览器访问时，需要支持EVM的钱包插件。如Metamask / MataWallet / TrustWallet 等。

钱包连接后，即可查看用该钱包私钥签名发起的所有交易信息。

## 订单请求签名
可查看签名指引，如果使用PHP / JAVA等语言，建议使用签名服务进行签名及验签。([查看签名指引](/zh-CN/other/signOrder)) 

