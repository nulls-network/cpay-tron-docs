---
title: 后端充值通知回调
description: 后端充值通知回调
layout: ../../layouts/MainLayout.astro
---

## 说明

绑定用户固定收款地址后，用户对该地址的转账可以认做为用户充值。
签名字段顺序: out_order_no,uuid,merchant_address,type,amount,amount_hex,got_amount,pay_result,token,bind_uuid,user_id
解出系统指定的公钥为 0x8a03fde2d906217dd9d2ae26f66ec5d9635945b7

## 接入

详见[绑定用户收款地址](/zh-CN/bindReceiveAddress)

## 通知 body 示例

```json
{
  out_order_no: "1652342887226",
  uuid: "aa24f0a5-c8e2-45da-a062-05693b0112b7",
  merchant_address: "0x8cf6F24dddb965e6636d46129f28050c3357c43b",
  type: "recharge",
  amount: "0.0100",
  amount_hex: "10000",
  got_amount: "0.0100",
  pay_result: "success",
  token: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  bind_uuid: "10925df6-221c-44ab-905f-df5e48697815",
  user_id: "5261807812",
  sign:"0xdf26ba7ff8d6933bbe63271b9d266440c63cb630676a2c05a55fc72f7d639ae62af7125bef4fea1df29983652d8b934d72602f971fb66591a080daf786ecdb4e1b"
}
```
