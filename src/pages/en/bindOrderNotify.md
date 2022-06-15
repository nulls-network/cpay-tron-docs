---
title: Recharge notification
description: Recharge notification
layout: ../../layouts/MainLayout.astro
---

## Illustrate

After binding the user's fixed payment address, the user's transfer to this address can be regarded as the user's recharge.

## API

See [Binding User's Payment Address](/en/bindReceiveAddress)

## Notification body example

```json
{
  out_order_no: '1652342887226',
  uuid: 'aa24f0a5-c8e2-45da-a062-05693b0112b7',
  merchant_address: '0x8cf6F24dddb965e6636d46129f28050c3357c43b',
  type: 'recharge',
  amount: '0.0100',
  amount_hex: '10000',
  got_amount: '0.0100',
  pay_result: 'success',
  token: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  bind_uuid: '10925df6-221c-44ab-905f-df5e48697815',
  user_id: '5261807812',
 sign:'0xdf26ba7ff8d6933bbe63271b9d266440c63cb630676a2c05a55fc72f7d639ae62af7125bef4fea1df29983652d8b934d72602f971fb66591a080daf786ecdb4e1b'
}
```
