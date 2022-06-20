---
title: 提现接口(可通知回调)
description: 提现接口(可通知回调)
layout: ../../layouts/MainLayout.astro
---

## 提现接口(可通知回调)

**请求地址**: [[baseUrl]](/zh-CN/variables)/v1/merchant/withdrawAndNotify

**请求方法**: POST

**content-type**: application/json

**签名字段顺序:**

to,token,amount,fromChain,toChain,uuid,notify_url

**请求体**:

| 参数      | 类型   | 描述                                                                    |
| --------- | ------ | ----------------------------------------------------------------------- |
| to        | string | 提现到指定账户（base58 格式），如 TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9    |
| token     | string | 指定波场 USDT，TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t                       |
| amount    | string | 提现金额（带币种精度）                                                  |
| fromChain | string | 指定 tron , 目前仅支持波场链                                            |
| toChain   | string | 指定 tron , 目前仅支持波场链                                            |
| uuid      | string | 商户自行生成随机字符，防止签名值重复                                    |
| notify_url| string | 结果的回调地址 |     
| signature | string | 以上字段签名生成 采用了V1的签名方式                                         |
| from      | string | 商户钱包地址（hex 格式，如 0x2143d11B31b319C008F59c2D967eBF0E5ad2791d） |

**响应体**

| 字段 | 类型   | 描述                |
| ---- | ------ | ------------------- |
| hash | string | 申请提现的交易 hash |

## 请求示例

### 请求体

```json
{
  "to": "TQZhgSEiWaavy1SBtxHxr7ucPpCRqjomvr",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "amount": "10000",
  "fromChain": "tron",
  "toChain": "tron",
  "uuid": "20220617163737",
  "signature": "0xce52adc67f7d508c593f2c7c77e68f369d1e1aeb9445d0a415049677328248222b69e5082cc19b30d518e77f533dde22c05ed79f472a435a6159f9151c9377511b",
  "from": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "notify_url": "https://test-notify.vercel.app/api/index"
}
```

### 请求响应

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "hash": "0xaab6122297b5a0302549372381a735dc51a3ed5fc0b641339ce1a1097f920bb2"
  }
}
```



