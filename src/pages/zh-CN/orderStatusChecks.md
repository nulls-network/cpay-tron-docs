---
title: 监听订单状态
description: 监听订单状态
layout: ../../layouts/MainLayout.astro
---

## 订单状态轮询

#### 1.pay_result 订单状态

pay_result 状态为'normal','success','faild'的其中一种，suceess 表示已成功支付订单

#### 2.got_amount 订单已支付金额

got_amount 大于或等于订单金额

## 接口说明

**url**: https://api-tron-v1.dpay.systems/v1/order/$uuid

**param**: uuid 订单标识号（在创建订单接口中返回）

**method**: GET

**请求响应体**：

| 参数           | 描述                                   |
| -------------- | -------------------------------------- |
| **pay_result** | 订单状态（'normal','success','faild'） |
| sign_addr      | 订单签名地址（即商户签名订单的公钥）   |
| deadline       | 订单过期时间（由系统后台指定）         |
| rec_address    | 随机生成的临时收款地址                 |
| out_order_no   | 订单号                                 |
| rec_chain      | 区块链描述                             |
| pay_token      | 支付币种合约                           |
| pay_amount     | 支付金额（无需带币种精度）             |
| uuid           | 订单唯一编号                           |
