---
title: 创建订单
description: 创建订单
layout: ../../layouts/MainLayout.astro
---

## 接口说明

**请求地址**: [[baseUrl]](/zh-CN/variables)/v1/order/create

**请求方法**: POST

**Content-Type**: application/json

**请求体说明**:

| 参数 类型    | 类型   | 描述                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------ |
| out_order_no | string | 订单号（由商家自定义）                                                   |
| pay_chain    | string | 区块链描述（指定 tron）                                                  |
| pay_token    | string | 支付币种合约（指定 USDT: TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t）            |
| pay_amount   | string | 支付金额（无需带币种精度，如：1.2）                                      |
| notify       | string | 支付成功通知地址,系统对该 URL 发送 POST 请求                             |
| signature    | string | 以上字段用私钥签名的后的数据([查看签名指引](/zh-CN/signOrderJavascript)) |
| pub_key      | string | 签名所用的公钥                                                           |

**响应体说明**：

| 参数            | 描述                           |
| --------------- | ------------------------------ |
| **deadline**    | 订单过期时间（由系统后台指定） |
| **rec_address** | 随机生成的临时收款地址         |
| out_order_no    | 订单号                         |
| rec_chain       | 区块链描述                     |
| pay_token       | 支付币种合约                   |
| pay_amount      | 支付金额（无需带币种精度）     |
| uuid            | 订单唯一编号                   |

## 请求示例

### 请求参数

**重要的事情说三遍**：“生成签名时注意参数传入顺序”，“生成签名时注意参数传入顺序”，“生成签名时注意参数传入顺序”

顺序为：订单号、区块链、币种合约、支付金额、通知回调地址

```json
{
  "out_order_no": "1648198131969",
  "pay_chain": "tron",
  "pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "pay_amount": "0.3",
  "notify": "http://localhost",
  "signature": "0x3eeb1f57fad2c78b2115c84cefac747fa75578e56f35aa11b0888fc53129be6c272ae826051a84d91b9080e4479d36d6f02d6380189ff2bb1d1cc2f57fac8ea11c",
  "privateKey": "f78494eb224f875d7e352a2b017304e11e6a3ce94af57b373ae82a73b3496cdd",
  "pub_key": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d"
}
```

### 响应示例

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "uuid": "b2f3cc6f-c528-462b-9a9e-fa00cb026892",
    "out_order_no": "1648198131969",
    "rec_chain": "tron",
    "pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "rec_address": "THd32LdWEjRRtPr87rrcQn6H8g7MQJ2Mqy",
    "deadline": 1648200176,
    "pay_amount": "0.3",
    "pay_result": "normal",
    "sign_addr": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d"
  }
}
```
