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
