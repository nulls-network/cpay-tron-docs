---
title: 创建订单
description: 创建订单
layout: ../../layouts/MainLayout.astro
---

## 调用订单创建接口

**url**: [[baseUrl]](/zh-CN/config)/v1/order/create

**method**: POST

**content-type**: application/json

**body**:

| 参数 类型    | 类型   | 描述                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------ |
| out_order_no | string | 订单号（由商家自定义）                                                   |
| pay_chain    | string | 区块链描述（指定 tron）                                                  |
| pay_token    | string | 支付币种合约（指定 USDT: TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t）            |
| pay_amount   | string | 支付金额（无需带币种精度，如：1.2）                                      |
| notify       | string | 支付成功通知地址,系统对该URL发送POST请求  |
| signature    | string | 以上字段用私钥签名的后的数据([查看签名指引](/zh-CN/signOrderJavascript)) |
| pub_key      | string | 签名所用的公钥                                                           |

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
