---
title: 绑定用户收款地址
description: 绑定用户收款地址
layout: ../../layouts/MainLayout.astro
---


## 接口

**url**: [baseUrl](/zh-CN/config)/v1/bing/merchantBingAddress

**method**: POST

**content-type**: application/json

**body**:

| 参数             | 类型   | 描述                                                               |
| ---------------- | ------ | ------------------------------------------------------------------ |
| merchant_address | string | 商户钱包公钥（hex 格式，如 0x669a...5D772）    |
| user_address     | string | 用户钱包地址（base58 格式，如TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9） |
| notify           | string | 同订单 notify，通知回调 RUL                                        |
| chain_name       | string | 指定 tron                                                          |
| signature        | string | 以上字段使用私钥进行签名                                           |

**请求响应体**：

| 字段             | 描述                 |
| ---------------- | -------------------- |
| merchant_address | 商户地址             |
| user_address     | 用户地址             |
| rec_address      | 该用户的绑定收款地址 |
| uuid             | 唯一编号             |


## 测试

### 1.签名（使用的集成服务）

![sign](/sign-bindAddress.png)


### 2.请求绑定接口

![sign-bind](/bindAddress.png)

### 3.转入通知

![notify-bind](/notify-bindAddress.png)

