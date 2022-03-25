---
title: 查询商户余额
description: 查询商户余额
layout: ../../layouts/MainLayout.astro
---

## 接口说明

**请求地址**: [[baseUrl]](/zh-CN/config)/v1/merchant/balanceOf

**请求方法**: POST

**content-type**: application/json

**请求体**:

| 参数     | 类型   | 描述                                                                    |
| -------- | ------ | ----------------------------------------------------------------------- |
| merchant | string | 商户钱包地址（hex 格式，如 0x669a9457817Ae9A24527E77C9a4629A4bF65D772） |
| chain    | string | 指定 tron ，即波场主网                                                  |
| token    | string | 指定 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t ，即主网 USDT                   |

**响应体**：

| 字段   | 描述                                 |
| ------ | ------------------------------------ |
| total  | 总余额(带币种精度)                   |
| freeze | 冻结余额（未结算的余额）(带币种精度) |

## 请求示例

### 请求体

```json
{
  "merchant": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "chain": "tron",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
}
```

### 请求响应

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "total": "379000",
    "freeze": "166000"
  }
}
```
