---
title: 提现接口
description: 提现接口
layout: ../../layouts/MainLayout.astro
---

## 提现接口

**url**: [[baseUrl]](/zh-CN/config)/v1/merchant/doWithdraw

**method**: POST

**content-type**: application/json

**body**:

| 参数      | 类型   | 描述                                                                    |
| --------- | ------ | ----------------------------------------------------------------------- |
| from      | string | 商户钱包地址（hex 格式，如 0x669a9457817Ae9A24527E77C9a4629A4bF65D772） |
| to        | string | 提现到指定账户（base58 格式），如 TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9    |
| amount    | string | 提现金额（带币种精度）                                                  |
| fronChain | string | 指定 tron , 目前仅支持波场链                                            |
| toChain   | string | 指定 tron , 目前仅支持波场链                                            |
| uuid      | string | 商户自行生成随机字符，防止签名值重复                                    |
| signature | string | 以上字段签名生成                                                        |


## 测试

### 1.查询余额

![assets](/assets.png)

### 2.签名（使用的集成服务）

![assets](/sign-withdraw.png)

### 3.调用提现

![assets](/withdraw.png)

### 4.提现到账

![assets](/receive.png)
