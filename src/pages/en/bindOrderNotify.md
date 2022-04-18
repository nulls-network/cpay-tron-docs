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
