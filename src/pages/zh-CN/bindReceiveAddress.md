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

| 参数             | 类型   | 描述                                                               |
| ---------------- | ------ | ------------------------------------------------------------------ |
| merchant_address | string | 商户钱包公钥（hex 格式，如 0x669a...5D772）                        |
| user_address     | string | 用户钱包地址（base58 格式，如 TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9） |
| notify           | string | 同订单 notify，通知回调 URL                                        |
| chain_name       | string | 指定 tron                                                          |
| signature        | string | 以上字段使用私钥进行签名                                           |

**请求响应体**：

| 字段             | 描述                 |
| ---------------- | -------------------- |
| merchant_address | 商户地址             |
| user_address     | 用户地址             |
| rec_address      | 该用户的绑定收款地址 |
| uuid             | 唯一编号             |

## 请求示例

### 请求体

```json
{
  "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "user_address": "TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9",
  "notify": "https://test-notify.vercel.app/api/index",
  "chain_name": "tron",
  "signature": "0xf9fd2dfdc6b1a162a2c371355a86350a8ac7c935514b0b939cd1e583757eaa7a10642c10cf1186d34390f0d816d7ba87e7e7c06a7c14c6aad524b921724dc0a51b"
}
```

### 请求响应

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
    "user_address": "TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9",
    "rec_address": "TJNdmSG6Ra1sRK3FbPDKEckRdVSwvnzQQz",
    "uuid": "a86ef090-7960-4322-9cea-46ac17d90eba"
  }
}
```

## 测试

### 1.签名（使用的集成服务）

![sign](/sign-bindAddress.png)

### 2.请求绑定接口

![sign-bind](/bindAddress.png)

### 3.充值通知

![notify-bind](/notify-bindAddress.png)
