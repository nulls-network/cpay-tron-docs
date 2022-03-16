---
title: 创建订单
description: 创建订单
layout: ../../layouts/MainLayout.astro
---

## 介绍

创建订单是调用 http 接口请求，需要您对前端知识有一定的了解。首先，您可以访问我们提供的[测试页面](https://dpay-tron-merchant.vercel.app/)查看效果，源码仓库在[这里](https://github.com/nulls-network/dpay-tron-merchant)，供开发参考。

## 订单的运作

成功调用创建订单的接口后，系统会随机生成一个收款的钱包地址，以及设定**20 分钟**的收款时限，在时效范围内监听订单的付款状态。订单创建以后，就可以在[商户后台管理系统](https://dpay-admin-v2.vercel.app/dashboard)中查看订单状态了。

商户：这笔订单跟我有什么关系呢？我的收入哪里去了？

别着急，接下来看一下，订单具体是怎么生成的，该如何提现？

## 订单的生成

调用创建订单接口的参数是需要经过钱包的私钥进行加密的，以此来证明您是订单的收款方，同时也保证订单不被篡改。如果您还不了解怎么获得钱包，这里有一份[指引](https://ethereum.org/en/wallets/find-wallet/)，或者看看[Metamask 的使用示例](/zh-CN/other/wallet)。在钱包 App 或者浏览器插件中可以查看您的账户地址 address(即公钥)，也可以导出私钥（请注意，私钥代表着您的资产，一定妥善保管不能泄露）。

所以由上述可得出结论，**您用哪个钱包账户私钥签名的订单，就可以用那个钱包登录商户后台管理系统查看一系列的订单流水、各类统计信息，以及提现**。

## 调用订单创建接口

**url**: https://api-tron-v1.dpay.systems/v1/order/create

**method**: POST

**content-type**: application/json

**body**:

| 参数 类型    | 类型   | 描述                                                          |
| ------------ | ------ | ------------------------------------------------------------- |
| out_order_no | string | 订单号（由商家自定义）                                        |
| pay_chain    | string | 区块链描述（指定 tron）                                       |
| pay_token    | string | 支付币种合约（指定 USDT: TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t） |
| pay_amount   | string | 支付金额（无需带币种精度，如：1.2）                           |
| notify       | string | 支付成功通知地址（如：127.0.0.1 等 URL 地址）                 |
| signature    | string | 以上字段用私钥签名的后的数据([查看签名指引](/zh-CN/other/signOrder))      |

**请求响应体**：

| 参数            | 描述                           |
| --------------- | ------------------------------ |
| **deadline**    | 订单过期时间（由系统后台指定） |
| **rec_address** | 随机生成的临时收款地址         |
| out_order_no    | 订单号                         |
| rec_chain       | 区块链描述                     |
| pay_token       | 支付币种合约                   |
| pay_amount      | 支付金额（无需带币种精度）     |
| uuid            | 订单唯一编号                   |

