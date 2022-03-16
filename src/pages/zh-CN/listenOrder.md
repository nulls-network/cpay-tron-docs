---
title: 监听订单状态
description: 监听订单状态
layout: ../../layouts/MainLayout.astro
---

## 订单状态查询接口

通过轮询的方式调用接口，根据status字段来判断用户是否支付，根据got_amount字段来检查用户的付款金额。

判断订单完成的条件：got_amount大于或等于订单金额，且status状态为['payed', 'submited', 'finished']的其中一种

**url**: https://api-tron-v1.dpay.systems/v1/order/$uuid

示例： https://api-tron-v1.dpay.systems/v1/order/fc47b7a9-5bd2-49e9-845d-6c3d7eea1113

**query param**: uuid 订单标识号

**method**: GET

**请求响应体**：

| 参数         | 描述                                                  |
| ------------ | ----------------------------------------------------- |
| **status**   | 订单状态（'normal'，'payed', 'submited', 'finished'） |
| sign_addr    | 订单签名地址（即商户签名订单的公钥）                  |
| deadline     | 订单过期时间（由系统后台指定）                        |
| rec_address  | 随机生成的临时收款地址                                |
| out_order_no | 订单号                                                |
| rec_chain    | 区块链描述                                            |
| pay_token    | 支付币种合约                                          |
| pay_amount   | 支付金额（无需带币种精度）                            |
| uuid         | 订单唯一编号                                          |
