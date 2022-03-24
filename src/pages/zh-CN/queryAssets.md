---
title: 查询商户余额
description: 查询商户余额
layout: ../../layouts/MainLayout.astro
---

## 查询商户余额接口

**url**: [baseUrl](/zh-CN/config)/v1/merchant/balanceOf

**method**: POST

**content-type**: application/json

**body**:

| 参数    | 类型   | 描述                                                                    |
| ------- | ------ | ----------------------------------------------------------------------- |
| user    | string | 商户钱包地址（hex 格式，如 0x669a9457817Ae9A24527E77C9a4629A4bF65D772） |
| chainId | string | 指定 100000001 ，即波场主网                                             |
| token   | string | 指定 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t ，即主网 USDT                   |

**请求响应体**：

| 字段   | 描述                                 |
| ------ | ------------------------------------ |
| total  | 总余额(带币种精度)                   |
| freeze | 冻结余额（未结算的余额）(带币种精度) |

## 测试

![assets](/assets.png)
