---
title: 绑定用户收款地址
description: 绑定用户收款地址
layout: ../../layouts/MainLayout.astro
---

## 接口

**请求地址**: [[baseUrl]](/zh-CN/variables)/v1/bing/merchantBingAddress

**请求方法**: POST

**content-type**: application/json

**请求体**:

| 参数             | 类型   | 描述                                        |
| ---------------- | ------ | ------------------------------------------- |
| merchant_address | string | 商户钱包公钥（hex 格式，如 0x669a...5D772） |
| user_id          | string | 用户 ID                                     |
| notify           | string | 同订单 notify，通知回调 URL                 |
| chain_name       | string | 指定 tron                                   |
| signature        | string | 以上字段使用私钥进行签名                    |

**请求响应体**：

| 字段             | 描述                 |
| ---------------- | -------------------- |
| merchant_address | 商户地址             |
| user_id          | 用户 ID              |
| rec_address      | 该用户的绑定收款地址 |
| uuid             | 唯一编号             |

## 请求示例

### 请求体

```json
{
  "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "user_id": "QQ1234",
  "chain_name": "tron",
  "notify": "https://test-notify.vercel.app/api/index",
  "signature": "0x184b1e0301d4298adbcd68d4e198fb0af254e1978515d03972bced82493c13024c887843e2cad32b0772ef0429dee987bf5ebe76eb00d1bc6b2630e64b0392d81c"
}
```

### 请求响应

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
    "user_id": "QQ1234",
    "rec_address": "TT7o88adWWCEzn9e5JMknFy9z7smtMd2QA",
    "uuid": "8070687a-eb54-4f54-a24f-51bcebb7a1f6"
  }
}
```

## 测试

### 1.使用测试工具

![sign](/bind-api.png)

### 2.转账交易

![sign-bind](/bind-transfer.png)

### 3.充值通知

![notify-bind](/bind-notice.png)
