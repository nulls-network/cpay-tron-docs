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
  "uuid": "673c52e3-0619-44da-b523-d21e86f2b99c",
  "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "user_address": "TJbEAogwhGyUGFYTvnqKnRUyK5AKaYCoud",
  "rec_address": "TPb37NeuvgxpjTn5y5uZz8ujp3oedg2Mm3",
  "out_order_no": "1648195928579",
  "rec_amount": "0.012",
  "rec_amount_nd": "12000",
  "sign": "0x6eb8a865fb103c9dcc1168220cb3d2b57a78a4521fffa4f21a28aed2ff1c22e305cf7251745311dd86917ea84942d276b138efc4fd260829c2e408e47a571e1e1b"
}
```
