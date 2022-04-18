---
title: 后端充值通知回调
description: 后端充值通知回调
layout: ../../layouts/MainLayout.astro
---

## 说明

绑定用户固定收款地址后，用户对该地址的转账可以认做为用户充值。

## 接入

详见[绑定用户收款地址](/zh-CN/bindReceiveAddress)

## 通知 body 示例

```json
{
  "out_order_no": "1650256013709",
  "uuid": "a4909c34-d137-482b-9c51-b4a9ab8ec2eb",
  "type": "recharge",
  "amount_hex": "131000",
  "got_amount": "0.1310",
  "pay_result": "success",
  "bing_uuid": "8070687a-eb54-4f54-a24f-51bcebb7a1f6",
  "user_id": "QQ1234",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "sign": "0x05f4264d6af47c9aee0b6824ab0230cde3203e4cfdd3d2325aeace57f29ca99558065ab7a5e492a90e8ab341512c7adc988c906ff29194d0b929cab466cb3a561c"
}
```
