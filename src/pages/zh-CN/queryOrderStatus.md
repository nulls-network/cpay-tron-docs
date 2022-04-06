---
title: 监听订单状态
description: 监听订单状态
layout: ../../layouts/MainLayout.astro
---

## 接口说明

**请求地址**: [[baseUrl]](/zh-CN/variables)/v1/order/$uuid

**请求参数**: uuid 订单标识号（在创建订单接口中返回）

**请求方法**: GET

**请求响应体**：

| 字段           | 描述                                   |
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

## 请求示例

### 请求参数

uuid: 20c3b1f6-3029-42b9-838c-4841e2686ade

[[baseUrl]](/zh-CN/variables)/api/v1/order/20c3b1f6-3029-42b9-838c-4841e2686ade

### 请求响应

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "uuid": "20c3b1f6-3029-42b9-838c-4841e2686ade",
    "out_order_no": "1648198831086",
    "rec_chain": "tron",
    "pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "rec_address": "TYeBsrLJFV2RFMoGgxN3BWKmKjRvxmoqBL",
    "deadline": 1648200638,
    "pay_amount": "0.1",
    "pay_result": "normal",
    "sign_addr": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d"
  }
}
```
