---
title: 提现接口
description: 提现接口
layout: ../../layouts/MainLayout.astro
---

## 提现接口

**请求地址**: [[baseUrl]](/zh-CN/config)/v1/merchant/doWithdraw

**请求方法**: POST

**content-type**: application/json

**请求体**:

| 参数      | 类型   | 描述                                                                    |
| --------- | ------ | ----------------------------------------------------------------------- |
| to        | string | 提现到指定账户（base58 格式），如 TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9    |
| token     | string | 指定波场 USDT，TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t                       |
| amount    | string | 提现金额（带币种精度）                                                  |
| fromChain | string | 指定 tron , 目前仅支持波场链                                            |
| toChain   | string | 指定 tron , 目前仅支持波场链                                            |
| uuid      | string | 商户自行生成随机字符，防止签名值重复                                    |
| signature | string | 以上字段签名生成                                                        |
| from      | string | 商户钱包地址（hex 格式，如 0x2143d11B31b319C008F59c2D967eBF0E5ad2791d） |

**响应体**

| 字段 | 类型   | 描述                |
| ---- | ------ | ------------------- |
| hash | string | 申请提现的交易 hash |

## 请求示例

### 请求体

```json
{
  "to": "TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "amount": "2000",
  "fromChain": "tron",
  "toChain": "tron",
  "uuid": "2036a504-d1ec-4497-8612-a9e663b06922",
  "signature": "0xae4413272b5a386fb9972dae8db377092545f0a30ffa6e22d2308d4e6301a630295cdc483c741aaddb707597903e1218393c634c5211f10a65622bf4f38569d11c",

  "from": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",//无需参与签名
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

## 测试

### 1.查询余额

![assets](/assets.png)

### 2.签名（使用的集成服务）

![assets](/sign-withdraw.png)

### 3.调用提现

![assets](/withdraw.png)

